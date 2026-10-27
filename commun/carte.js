/* ══════════════════════════════════════════════════════════════
   carte.js — la carte de France (france.html)
   Lit regions.js et les liste-livres.js : couleur des régions qui ont des livres,
   panneau d'information au survol, encarts d'outre-mer.
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var AME = window.AME || { regions: [] };
  var parId = {};
  AME.regions.forEach(function (r) { parId[r.id] = r; });

  var panneau = document.querySelector('.accueil-panneau');
  var pTitre = panneau.querySelector('.accueil-panneau-titre');
  var pTexte = panneau.querySelector('.accueil-panneau-texte');
  var pListe = panneau.querySelector('.accueil-panneau-livres');
  var pLien = panneau.querySelector('.accueil-panneau-lien');
  var accroche = panneau.innerHTML;

  function livresDe(r) { return (AME.livres && AME.livres[r.id]) || []; }
  function nbLivres(r) { return livresDe(r).length; }
  function phrase(n) {
    return n === 0 ? 'Bibliothèque en préparation' : n === 1 ? '1 livre dans la bibliothèque' : n + ' livres dans la bibliothèque';
  }

  /* Régions de la carte et des encarts */
  [].forEach.call(document.querySelectorAll('.region[data-id]'), function (a) {
    var r = parId[a.getAttribute('data-id')];
    if (!r) return;
    var n = nbLivres(r);
    a.classList.toggle('avec-livres', n > 0);
    a.setAttribute('aria-label', r.nom + ' — ' + phrase(n));
    var badge = document.querySelector('.accueil-badge[data-id="' + r.id + '"]');
    if (badge && n > 0) {
      badge.querySelector('text').textContent = n;
      badge.removeAttribute('hidden');
    }
    a.addEventListener('mouseenter', function () { montrer(r, a); });
    a.addEventListener('focus', function () { montrer(r, a); });
    a.addEventListener('mouseleave', cacher);
    a.addEventListener('blur', cacher);
  });

  var minuteur = null;
  function montrer(r, a) {
    clearTimeout(minuteur);
    panneau.classList.add('actif');
    pTitre.textContent = r.nom;
    pTexte.textContent = phrase(nbLivres(r));
    pListe.textContent = '';
    var liste = livresDe(r);
    liste.slice(0, 6).forEach(function (l) {
      var li = document.createElement('li');
      li.textContent = l.titre;
      pListe.appendChild(li);
    });
    if (liste.length > 6) {
      var plus = document.createElement('li');
      plus.className = 'plus';
      plus.textContent = '… et ' + (liste.length - 6) + ' autres';
      pListe.appendChild(plus);
    }
    pLien.href = a.getAttribute('href');
    pLien.hidden = false;
  }
  function cacher() {
    clearTimeout(minuteur);
    minuteur = setTimeout(function () {
      if (panneau.matches(':hover')) return;
      panneau.classList.remove('actif');
      pTitre.textContent = 'Les régions de France';
      pTexte.textContent = 'Survolez une région pour voir sa bibliothèque, cliquez pour l’ouvrir.';
      pListe.textContent = '';
      pLien.hidden = true;
    }, 250);
  }

  /* Outre-mer : affiché seulement si regions.js le demande */
  var encarts = document.querySelector('.accueil-encarts');
  if (encarts) encarts.hidden = !AME.afficherOutreMer;
  document.body.classList.toggle('avec-outremer', !!AME.afficherOutreMer);
})();
