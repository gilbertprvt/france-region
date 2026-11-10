/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Bretagne
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

AME.ajouterLivres("bretagne", [
  { titre: "La Bretagne à la loupe", sousTitre: "La région en chiffres, en cartes et en images", page: "bretagne-info.html", couverture: "images/couvertures/bretagne-info.webp", couleur: "#1C5A12" },
  { titre: "Recettes salées & sucrées", sousTitre: "60 recettes de Bretagne, avec leurs boissons", page: "recettes-bretagne.html", couverture: "images/couvertures/recettes-bretagne.webp", couleur: "#1C5A12" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
