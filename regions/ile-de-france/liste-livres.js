/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Île-de-France
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

AME.ajouterLivres("ile-de-france", [
  { titre: "L'Île-de-France à la loupe", sousTitre: "La région capitale en chiffres, en cartes et en histoire", page: "ile-de-france-info.html", couverture: "images/couvertures/ile-de-france-info.webp", couleur: "#6E3B23" },
  { titre: "Recettes salées & sucrées", sousTitre: "Bistrots, brasseries et grande pâtisserie parisienne", page: "recettes-ile-de-france.html", couverture: "images/couvertures/recettes-ile-de-france.webp", couleur: "#6E3B23" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
