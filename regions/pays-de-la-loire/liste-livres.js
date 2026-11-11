/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Pays de la Loire
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

AME.ajouterLivres("pays-de-la-loire", [
  { titre: "Les Pays de la Loire à la loupe", sousTitre: "La région en chiffres, en cartes et en images", page: "pays-de-la-loire-info.html", couverture: "images/couvertures/pays-de-la-loire-info.webp", couleur: "#B5520C" },
  { titre: "Recettes salées & sucrées", sousTitre: "60 recettes des Pays de la Loire, avec leurs boissons", page: "recettes-pays-de-la-loire.html", couverture: "images/couvertures/recettes-pays-de-la-loire.webp", couleur: "#B5520C" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
