/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Auvergne-Rhône-Alpes
   Un livre = un bloc { … }, séparés par des virgules, dans l'ordre
   où ils seront rangés sur les étagères.
     titre       : titre écrit sur le dos et sur l'étiquette
     sousTitre   : (facultatif)
     page        : le fichier du livre, rangé dans ce dossier
     couverture  : l'image, rangée dans images/couvertures/
     theme       : (facultatif) le rayon : Histoire, Patrimoine,
                   Légendes, Traditions, Gastronomie… Chaque thème
                   a ses propres étagères, avec une plaque.
     couleur     : (facultatif) couleur du dos, ex. "#7A2E2E"
   ══════════════════════════════════════════════════════════════ */

AME.ajouterLivres("auvergne-rhone-alpes", [
  { titre: "Les canuts de Lyon",
    sousTitre: "la soie et les révoltes ouvrières",
    page: "canuts-lyon.html",
    couverture: "images/couvertures/canuts-lyon.webp",
    couleur: "#1D4A1F" },

  { titre: "Les volcans d'Auvergne",
    sousTitre: "chaîne des Puys, Sancy, Cantal",
    page: "volcans-auvergne.html",
    couverture: "images/couvertures/volcans-auvergne.webp",
    couleur: "#1D4A1F" }

  /* Modèle à recopier pour un nouveau livre (mettre une virgule après le livre précédent) :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp" },
  */
]);
