/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — La Réunion
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

AME.ajouterLivres("la-reunion", [
  { titre: "La Réunion à la loupe", sousTitre: "L'île intense en chiffres, en cartes et en histoire", page: "reunion-info.html", couverture: "images/couvertures/reunion-info.webp?v=20261119g", couleur: "#F1B775" },
  { titre: "Recettes salées & sucrées", sousTitre: "Saveurs créoles de La Réunion", page: "recettes-reunion.html", couverture: "images/couvertures/recettes-reunion.webp?v=20261119g", couleur: "#F3BC7C" },
  { titre: "Les premiers habitants (1663-1715)", sousTitre: "De l'île déserte à l'île Bourbon", page: "premiers-habitants.html", couverture: "images/couvertures/premiers-habitants.webp?v=20261119g", couleur: "#F6BC78" },
  { titre: "Café, esclavage et marronnage", sousTitre: "L'île Bourbon au XVIIIᵉ siècle", page: "cafe-esclavage.html", couverture: "images/couvertures/cafe-esclavage.webp?v=20261119g", couleur: "#F6BA76" },
  { titre: "Le 20 décembre 1848", sousTitre: "L'abolition de l'esclavage et la fête de la liberté", page: "abolition-1848.html", couverture: "images/couvertures/abolition-1848.webp?v=20261119g", couleur: "#F8BC76" },
  { titre: "Le temps du sucre et des engagés", sousTitre: "Tamouls, Malgaches, Africains et Chinois", page: "sucre-engages.html", couverture: "images/couvertures/sucre-engages.webp?v=20261119g", couleur: "#F7BC78" },
  { titre: "La vanille Bourbon", sousTitre: "Edmond Albius et les trésors de l'île", page: "vanille.html", couverture: "images/couvertures/vanille.webp?v=20261119g", couleur: "#F8BC79" },
  { titre: "Le XXᵉ siècle à La Réunion", sousTitre: "De Roland Garros à la départementalisation", page: "xxe-siecle.html", couverture: "images/couvertures/xxe-siecle.webp?v=20261119g", couleur: "#F6BA79" },
  { titre: "Le Piton de la Fournaise", sousTitre: "L'un des volcans les plus actifs du monde", page: "piton-fournaise.html", couverture: "images/couvertures/piton-fournaise.webp?v=20261119g", couleur: "#F9C280" },
  { titre: "Cirques, pitons et remparts", sousTitre: "Mafate, Cilaos, Salazie et le Parc national", page: "cirques-parc.html", couverture: "images/couvertures/cirques-parc.webp?v=20261119g", couleur: "#F7B978" },
  { titre: "Le lagon et l'océan Indien", sousTitre: "Récif corallien, baleines et tortues", page: "lagon-ocean.html", couverture: "images/couvertures/lagon-ocean.webp?v=20261119g", couleur: "#F9BF7B" },
  { titre: "Maloya et peuples réunionnais", sousTitre: "Musiques, religions et vivre-ensemble", page: "maloya-peuples.html", couverture: "images/couvertures/maloya-peuples.webp?v=20261119g", couleur: "#F8BA77" },
]);
