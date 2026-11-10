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
  { titre: "Recettes salées & sucrées", sousTitre: "60 recettes de Bretagne, avec leurs boissons", page: "recettes-bretagne.html", couverture: "images/couvertures/recettes-bretagne-2.webp", couleur: "#1C5A12" },
  { titre: "La Côte de Granit rose", sousTitre: "Ploumanac'h, Perros-Guirec, Trégastel et les Sept-Îles", page: "granit-rose.html", couverture: "images/couvertures/granit-rose.webp", couleur: "#1C5A12" },
  { titre: "Le Finistère, le « bout du monde »", sousTitre: "La pointe du Raz, Crozon, Ouessant et Sein", page: "finistere.html", couverture: "images/couvertures/finistere.webp", couleur: "#1C5A12" },
  { titre: "Le golfe du Morbihan et Belle-Île", sousTitre: "La « petite mer », la Côte sauvage et Claude Monet", page: "golfe-morbihan-belle-ile.html", couverture: "images/couvertures/golfe-morbihan-belle-ile.webp", couleur: "#1C5A12" },
  { titre: "Brocéliande et les monts d'Arrée", sousTitre: "Merlin, Viviane, l'Ankou et les légendes bretonnes", page: "broceliande-arree.html", couverture: "images/couvertures/broceliande-arree.webp", couleur: "#1C5A12" },
  { titre: "Les mégalithes de Bretagne", sousTitre: "Carnac, Barnenez, Gavrinis et Locmariaquer", page: "megalithes.html", couverture: "images/couvertures/megalithes.webp", couleur: "#1C5A12" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
