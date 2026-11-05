/* ══════════════════════════════════════════════════════════════
   bibliotheque.js — la bibliothèque d'une région
   Les livres sont rangés debout, le dos visible. Au survol (ou au
   premier appui sur téléphone), le livre sort de l'étagère et
   pivote pour montrer sa couverture ; un clic l'ouvre.
   La liste des livres vient du fichier liste-livres.js de la région.
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var AME = window.AME || { regions: [], livres: {} };
  var id = document.body.getAttribute('data-region');
  var region = AME.regions.filter(function (r) { return r.id === id; })[0];
  var meuble = document.querySelector('.biblio-meuble');
  if (!region || !meuble) return;

  var livres = (AME.livres && AME.livres[id]) || [];
  var compte = document.querySelector('.biblio-compte');
  if (compte) compte.textContent = livres.length === 0 ? 'Bibliothèque en préparation' :
    livres.length === 1 ? '1 livre' : livres.length + ' livres';

  /* Couleurs de reliure (cuir) utilisées quand un livre n'a pas sa propre couleur */
  var CUIRS = ['#2C4A7C', '#8A2F2F', '#2F6655', '#9A5A22', '#5E4A8A', '#A07812', '#3B6680', '#8A4566', '#4F6E30', '#B0532E', '#24506B', '#6B6B2A'];
  var tactile = window.matchMedia('(hover: none)').matches;

  function hachage(t) { var h = 0; for (var i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0; return h; }
  function chemin(p) { return !p ? p : (p.indexOf('%') >= 0 ? p : encodeURI(p)); }

  /* ─── Le dos prend la couleur du cuir de la couverture ───
     La couleur est indiquée dans liste-livres.js (« couleur »). Si elle manque, on essaie
     de la mesurer sur l'image : la moyenne des tons moyens du pourtour de la couverture,
     sans les ornements dorés. (Cette mesure ne marche que sur le site en ligne :
     un navigateur l'interdit pour une page ouverte depuis l'ordinateur.)                */
  function couleurCuir(img) {
    var c = document.createElement('canvas'); c.width = 60; c.height = 90;
    var ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0, 60, 90);
    var d = ctx.getImageData(0, 0, 60, 90).data, px = [];
    for (var y = 0; y < 90; y++) for (var x = 4; x < 60; x++) {
      if (!(y < 5 || y > 84 || x < 6 || x > 56)) continue;          // le pourtour seulement
      var i = (y * 60 + x) * 4; px.push([d[i], d[i + 1], d[i + 2], d[i] + d[i + 1] + d[i + 2]]);
    }
    px.sort(function (u, v) { return u[3] - v[3]; });
    var sel = px.slice(Math.floor(px.length * .35), Math.floor(px.length * .75)), r = 0, g = 0, b = 0;
    sel.forEach(function (q) { r += q[0]; g += q[1]; b += q[2]; });
    return 'rgb(' + Math.round(r / sel.length) + ',' + Math.round(g / sel.length) + ',' + Math.round(b / sel.length) + ')';
  }
  function teinterDos(a, dos, img) {
    try { a.style.setProperty('--cuir', couleurCuir(img)); } catch (e) { /* page ouverte depuis l'ordinateur : couleur par défaut */ }
  }

  /* Une couleur de cuir claire (ex. « #E9C38C ») demande un titre foncé sur le dos */
  function estClair(c) {
    var m = /^#([0-9a-f]{6})$/i.exec(c || ''); if (!m) return false;
    var n = parseInt(m[1], 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    return (0.299 * r + 0.587 * g + 0.114 * b) > 165;
  }

  /* ─── Un livre : son dos, sa couverture et son étiquette ─── */
  function creerLivre(l, rang) {
    var h = hachage(l.titre || String(rang));
    var epaisseur = l.epaisseur || (30 + h % 15);          // largeur du dos, en px
    var hauteur = l.hauteur || 220;                          // hauteur du livre : la même pour tous
    var largeur = Math.round(hauteur * 0.72);                // largeur de la couverture
    var couleur = l.couleur || CUIRS[(h >>> 8) % CUIRS.length];

    var a = document.createElement('a');
    a.className = 'biblio-livre';
    a.href = chemin(l.page);
    a.style.setProperty('--ep', epaisseur + 'px');
    a.style.setProperty('--ht', hauteur + 'px');
    a.style.setProperty('--lg', largeur + 'px');
    a.style.setProperty('--cuir', couleur);
    a.setAttribute('aria-label', 'Ouvrir le livre « ' + l.titre + ' »');
    a.setAttribute('data-rang', rang);

    /* le dos, visible quand le livre est rangé */
    var dos = document.createElement('span');
    dos.className = 'biblio-dos';
    var dt = document.createElement('span');
    dt.className = 'biblio-dos-titre';
    dt.textContent = l.titre;
    dos.appendChild(dt);
    if (estClair(couleur)) dos.classList.add('dos-clair');   /* cuir clair : titre foncé, lisible */

    /* la couverture, qui apparaît quand le livre sort de l'étagère */
    var face = document.createElement('span');
    face.className = 'biblio-face';
    var secours = document.createElement('span');
    secours.className = 'biblio-face-secours';
    secours.textContent = l.titre;
    face.appendChild(secours);
    if (l.couverture) {
      var img = document.createElement('img');
      img.alt = '';
      img.onload = function () {
        face.classList.add('avec-image');
        if (!l.couleur) teinterDos(a, dos, img);
      };
      img.src = chemin(l.couverture);
      face.appendChild(img);
    }

    a.appendChild(dos);
    a.appendChild(face);

    var etiquette = document.createElement('span');
    etiquette.className = 'biblio-etiquette';
    etiquette.textContent = l.titre;
    if (l.sousTitre) { var sm = document.createElement('small'); sm.textContent = l.sousTitre; etiquette.appendChild(sm); }
    a.appendChild(etiquette);

    return { el: a, largeurDos: epaisseur };
  }

  /* ─── Les rayons : un par thème (si les livres ont un « theme »), sinon un seul ─── */
  function rayons() {
    var ordre = [], groupes = {};
    livres.forEach(function (l) {
      var t = l.theme || '';
      if (!groupes[t]) { groupes[t] = []; ordre.push(t); }
      groupes[t].push(l);
    });
    return ordre.map(function (t) { return { theme: t, livres: groupes[t] }; });
  }

  function ranger() {
    meuble.textContent = '';
    var cs = getComputedStyle(meuble);
    var place = meuble.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - (meuble.clientWidth < 600 ? 40 : 120);
    var nb = 0;
    rayons().forEach(function (r) {
      var planche = null, rempli = 0, premiere = true;
      r.livres.forEach(function (l) {
        var livre = creerLivre(l, nb++);
        if (!planche || rempli + livre.largeurDos + 3 > place) {
          planche = nouvellePlanche(premiere ? r.theme : '');
          premiere = false; rempli = 0;
        }
        planche.appendChild(livre.el);
        rempli += livre.largeurDos + 3;
      });
    });
    if (!livres.length) {
      var p = nouvellePlanche('');
      var vide = document.createElement('p');
      vide.className = 'biblio-vide';
      vide.textContent = 'Les livres de cette région sont en cours d’écriture. Revenez bientôt !';
      p.appendChild(vide);
    }
    /* au moins deux planches, pour l'allure du meuble */
    while (meuble.children.length < 2) nouvellePlanche('');
  }
  function nouvellePlanche(theme) {
    var p = document.createElement('div');
    p.className = 'biblio-planche';
    if (theme) {
      var plaque = document.createElement('span');
      plaque.className = 'biblio-rayon';
      plaque.textContent = theme;
      p.appendChild(plaque);
    }
    meuble.appendChild(p);
    return p;
  }

  var aide = document.querySelector('.biblio-aide');
  if (aide && tactile) aide.textContent = 'Touchez un livre pour le sortir de l\u2019étagère, touchez-le encore pour l\u2019ouvrir.';
  if (aide && livres.length) aide.textContent += ' Vous pouvez aussi choisir un titre dans le registre.';
  if (aide && !livres.length) aide.hidden = true;

  /* ─── Le registre : la liste de tous les titres, à côté de l'étagère ───
     Un clic sur un titre fait sortir le livre de l'étagère ; un clic sur sa
     couverture (ou sur « Ouvrir ») l'ouvre.                                   */
  var registre = null, listeReg = null, triAZ = false, recherche = '';
  function sansAccent(t) { return (t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  function cleTri(t) { return sansAccent(t).replace(/^(la |le |les |l'|l’|un |une |des )/, ''); }
  function construireRegistre() {
    if (!livres.length) return;
    var main = meuble.parentNode;
    var salle = document.createElement('div');
    salle.className = 'biblio-salle';
    main.insertBefore(salle, meuble);
    salle.appendChild(meuble);
    main.classList.add('avec-registre');

    registre = document.createElement('aside');
    registre.className = 'biblio-registre';
    registre.setAttribute('aria-label', 'Registre des titres');
    var det = document.createElement('details');
    det.open = !window.matchMedia('(max-width: 999px)').matches;
    var som = document.createElement('summary');
    som.innerHTML = '<span class="registre-titre">📜 Registre des titres</span><span class="registre-nb"></span>';
    som.querySelector('.registre-nb').textContent = livres.length + (livres.length > 1 ? ' livres' : ' livre');
    det.appendChild(som);

    var champ = document.createElement('input');
    champ.type = 'search'; champ.className = 'registre-cherche';
    champ.placeholder = 'Chercher un titre…'; champ.setAttribute('aria-label', 'Chercher un titre');
    champ.addEventListener('input', function () { recherche = sansAccent(champ.value.trim()); remplirRegistre(); });
    det.appendChild(champ);

    var tri = document.createElement('div');
    tri.className = 'registre-tri';
    [['📚 Étagère', false], ['🔤 A → Z', true]].forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = o[0];
      b.setAttribute('aria-pressed', String(o[1] === triAZ));
      b.addEventListener('click', function () {
        triAZ = o[1];
        tri.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        remplirRegistre();
      });
      tri.appendChild(b);
    });
    det.appendChild(tri);

    listeReg = document.createElement('ol');
    listeReg.className = 'registre-liste';
    det.appendChild(listeReg);
    registre.appendChild(det);
    salle.appendChild(registre);
    remplirRegistre();
  }
  function remplirRegistre() {
    listeReg.textContent = '';
    var items = livres.map(function (l, i) { return { l: l, i: i }; });
    if (recherche) items = items.filter(function (o) { return sansAccent(o.l.titre + ' ' + (o.l.sousTitre || '')).indexOf(recherche) >= 0; });
    if (triAZ) items.sort(function (u, v) { return cleTri(u.l.titre).localeCompare(cleTri(v.l.titre), 'fr'); });
    var theme = null;
    items.forEach(function (o) {
      if (!triAZ && (o.l.theme || '') !== theme) {
        theme = o.l.theme || '';
        if (theme) { var th = document.createElement('li'); th.className = 'registre-theme'; th.textContent = theme; listeReg.appendChild(th); }
      }
      var li = document.createElement('li');
      li.className = 'registre-item';
      li.setAttribute('data-rang', o.i);
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'registre-livre';
      var n = document.createElement('span'); n.className = 'registre-num'; n.textContent = (o.i + 1) + '.';
      var t = document.createElement('span'); t.className = 'registre-nom'; t.textContent = o.l.titre;
      if (o.l.sousTitre) { var sm = document.createElement('small'); sm.textContent = o.l.sousTitre; t.appendChild(sm); }
      b.appendChild(n); b.appendChild(t);
      b.addEventListener('click', function () { montrerLivre(o.i); });
      var ouv = document.createElement('a');
      ouv.className = 'registre-ouvrir'; ouv.href = chemin(o.l.page); ouv.textContent = 'Ouvrir ›';
      ouv.setAttribute('aria-label', 'Ouvrir le livre « ' + o.l.titre + ' »');
      li.appendChild(b); li.appendChild(ouv);
      listeReg.appendChild(li);
    });
    if (!items.length) {
      var rien = document.createElement('li'); rien.className = 'registre-rien'; rien.textContent = 'Aucun titre ne correspond.';
      listeReg.appendChild(rien);
    }
    marquerRegistre();
  }
  function marquerRegistre() {
    if (!listeReg) return;
    var r = actif ? actif.getAttribute('data-rang') : null;
    listeReg.querySelectorAll('.registre-item').forEach(function (li) {
      if (li.getAttribute('data-rang') === r) li.setAttribute('aria-current', 'true'); else li.removeAttribute('aria-current');
    });
  }
  /* clic sur un titre du registre : le livre vient à l'écran et sort de l'étagère */
  function montrerLivre(i) {
    var a = meuble.querySelector('.biblio-livre[data-rang="' + i + '"]');
    if (!a) return;
    var r = a.getBoundingClientRect();
    if (r.top < 60 || r.bottom > window.innerHeight - 30) {
      var doux = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      a.scrollIntoView({ block: 'center', behavior: doux ? 'smooth' : 'auto' });
    }
    rentrer();
    sortir(a);
    epingle = true;
  }

  construireRegistre();
  ranger();

  /* ─── Sortir un livre de l'étagère ───
     Le script suit lui-même la souris : un livre sorti le reste tant que la souris
     est sur sa couverture, même si celle-ci passe devant les livres voisins.     */
  var actif = null, minuteur = null, epingle = false;   /* épinglé : sorti depuis le registre */

  function nombre(a, nom) { return parseFloat(a.style.getPropertyValue(nom)) || 0; }
  /* décalage pour que la couverture reste dans le meuble */
  function recentrer(a) {
    var m = meuble.getBoundingClientRect(), r = a.getBoundingClientRect();
    var centre = r.left + r.width / 2, demi = nombre(a, '--lg') / 2 + 8;
    var decal = Math.min(0, m.right - (centre + demi)) + Math.max(0, m.left - (centre - demi));
    a.style.setProperty('--decal', Math.round(decal) + 'px');
  }
  /* la place occupée par la couverture d'un livre sorti : exactement la couverture visible */
  function zone(a) {
    var f = a.querySelector('.biblio-face').getBoundingClientRect();
    var r = a.getBoundingClientRect();
    /* deux zones : la couverture sortie, et le dos du livre (la souris peut glisser de l'une à l'autre) */
    return [{ g: f.left, d: f.right, h: f.top, b: f.bottom },
            { g: r.left - 3, d: r.right + 3, h: r.top - 4, b: r.bottom + 4 }];
  }
  function dans(z, x, y) {
    if (z.length) return z.some(function (k) { return dans(k, x, y); });
    return x >= z.g && x <= z.d && y >= z.h && y <= z.b;
  }
  /* le livre dont le dos est sous le point (x, y) */
  function livreSous(x, y) {
    var tous = meuble.querySelectorAll('.biblio-livre');
    for (var i = 0; i < tous.length; i++) {
      var r = tous[i].getBoundingClientRect();
      if (x >= r.left - 1.5 && x <= r.right + 1.5 && y >= r.top - 4 && y <= r.bottom + 4) return tous[i];
    }
    return null;
  }
  function sortir(a) {
    clearTimeout(minuteur);
    if (actif === a) return;
    rentrer();
    recentrer(a);
    a.classList.add('sorti');
    actif = a;
    marquerRegistre();
  }
  function rentrer() {
    clearTimeout(minuteur);
    if (actif) actif.classList.remove('sorti');
    actif = null;
    epingle = false;
    marquerRegistre();
  }
  function rentrerBientot() { clearTimeout(minuteur); minuteur = setTimeout(rentrer, 160); }
  function cible(x, y) { return (actif && dans(zone(actif), x, y)) ? actif : livreSous(x, y); }

  if (!tactile) {
    /* Écouté sur toute la page : seule la position de la souris compte.
       Le livre sort dès que la souris passe sur son dos, et rentre dès qu'elle
       quitte à la fois sa couverture et son dos.                             */
    document.addEventListener('mousemove', function (e) {
      var x = e.clientX, y = e.clientY;
      if (actif && dans(zone(actif), x, y)) return;       // on reste sur le livre sorti
      var a = livreSous(x, y);
      if (a) { epingle = false; sortir(a); }
      else if (actif && !epingle) rentrer();               // un livre choisi dans le registre reste sorti         // un autre dos : il sort ; ailleurs : on range
    }, { passive: true });
    document.documentElement.addEventListener('mouseleave', function () { if (!epingle) rentrer(); });
    window.addEventListener('blur', function () { if (!epingle) rentrer(); });
  }
  /* Clic : ouvre le livre sorti (et pas le voisin caché derrière sa couverture).
     Sur téléphone : 1er appui = le livre sort, 2e appui = il s'ouvre. */
  meuble.addEventListener('click', function (e) {
    if (e.detail === 0 && !e.clientX && !e.clientY) return;   // touche Entrée au clavier : comportement normal du lien
    var a = cible(e.clientX, e.clientY);
    if (!a) { rentrer(); return; }
    e.preventDefault();
    if (tactile && a !== actif) { sortir(a); return; }
    window.location.href = a.href;
  }, true);
  document.addEventListener('click', function (e) {
    if (actif && !meuble.contains(e.target) && !(registre && registre.contains(e.target))) rentrer();
  });
  /* Clavier : le livre qui a le focus sort de l'étagère (pas quand le focus vient d'un appui ou d'un clic) */
  var parPointeur = false;
  meuble.addEventListener('pointerdown', function () { parPointeur = true; });
  document.addEventListener('keydown', function () { parPointeur = false; });
  meuble.addEventListener('focusin', function (e) {
    if (parPointeur) return;
    var a = e.target.closest && e.target.closest('.biblio-livre');
    if (a) sortir(a);
  });
  meuble.addEventListener('focusout', function () { if (!parPointeur && !epingle) rentrerBientot(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && actif) rentrer(); });
  var t = null, derniere = meuble.clientWidth;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(function () { if (meuble.clientWidth !== derniere) { derniere = meuble.clientWidth; actif = null; epingle = false; ranger(); marquerRegistre(); } }, 200);
  });
})();
