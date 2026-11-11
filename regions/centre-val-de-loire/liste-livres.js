/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Centre-Val de Loire
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

AME.ajouterLivres("centre-val-de-loire", [
  { titre: "Le Centre-Val de Loire à la loupe", sousTitre: "La région en chiffres, en cartes et en images", page: "centre-val-de-loire-info.html", couverture: "images/couvertures/centre-val-de-loire-info.webp", couleur: "#1E3F7A" },
  { titre: "Recettes salées & sucrées", sousTitre: "60 recettes du Centre-Val de Loire, avec leurs boissons", page: "recettes-centre-val-de-loire.html", couverture: "images/couvertures/recettes-centre-val-de-loire.webp", couleur: "#1E3F7A" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
