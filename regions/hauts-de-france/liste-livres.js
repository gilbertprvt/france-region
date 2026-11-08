/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Hauts-de-France
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

AME.ajouterLivres("hauts-de-france", [
  { titre: "Les Hauts-de-France à la loupe", sousTitre: "La région en chiffres, en cartes et en images", page: "hauts-de-france-info.html", couverture: "images/couvertures/hauts-de-france-info.webp", couleur: "#2A5C93" },
  { titre: "Recettes salées & sucrées", sousTitre: "60 recettes des Hauts-de-France, avec leurs boissons", page: "recettes-hauts-de-france.html", couverture: "images/couvertures/recettes-hauts-de-france.webp", couleur: "#2A5C93" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
