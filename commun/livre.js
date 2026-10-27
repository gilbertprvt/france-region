/* ══════════════════════════════════════════════════════════════
   L'ÂME DES RÉGIONS — livre.js
   Lecture « comme un livre » : le contenu de la fiche est découpé
   en pages et se lit en tournant les pages.
   · Ordinateur : double page (livre ouvert) · Téléphone : page simple
   · Tourner : coins des pages, boutons, flèches ← → du clavier,
     glisser le doigt sur téléphone
   · Le menu du bandeau et les liens internes mènent à la bonne page
   · Bouton « Défilement » pour revenir à la lecture classique
     (le temps de la visite : le livre se rouvre toujours fermé)
   Aucune modification du contenu HTML n'est nécessaire : le script
   lit la colonne principale (.produit-layout) et la colonne de droite.
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var CLE_MODE = 'ame-lecture';          // mémorise « livre » ou « defilement »
  var DUREE = 850;                        // durée d'une page tournée (ms)
  var LARGEUR_DOUBLE = 900;               // en dessous : une seule page
  var PAGE_MAX = 680;                     // largeur maximale d'une page (px)

  /* Éléments que l'on peut couper entre deux pages (on coupe entre leurs enfants) */
  var DECOUPABLE = 'section, .histoire-texte, .tableau-wrap, table, tbody, .frise, .etapes-liste,' +
    ' .ouvrage-grid, .perso-groupe, .perso-grid, .vins-liste, .fort-grid, .commentaire,' +
    ' ul, ol, dl, .aside-card, .aside-card-body, .chiffres, .repere-grid, .compare,' +
    /* toute grille dont le nom finit par « -grid » (process-grid, destin-grid…), et quelques blocs des autres livres */
    ' [class$="-grid"], [class*="-grid "], .relance, .lexique, .frise-fil-fig, .schema-duo, .photo-duo,' +
    ' .ingredients-bloc, .ingredients-liste, .geo-etapes, .geo-etape, .causse-carte, .causse-carte-body, .temoignage,' +
    ' .recette-partie, .ingredients-grille, .encadres, .frise, .parcours-liste';
  /* Blocs de texte que l'on peut couper entre deux mots */
  var TEXTE_COUPABLE = 'p, .frise-texte, .etape-texte, .perso-desc, dd, li';
  /* Titres à ne jamais laisser seuls en bas de page */
  var TITRES = 'h2, h3, h4, thead, .frise-periode, .perso-groupe-titre, .aside-card-header,' +
    ' .ingredients-titre, .schema-titre, .frise-fil-sous, .etape-titre, dt';

  var layout = document.querySelector('.produit-layout');
  if (!layout) return;
  var conteneur = layout.parentElement;
  var reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* Titre courant en haut des pages : première ligne du grand titre du bandeau */
  var h1 = document.querySelector('.produit-hero-body h1');
  var titreLivre = h1 ? (h1.innerText || h1.textContent).split('\n')[0].trim()
                       : document.title.split(/\s[—–-]\s/)[0].trim();   // sans bandeau : titre de l'onglet

  /* Image de couverture : indiquée dans la page, sur <body data-livre-couverture="…"> */
  var srcCouverture = document.body.getAttribute('data-livre-couverture') || '';

  var mode = 'defilement', pages = [], contenus = [], premiere = {}, premiereContenu = {}, chapitres = [], courant = 0;
  var double = false, dims = null, anime = false;

  /* ─── Petits outils ─── */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function lireMode() { try { return localStorage.getItem(CLE_MODE) || 'livre'; } catch (e) { return 'livre'; } }
  function ecrireMode(m) { try { localStorage.setItem(CLE_MODE, m); } catch (e) {} }
  function sansEmoji(t) { return t.replace(/^[^\p{L}\p{N}]+/u, '').trim(); }

  /* ─── Interface : livre, coins, barre de commandes, bouton de bascule ─── */
  var livre = el('div', 'livre');
  var cadre = el('div', 'livre-cadre');
  var scene = el('div', 'livre-scene');
  var attente = el('div', 'livre-attente', 'Mise en pages…');
  var coinPrec = el('button', 'livre-coin livre-coin-prec');
  var coinSuiv = el('button', 'livre-coin livre-coin-suiv');
  coinPrec.type = coinSuiv.type = 'button';
  coinPrec.setAttribute('aria-label', 'Page précédente');
  coinSuiv.setAttribute('aria-label', 'Page suivante');
  cadre.appendChild(scene); cadre.appendChild(coinPrec); cadre.appendChild(coinSuiv); cadre.appendChild(attente);

  var barre = el('div', 'livre-barre');
  var bPrec = el('button', 'livre-btn', '‹ <span>Précédente</span>');
  var bSom = el('button', 'livre-btn livre-btn-discret', '☰ <span>Sommaire</span>');
  var compteur = el('span', 'livre-compteur');
  var bSuiv = el('button', 'livre-btn', '<span>Suivante</span> ›');
  var bDefil = el('button', 'livre-btn livre-btn-discret', '↕ <span>Défilement</span>');
  [bPrec, bSom, bSuiv, bDefil].forEach(function (b) { b.type = 'button'; });
  bDefil.title = 'Revenir à la lecture en faisant défiler la page';
  [bPrec, bSom, compteur, bSuiv, bDefil].forEach(function (x) { barre.appendChild(x); });
  /* Retour à la bibliothèque : adresse indiquée sur <body data-livre-retour="…"> */
  var retour = document.body.getAttribute('data-livre-retour');
  if (retour) {
    var bBiblio = el('a', 'livre-btn livre-btn-discret livre-btn-biblio', '📚 <span>Bibliothèque</span>');
    bBiblio.href = retour;
    bBiblio.title = 'Revenir à la bibliothèque de la région';
    barre.insertBefore(bBiblio, barre.firstChild);
  }
  livre.appendChild(cadre); livre.appendChild(barre);

  var bascule = el('button', 'livre-bascule', '📖 Lire comme un livre');
  bascule.type = 'button';
  document.body.appendChild(bascule);

  /* ─── Dimensions des pages ─── */
  function mesurer() {
    var cs = getComputedStyle(conteneur);
    var l = conteneur.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var dbl = l >= LARGEUR_DOUBLE;
    var pw = Math.floor(dbl ? Math.min(PAGE_MAX, l / 2) : Math.min(PAGE_MAX, l));
    var hb = barre.offsetHeight || 60;
    var ph = Math.max(440, Math.floor(window.innerHeight - hb - 32));
    return { dbl: dbl, w: pw, h: ph, vw: window.innerWidth };
  }
  function appliquer(d) {
    double = d.dbl;
    livre.classList.toggle('double', double);
    livre.classList.toggle('simple', !double);
    livre.classList.toggle('etroit', d.w < 520);
    livre.style.setProperty('--page-w', d.w + 'px');
    livre.style.setProperty('--page-h', d.h + 'px');
    livre.style.setProperty('--nb', double ? 2 : 1);
  }

  /* ─── Une page vierge ─── */
  function creerPage() {
    var p = el('div', 'livre-page');
    p.innerHTML = '<div class="livre-entete"><span class="livre-titre-livre"></span>' +
      '<span class="livre-chap"></span></div><div class="livre-contenu"></div><div class="livre-pied"></div>';
    p.querySelector('.livre-titre-livre').textContent = titreLivre;
    return p;
  }

  /* ─── Préparer le contenu : sommaire, chapitres, annexes ─── */
  function preparerBlocs() {
    var src = layout.cloneNode(true);
    var col = src.firstElementChild;
    var aside = src.querySelector('aside');
    var cartes = aside ? [].slice.call(aside.children) : [];
    /* Tableaux : chaque cellule connaît le titre de sa colonne (affichage en fiches sur page étroite) */
    [].forEach.call(src.querySelectorAll('table'), function (tb) {
      var ths = [].map.call(tb.querySelectorAll('thead th'), function (th) { return th.textContent.trim(); });
      [].forEach.call(tb.querySelectorAll('tbody tr'), function (tr) {
        [].forEach.call(tr.children, function (td, k) { if (ths[k]) td.setAttribute('data-label', ths[k]); });
      });
    });
    var sections = [].slice.call(col.children).filter(function (n) { return n.matches('section'); });
    chapitres = [];

    sections.forEach(function (s) {
      var t = s.querySelector('.section-titre');
      var icone = t && t.querySelector('.section-titre-icon') ? t.querySelector('.section-titre-icon').textContent : '';
      var copie = t ? t.cloneNode(true) : null;
      if (copie && copie.querySelector('.section-titre-icon')) copie.querySelector('.section-titre-icon').remove();
      var lienNav = document.querySelector('.produit-nav a[href="#' + s.id + '"]');
      chapitres.push({
        id: s.id, icone: icone, partie: s.classList.contains('partie'),
        titre: copie ? copie.textContent.trim() : s.id,
        court: lienNav ? sansEmoji(lienNav.textContent) : (copie ? copie.textContent.trim() : '')
      });
    });

    /* Annexes : les cartes de la colonne de droite (sauf la carte d'identité) */
    var annexes = null;
    if (cartes.length > 1) {
      annexes = el('section', 'section livre-annexes');
      annexes.id = 'livre-reperes';
      annexes.innerHTML = '<h2 class="section-titre"><div class="section-titre-icon">🧭</div>Repères</h2>';
      cartes.slice(1).forEach(function (c) { annexes.appendChild(c); });
      chapitres.push({ id: annexes.id, icone: '🧭', titre: 'Repères : chiffres, glossaire, à retenir', court: 'Repères' });
    }

    /* Sommaire + carte d'identité */
    var som = el('section', 'section livre-sommaire');
    som.id = 'livre-sommaire';
    som.innerHTML = '<h2 class="section-titre"><div class="section-titre-icon">📑</div>Sommaire</h2>';
    var liste = el('ol', 'livre-som-liste');
    chapitres.forEach(function (c) {
      var li = el('li', c.partie ? 'som-partie' : null);
      var a = el('a');
      a.href = '#' + c.id;
      a.innerHTML = '<span class="livre-som-ico"></span><span class="livre-som-titre"></span>' +
        '<span class="livre-som-points"></span><span class="livre-som-num" data-num="' + c.id + '">000</span>';
      a.querySelector('.livre-som-ico').textContent = c.icone;
      a.querySelector('.livre-som-titre').textContent = c.titre;
      li.appendChild(a); liste.appendChild(li);
    });
    som.appendChild(liste);
    if (cartes[0]) som.appendChild(cartes[0]);
    chapitres.unshift({ id: som.id, icone: '📑', titre: 'Sommaire', court: 'Sommaire' });

    var blocs = [som].concat(sections);
    if (annexes) blocs.push(annexes);
    return blocs;
  }

  /* ─── Découpage en pages ─── */
  function paginer() {
    var blocs = preparerBlocs();
    var page, contenu, conts, pile = [], aDuContenu = false, chap = '', dernier = null;
    pages = [];
    scene.textContent = '';

    function tient() { return contenu.scrollHeight <= contenu.clientHeight + 1; }

    function coquille(src, suite) {
      var s = src.cloneNode(false);
      s.removeAttribute('id');
      s.setAttribute('data-coquille', '');
      if (suite) {
        s.classList.add('livre-suite');
        if (src.tagName === 'TABLE') {
          var th = src.querySelector(':scope > thead');
          if (th) s.appendChild(th.cloneNode(true));
        }
      }
      return s;
    }

    function nouvellePage() {
      if (page) scene.removeChild(page);
      page = creerPage();
      page.classList.add('livre-mesure');
      page.dataset.chap = chap;
      page.querySelector('.livre-pied').textContent = '000';        // même hauteur qu'une fois numérotée
      page.querySelector('.livre-chap').textContent = 'Chapitre';
      scene.appendChild(page);
      contenu = page.querySelector('.livre-contenu');
      conts = [contenu];
      pile.forEach(function (src) {
        var s = coquille(src, true);
        conts[conts.length - 1].appendChild(s);
        conts.push(s);
      });
      pages.push(page);
      aDuContenu = false;
    }

    /* Vrai si t est le dernier élément affiché sur la page en cours */
    function derniereFeuille(racine) {
      for (var e = racine.lastElementChild; e; e = e.previousElementSibling) {
        if (e.hasAttribute('data-coquille') && !e.textContent.trim()) continue;   // enveloppe encore vide
        return (e.children.length && !e.matches(TITRES) ? derniereFeuille(e) : null) || e;
      }
      return null;
    }
    function dernierDeLaPage(t) {
      var e = derniereFeuille(contenu);
      return !!e && (e === t || t.contains(e));
    }
    /* Titre qui termine un bloc (ex. un encadré dont le dernier élément est un titre) */
    function titreFinal(n) {
      if (n.nodeType !== 1) return null;
      if (n.matches(TITRES)) return n;
      var e = derniereFeuille(n);
      return e && e.matches(TITRES) ? e : null;
    }

    function placeApresTitre(parent) {
      var cale = el('div'); cale.style.height = '90px';
      parent.appendChild(cale);
      var ok = tient();
      parent.removeChild(cale);
      return ok;
    }

    /* Coupe un paragraphe entre deux mots. Renvoie false si trop peu de texte tiendrait. */
    function couperTexte(n, parent) {
      var essai = n.cloneNode(true);
      var noeuds = [].slice.call(essai.childNodes);
      var a = n.cloneNode(false);
      a.removeAttribute('id');
      parent.appendChild(a);
      var i = 0, resteTexte = null;
      for (; i < noeuds.length; i++) {
        var c = noeuds[i];
        a.appendChild(c);
        if (tient()) continue;
        a.removeChild(c);
        if (c.nodeType === 3) {
          var mots = c.textContent.split(/(\s+)/);
          var t = document.createTextNode('');
          a.appendChild(t);
          var bas = 0, haut = mots.length;
          while (bas < haut) {
            var m = (bas + haut + 1) >> 1;
            t.textContent = mots.slice(0, m).join('');
            if (tient()) bas = m; else haut = m - 1;
          }
          t.textContent = mots.slice(0, bas).join('');
          resteTexte = mots.slice(bas).join('');
        }
        break;
      }
      if (i >= noeuds.length) { parent.removeChild(a); return false; }   // (ne devrait pas arriver)
      var nbMots = a.textContent.trim() ? a.textContent.trim().split(/\s+/).length : 0;
      if (nbMots < (aDuContenu ? 12 : 1)) { parent.removeChild(a); return false; }

      var b = n.cloneNode(false);
      b.removeAttribute('id');
      b.classList.add('livre-suite');
      if (resteTexte != null) { b.appendChild(document.createTextNode(resteTexte.replace(/^\s+/, ''))); i++; }
      for (; i < noeuds.length; i++) b.appendChild(noeuds[i]);
      aDuContenu = true;
      dernier = a;
      nouvellePage();
      placer(b);
      return true;
    }

    function placer(n) {
      var parent = conts[conts.length - 1];
      if (n.nodeType === 3 && !n.textContent.trim()) { parent.appendChild(n); return; }
      if (n.nodeType !== 1 && n.nodeType !== 3) return;
      var titre = titreFinal(n);

      parent.appendChild(n);
      if (tient() && (!titre || placeApresTitre(parent))) { aDuContenu = true; dernier = titre || n; return; }
      parent.removeChild(n);

      /* Trop grand : on le coupe entre ses enfants */
      if (n.nodeType === 1 && n.matches(DECOUPABLE) && n.children.length > 0) {
        pile.push(n);
        var s = coquille(n, false);
        parent.appendChild(s);
        conts.push(s);
        [].slice.call(n.childNodes).forEach(placer);
        pile.pop();
        conts.pop();
        return;
      }
      /* Paragraphe : on remplit la fin de la page et la suite passe à la page suivante */
      if (n.nodeType === 1 && n.matches(TEXTE_COUPABLE) && couperTexte(n, parent)) return;

      /* Sinon : page suivante — en emmenant le titre qui le précède, pour ne pas le laisser seul */
      if (aDuContenu) {
        var t = dernier;
        var emmener = t && t !== n && t.nodeType === 1 && t.matches(TITRES) && t.parentNode && dernierDeLaPage(t);
        if (emmener) {
          var ancien = t.parentNode, place = t.nextSibling;
          ancien.removeChild(t);
          if (!contenu.textContent.trim()) { ancien.insertBefore(t, place); emmener = false; }   // le titre était seul : on le laisse
        }
        nouvellePage();
        if (emmener) placer(t);
        placer(n);
        return;
      }
      /* Plus grand qu'une page entière et non découpable : on le garde, la page défilera */
      conts[conts.length - 1].appendChild(n);
      page.classList.add('livre-deborde');
      aDuContenu = true;
    }

    /* Place restante sur la page en cours (en part de la hauteur) */
    function placeRestante() {
      var sonde = el('div');
      contenu.appendChild(sonde);
      var reste = 1 - sonde.offsetTop / contenu.clientHeight;
      contenu.removeChild(sonde);
      return reste;
    }

    blocs.forEach(function (b, k) {
      chap = b.id;
      b.setAttribute('data-chapitre', chap);
      /* Un chapitre commence sur une nouvelle page… sauf s'il reste au moins 40 % de la page
         (pour éviter les pages presque vides). Le sommaire, le premier chapitre et les
         « Repères » commencent toujours sur une page neuve. */
      var toujoursNeuve = k <= 1 || b.id.indexOf('livre-') === 0 || b.classList.contains('partie') ||
        document.body.classList.contains('chapitres-page-neuve');   // ex. livre de recettes : une recette = une page neuve
      if (!page) nouvellePage();
      else if (aDuContenu && (toujoursNeuve || placeRestante() < 0.4)) nouvellePage();
      else if (!aDuContenu) page.dataset.chap = chap;
      placer(b);
    });
    if (page) scene.removeChild(page);

    /* Nettoyage : enveloppes vides et pages vides */
    pages = pages.filter(function (p) {
      p.classList.remove('livre-mesure');
      var cq = [].slice.call(p.querySelectorAll('[data-coquille]')).reverse();
      cq.forEach(function (c) { if (!c.children.length && !c.textContent.trim()) c.remove(); });
      return p.querySelector('.livre-contenu').children.length > 0;
    });

    /* Numéros, en-têtes, première page de chaque chapitre */
    premiereContenu = {};
    var courts = {};
    chapitres.forEach(function (c) { courts[c.id] = c.court; });
    pages.forEach(function (p, i) {
      var c = p.dataset.chap;
      /* les chapitres qui commencent sur cette page (début de page ou en cours de page) */
      [].forEach.call(p.querySelectorAll('[data-chapitre]:not(.livre-suite)'), function (e) {
        var id = e.getAttribute('data-chapitre');
        if (premiereContenu[id] == null) premiereContenu[id] = i;
      });
      if (premiereContenu[c] == null) premiereContenu[c] = i;
      p.dataset.num = i + 1;
      p.querySelector('.livre-pied').textContent = i + 1;
      p.querySelector('.livre-chap').textContent = courts[c] || '';
    });
    pages.forEach(function (p) {
      [].forEach.call(p.querySelectorAll('[data-num]'), function (s) {
        var n = premiereContenu[s.getAttribute('data-num')];
        s.textContent = n != null ? n + 1 : '';
      });
    });
    contenus = pages;
    assembler();
  }

  /* ─── Couverture, pages de garde, quatrième de couverture ─── */
  function creerCouverture() {
    var p = el('div', 'livre-page livre-couverture');
    var t = el('div', 'livre-couv-titre');
    t.textContent = titreLivre;
    if (srcCouverture) {
      var img = el('img');
      img.alt = 'Couverture : ' + titreLivre;
      img.draggable = false;
      img.onerror = function () { img.remove(); p.classList.add('sans-image'); };
      img.addEventListener('load', function () {
        /* largeur de la couverture = hauteur de page × proportions de l'image */
        var ratio = img.naturalWidth / img.naturalHeight;
        var h = parseFloat(livre.style.getPropertyValue('--page-h')) || 0;
        var w = parseFloat(livre.style.getPropertyValue('--page-w')) || 0;
        if (ratio > 0 && h && w) livre.style.setProperty('--couv-w', Math.round(Math.min(w, h * ratio)) + 'px');
      });
      img.src = srcCouverture.indexOf('%') >= 0 ? srcCouverture : encodeURI(srcCouverture);
      var fond = img.cloneNode();            // même image, floutée, pour remplir les bords sur écran étroit
      fond.className = 'livre-couv-fond';
      fond.alt = '';
      fond.onerror = null;
      p.appendChild(fond);
      p.appendChild(img);
    } else p.classList.add('sans-image');
    p.appendChild(t);
    p.title = 'Ouvrir le livre';
    p.addEventListener('click', function () { if (courant === 0) suivant(); });
    return p;
  }
  /* Page de garde : avec le titre du livre (au début), avec « FIN » (à la fin), ou vierge */
  function creerGarde(texte, classe) {
    var p = el('div', 'livre-page livre-garde');
    if (texte) {
      var t = el('div', classe || 'livre-garde-titre');
      t.textContent = texte;
      p.appendChild(t);
    }
    return p;
  }
  /* Quatrième de couverture : le cuir de la couverture, sans aucune inscription.
     On en montre un coin sans texte (en bas à droite de l'image), agrandi. */
  /* Quatrième de couverture : unie, dans le cuir de la couverture, sans aucune inscription.
     Sa couleur est indiquée sur <body data-livre-cuir="#…"> (sinon : couleur mesurée sur la
     couverture quand le site est en ligne, ou brun par défaut). */
  function creerDos() {
    var p = el('div', 'livre-page livre-dos avec-cuir');
    var cuir = document.body.getAttribute('data-livre-cuir');
    if (cuir) p.style.setProperty('--cuir-livre', cuir);
    else if (srcCouverture) {
      var im = new Image();
      im.onload = function () {
        try {
          var c = document.createElement('canvas'); c.width = 30; c.height = 45;
          var x = c.getContext('2d'); x.drawImage(im, 0, 0, 30, 45);
          var d = x.getImageData(26, 40, 3, 4).data, r = 0, g = 0, b = 0, n = d.length / 4;
          for (var i = 0; i < d.length; i += 4) { r += d[i]; g += d[i + 1]; b += d[i + 2]; }
          p.style.setProperty('--cuir-livre', 'rgb(' + Math.round(r / n) + ',' + Math.round(g / n) + ',' + Math.round(b / n) + ')');
        } catch (e) {}
      };
      im.src = srcCouverture.indexOf('%') >= 0 ? srcCouverture : encodeURI(srcCouverture);
    }
    p.title = 'Rouvrir le livre';
    p.addEventListener('click', function () { if (courant >= pages.length - 2) precedent(); });
    return p;
  }

  /* Ordre des pages.
     Double page : [rien | couverture] [garde | p.1] [p.2 | p.3] … [… | « FIN »] [quatrième | rien]
     Page simple : couverture, p.1, p.2, …, « FIN », quatrième                                    */
  var debutContenu = 0;
  function assembler() {
    if (double) {
      pages = [null, creerCouverture(), creerGarde(titreLivre)].concat(contenus);
      if (pages.length % 2 === 0) pages.push(pageVide());
      pages.push(creerGarde('FIN', 'livre-garde-fin'), creerDos(), null);
      debutContenu = 3;
    } else {
      pages = [creerCouverture()].concat(contenus, [creerGarde('FIN', 'livre-garde-fin'), creerDos()]);
      debutContenu = 1;
    }
    premiere = {};
    for (var k in premiereContenu) premiere[k] = premiereContenu[k] + debutContenu;
  }

  /* ─── Affichage ─── */
  function normaliser(i) {
    i = Math.max(0, Math.min(i, pages.length - 1));
    return double ? i - (i % 2) : i;
  }
  function pageVide() { var p = creerPage(); p.classList.add('livre-blanche'); p.querySelector('.livre-entete').textContent = ''; return p; }
  function pageOu(i) { return pages[i] === null ? null : (pages[i] || pageVide()); }
  function poser(p, cote, parent) {
    if (!p) return null;
    p.classList.remove('cote-g', 'cote-d', 'cote-u');
    p.classList.add(double ? (cote ? 'cote-d' : 'cote-g') : 'cote-u');
    p.style.left = (double && cote && parent === scene) ? 'var(--page-w)' : '0';
    (parent || scene).appendChild(p);
    return p;
  }

  /* Livre fermé : on le recentre sur la couverture (ou la quatrième) */
  function fermeture(i) {
    cadre.classList.toggle('ferme-avant', double && i === 0);
    cadre.classList.toggle('ferme-apres', double && i >= pages.length - 2);
  }
  function estCouverture(i) { return i === (double ? 0 : 0); }
  function estFin(i) { return double ? i >= pages.length - 2 : i === pages.length - 1; }

  function afficher() {
    scene.textContent = '';
    poser(pageOu(courant), 0, scene);
    if (double) poser(pageOu(courant + 1), 1, scene);
    fermeture(courant);

    var nums = [courant, courant + 1].slice(0, double ? 2 : 1)
      .map(function (i) { return pages[i] && pages[i].dataset.num; })
      .filter(Boolean);
    if (estCouverture(courant)) compteur.textContent = 'Cliquez sur la couverture pour ouvrir';
    else if (estFin(courant)) compteur.textContent = 'Fin du livre';
    else if (!nums.length) compteur.textContent = (pages[courant + (double ? 1 : 0)] && pages[courant + (double ? 1 : 0)].querySelector('.livre-garde-fin')) ? 'Fin' : 'Page de garde';
    else compteur.textContent = (nums.length > 1 ? 'Pages ' + nums[0] + '–' + nums[1] : 'Page ' + nums[0]) +
      ' sur ' + contenus.length;

    var auDebut = courant === 0, aLaFin = courant + (double ? 2 : 1) > pages.length - 1 ||
      (double && courant >= pages.length - 2);
    bPrec.disabled = coinPrec.disabled = auDebut;
    bSuiv.disabled = coinSuiv.disabled = aLaFin;
    coinPrec.hidden = auDebut || estFin(courant);
    coinSuiv.hidden = aLaFin || estCouverture(courant);
    livre.classList.toggle('sur-couverture', estCouverture(courant));
  }

  function chapCourant() {
    for (var k = 0; k < (double ? 2 : 1); k++) {
      var p = pages[courant + k];
      if (p && p.dataset.chap) return p.dataset.chap;
    }
    return null;
  }

  /* ─── Tourner les pages ─── */
  function tourner(cible) {
    cible = normaliser(cible);
    if (anime || cible === courant || !pages.length) return;
    var avance = cible > courant;
    if (reduit || !scene.animate) { courant = cible; afficher(); return; }
    anime = true;
    scene.textContent = '';
    fermeture(cible);   // le livre glisse au centre pendant qu'il s'ouvre ou se ferme

    var feuille = el('div', 'livre-feuille');
    var recto = el('div', 'livre-face livre-recto');
    var verso = el('div', 'livre-face livre-verso');
    var ombreR = el('div', 'livre-ombre'), ombreV = el('div', 'livre-ombre');
    feuille.appendChild(recto); feuille.appendChild(verso);
    var angle;

    if (double) {
      if (avance) {
        poser(pageOu(courant), 0, scene);          // reste à gauche
        poser(pageOu(cible + 1), 1, scene);        // apparaît dessous, à droite
        poser(pageOu(courant + 1), 1, recto);      // la feuille qui tourne…
        poser(pageOu(cible), 0, verso);            // …et son dos
        feuille.classList.add('depuis-droite');
        angle = [-0, -180];
      } else {
        poser(pageOu(cible), 0, scene);
        poser(pageOu(courant + 1), 1, scene);
        poser(pageOu(courant), 0, recto);
        poser(pageOu(cible + 1), 1, verso);
        feuille.classList.add('depuis-gauche');
        angle = [0, 180];
      }
    } else {
      /* Page simple : la page s'envole vers la gauche, ou revient */
      if (avance) {
        poser(pageOu(cible), 0, scene);
        poser(pageOu(courant), 0, recto);
        angle = [0, -115];
      } else {
        poser(pageOu(courant), 0, scene);
        poser(pageOu(cible), 0, recto);
        angle = [-115, 0];
      }
      feuille.classList.add('depuis-droite', 'feuille-simple');
    }
    recto.appendChild(ombreR); verso.appendChild(ombreV);
    scene.appendChild(feuille);

    var opts = { duration: DUREE, easing: 'cubic-bezier(.45,.05,.3,1)', fill: 'forwards' };
    var images = [{ transform: 'rotateY(' + angle[0] + 'deg)' }, { transform: 'rotateY(' + angle[1] + 'deg)' }];
    if (!double) {
      images[0].opacity = avance ? 1 : 0.2;
      images[1].opacity = avance ? 0.2 : 1;
    }
    var anim = feuille.animate(images, opts);
    var ombre = [{ opacity: 0 }, { opacity: 0.55, offset: 0.5 }, { opacity: 0 }];
    ombreR.animate(ombre, { duration: DUREE, easing: 'ease-in-out' });
    ombreV.animate(ombre, { duration: DUREE, easing: 'ease-in-out' });
    anim.onfinish = function () { anime = false; courant = cible; afficher(); };
  }
  function suivant() { tourner(courant + (double ? 2 : 1)); }
  function precedent() { tourner(courant - (double ? 2 : 1)); }
  function allerA(i) { tourner(i); }

  function amenerAuLivre() {
    var r = livre.getBoundingClientRect();
    if (r.top < -2 || r.bottom > window.innerHeight + 2) {
      window.scrollTo({ top: window.scrollY + r.top - 6, behavior: reduit ? 'auto' : 'smooth' });
    }
  }

  /* ─── Construire / reconstruire ─── */
  function construire(chapVoulu, decalage) {
    dims = mesurer();
    appliquer(dims);
    attente.hidden = false;
    paginer();
    attente.hidden = true;
    var i = 0;
    if (chapVoulu && premiere[chapVoulu] != null) i = premiere[chapVoulu] + (decalage || 0);
    courant = normaliser(i);
    afficher();
  }

  function chapitreVisibleEnDefilement() {
    var vu = null;
    [].forEach.call(layout.querySelectorAll(':scope > div > section[id]'), function (s) {
      if (s.getBoundingClientRect().top < window.innerHeight * 0.35) vu = s.id;
    });
    return vu;
  }

  function passerEnLivre(chap) {
    mode = 'livre';
    ecrireMode('livre');
    document.body.classList.add('mode-livre');
    bascule.hidden = true;
    if (layout.parentNode) layout.replaceWith(livre);
    var go = function () { construire(chap); if (chap) amenerAuLivre(); };
    if (document.fonts && document.fonts.ready) {
      var fait = false;
      var once = function () { if (!fait) { fait = true; go(); } };
      document.fonts.ready.then(once);
      setTimeout(once, 1500);
    } else go();
  }

  function passerEnDefilement() {
    var chap = chapCourant();
    mode = 'defilement';
    ecrireMode('defilement');
    document.body.classList.remove('mode-livre');
    bascule.hidden = false;
    if (livre.parentNode) livre.replaceWith(layout);
    var cible = chap && document.getElementById(chap);
    if (cible) cible.scrollIntoView({ block: 'start', behavior: 'instant' });
  }

  /* ─── Commandes ─── */
  bSuiv.addEventListener('click', function () { suivant(); amenerAuLivre(); });
  bPrec.addEventListener('click', function () { precedent(); amenerAuLivre(); });
  coinSuiv.addEventListener('click', function () { suivant(); amenerAuLivre(); });
  coinPrec.addEventListener('click', function () { precedent(); amenerAuLivre(); });
  bSom.addEventListener('click', function () { allerA(premiere['livre-sommaire'] || 0); amenerAuLivre(); });
  bDefil.addEventListener('click', passerEnDefilement);
  bascule.addEventListener('click', function () { passerEnLivre(chapitreVisibleEnDefilement()); });

  document.addEventListener('keydown', function (e) {
    if (mode !== 'livre' || e.altKey || e.ctrlKey || e.metaKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''))) return;
    var k = e.key;
    if (k === 'ArrowRight' || k === 'PageDown') { e.preventDefault(); suivant(); amenerAuLivre(); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); precedent(); amenerAuLivre(); }
    else if (k === 'Home') { e.preventDefault(); allerA(0); }
    else if (k === 'End') { e.preventDefault(); allerA(pages.length - 1); }
  });

  /* Glisser le doigt (téléphone, tablette) */
  var tx = null, ty = 0;
  scene.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) { tx = null; return; }
    tx = e.touches[0].clientX; ty = e.touches[0].clientY;
  }, { passive: true });
  scene.addEventListener('touchend', function (e) {
    if (tx == null) return;
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    tx = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) { if (dx < 0) suivant(); else precedent(); }
  }, { passive: true });

  /* Menu du bandeau et liens internes (#…) : aller à la bonne page.
     Écouté en phase de capture pour passer avant le défilement d'origine. */
  document.addEventListener('click', function (e) {
    if (mode !== 'livre') return;
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (premiere[id] == null) return;
    e.preventDefault();
    e.stopPropagation();
    allerA(premiere[id]);
    amenerAuLivre();
  }, true);

  /* Schémas dessinés : un clic (ou un toucher) les ouvre en grand, pour lire les détails sur téléphone */
  var loupe = null;
  function fermerLoupe() { if (loupe) { loupe.remove(); loupe = null; } }
  document.addEventListener('click', function (e) {
    if (loupe || !e.target.closest) return;
    var f = e.target.closest('.livre-page .schema');
    var svg = f && f.querySelector(':scope > svg');
    if (!svg) return;
    e.stopPropagation();
    loupe = el('div', 'schema-loupe');
    var fermer = el('button', 'schema-loupe-fermer', '✕');
    fermer.setAttribute('aria-label', 'Fermer le schéma');
    loupe.appendChild(fermer);
    var t = f.querySelector('.schema-titre');
    if (t) loupe.appendChild(el('div', 'schema-loupe-titre', t.textContent));
    var zone = el('div', 'schema-loupe-zone');
    zone.appendChild(svg.cloneNode(true));
    loupe.appendChild(zone);
    var cap = f.querySelector('figcaption');
    if (cap) loupe.appendChild(el('div', 'schema-loupe-legende', cap.textContent));
    loupe.addEventListener('click', function (ev) { if (ev.target === loupe || ev.target === fermer) fermerLoupe(); });
    document.body.appendChild(loupe);
    fermer.focus();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fermerLoupe(); }, true);

  /* Changement de taille d'écran : nouvelle mise en pages, même chapitre */
  var minuteur = null;
  window.addEventListener('resize', function () {
    if (mode !== 'livre') return;
    clearTimeout(minuteur);
    minuteur = setTimeout(function () {
      var d = mesurer();
      /* (les petites variations de hauteur dues à la barre d'adresse du téléphone sont ignorées) */
      var change = d.dbl !== dims.dbl || d.w !== dims.w || Math.abs(d.h - dims.h) > 120;
      if (!change || anime) return;
      var chap = chapCourant();
      construire(chap, chap ? courant - premiere[chap] : 0);
    }, 300);
  });

  /* ─── Démarrage ─── */
  /* Le livre s'ouvre toujours fermé, sur sa couverture (même si l'on avait choisi le défilement la fois précédente) */
  passerEnLivre(null);
})();
