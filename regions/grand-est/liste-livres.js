/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Grand Est
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

AME.ajouterLivres("grand-est", [
  { titre: "Le Grand Est à la loupe", sousTitre: "La région en chiffres, en cartes et en images", page: "grand-est-info.html", couverture: "images/couvertures/grand-est-info.webp", couleur: "#C27A3A" },
  { titre: "Recettes salées & sucrées", sousTitre: "60 recettes du Grand Est, avec leurs boissons", page: "recettes-grand-est.html", couverture: "images/couvertures/recettes-grand-est.webp", couleur: "#C27A3A" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
