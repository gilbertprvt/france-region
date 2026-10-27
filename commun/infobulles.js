/* ══════════════════════════════════════════════════════════════
   infobulles.js — les petits boutons « ? » d'explication
   Dans le texte d'un livre :
     <button class="info" data-titre="Mot" data-texte="Explication…">?</button>
   Un clic ouvre une petite fenêtre sous le bouton ; un clic ailleurs
   ou la touche Échap la referme.
   (Fonctionne aussi dans les pages du livre, qui sont créées après
   le chargement : le clic est surveillé sur toute la page.)
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var popup = document.createElement('div');
  popup.className = 'popup';
  popup.setAttribute('role', 'dialog');
  popup.innerHTML = '<div class="popup-titre"></div><div class="popup-texte"></div>' +
                    '<button type="button" class="popup-fermer">Fermer</button>';
  document.body.appendChild(popup);
  var titre = popup.querySelector('.popup-titre');
  var texte = popup.querySelector('.popup-texte');

  function ouvrir(bouton) {
    titre.textContent = bouton.getAttribute('data-titre') || '';
    texte.textContent = bouton.getAttribute('data-texte') || '';
    popup.classList.add('visible');
    var r = bouton.getBoundingClientRect();
    var maxGauche = window.scrollX + document.documentElement.clientWidth - popup.offsetWidth - 10;
    popup.style.left = Math.max(10, Math.min(r.left + window.scrollX, maxGauche)) + 'px';
    popup.style.top = (r.bottom + window.scrollY + 6) + 'px';
  }
  function fermer() { popup.classList.remove('visible'); }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.info');
    if (b) { e.preventDefault(); e.stopPropagation(); ouvrir(b); return; }
    if (e.target.closest && e.target.closest('.popup') && !e.target.closest('.popup-fermer')) return;
    fermer();
  }, true);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') fermer();
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'PageUp' || e.key === 'PageDown') fermer();
  });
  window.addEventListener('resize', fermer);
})();
