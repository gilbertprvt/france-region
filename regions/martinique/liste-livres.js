/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Martinique
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

AME.ajouterLivres("martinique", [
  { titre: "La Martinique à la loupe", sousTitre: "L'île aux fleurs en chiffres, en cartes et en histoire", page: "martinique-info.html", couverture: "images/couvertures/martinique-info.webp?v=20261119i", couleur: "#F8760C" },
  { titre: "Recettes salées & sucrées", sousTitre: "Saveurs créoles de la Martinique", page: "recettes-martinique.html", couverture: "images/couvertures/recettes-martinique.webp?v=20261119i", couleur: "#F9770D" },
  { titre: "Les premiers habitants", sousTitre: "Des Arawaks aux Kalinagos", page: "premiers-habitants.html", couverture: "images/couvertures/premiers-habitants.webp?v=20261119i", couleur: "#6E3B23" },
  { titre: "D'Esnambuc et la colonisation (1635)", sousTitre: "Saint-Pierre, première ville de l'île", page: "colonisation-1635.html", couverture: "images/couvertures/colonisation-1635.webp?v=20261119i", couleur: "#6E3B23" },
  { titre: "Le sucre, le rhum et l'esclavage", sousTitre: "Les habitations et le Code noir", page: "sucre-esclavage.html", couverture: "images/couvertures/sucre-esclavage.webp?v=20261119i", couleur: "#6E3B23" },
  { titre: "Le 22 mai 1848", sousTitre: "La révolte qui arracha la liberté", page: "abolition-1848.html", couverture: "images/couvertures/abolition-1848.webp?v=20261119i", couleur: "#6E3B23" },
  { titre: "L'impératrice Joséphine", sousTitre: "De La Pagerie aux Tuileries", page: "josephine.html", couverture: "images/couvertures/josephine.webp?v=20261119i", couleur: "#6E3B23" },
  { titre: "La catastrophe de 1902", sousTitre: "La montagne Pelée et la destruction de Saint-Pierre", page: "pelee-1902.html", couverture: "images/couvertures/pelee-1902.webp?v=20261119i", couleur: "#6E3B23" },
  { titre: "Le XXᵉ siècle en Martinique", sousTitre: "D'« an tan Robè » à la départementalisation", page: "xxe-siecle.html", couverture: "images/couvertures/xxe-siecle.webp?v=20261119i", couleur: "#6E3B23" },
  { titre: "Aimé Césaire et les écrivains martiniquais", sousTitre: "Césaire, Fanon, Glissant, Chamoiseau", page: "cesaire-ecrivains.html", couverture: "images/couvertures/cesaire-ecrivains.webp?v=20261119i", couleur: "#6E3B23" },
  { titre: "Volcans, forêts et Rocher du Diamant", sousTitre: "La nature martiniquaise, patrimoine mondial", page: "nature-patrimoine.html", couverture: "images/couvertures/nature-patrimoine.webp?v=20261119i", couleur: "#6E3B23" },
  { titre: "Bèlè, carnaval et yoles rondes", sousTitre: "Musique, fêtes et traditions", page: "bele-carnaval.html", couverture: "images/couvertures/bele-carnaval.webp?v=20261119i", couleur: "#6E3B23" },
]);
