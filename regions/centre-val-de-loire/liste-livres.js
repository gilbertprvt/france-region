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
  { titre: "Les cathédrales de Chartres et de Bourges", sousTitre: "Deux chefs-d'œuvre gothiques inscrits à l'UNESCO", page: "cathedrales.html", couverture: "images/couvertures/cathedrales.webp", couleur: "#1E3F7A" },
  { titre: "Léonard de Vinci à Amboise", sousTitre: "Les dernières années du génie au Clos Lucé", page: "leonard-vinci.html", couverture: "images/couvertures/leonard-vinci.webp", couleur: "#1E3F7A" },
  { titre: "La Beauce, grenier à blé de la France", sousTitre: "Plaines, moissons et agriculture", page: "beauce.html", couverture: "images/couvertures/beauce.webp", couleur: "#1E3F7A" },
  { titre: "Les canaux de Briare et d'Orléans", sousTitre: "Écluses, pont-canal et mariniers", page: "canaux.html", couverture: "images/couvertures/canaux.webp", couleur: "#1E3F7A" },
  { titre: "La marine de Loire", sousTitre: "Gabares, mariniers et commerce sur le fleuve", page: "marine-loire.html", couverture: "images/couvertures/marine-loire.webp", couleur: "#1E3F7A" },
  { titre: "Les grandes figures littéraires", sousTitre: "Ronsard, Rabelais, Balzac, George Sand, Péguy…", page: "figures-litteraires.html", couverture: "images/couvertures/figures-litteraires.webp", couleur: "#1E3F7A" },
  { titre: "La Seconde Guerre mondiale", sousTitre: "Ligne de démarcation, Résistance et Libération", page: "seconde-guerre.html", couverture: "images/couvertures/seconde-guerre.webp", couleur: "#1E3F7A" },
  { titre: "La porcelaine et la faïence", sousTitre: "Gien, Vierzon, Mehun-sur-Yèvre et Briare", page: "porcelaine.html", couverture: "images/couvertures/porcelaine.webp", couleur: "#1E3F7A" },
  { titre: "La soierie de Tours", sousTitre: "De Louis XI à la maison Le Manach", page: "soierie-tours.html", couverture: "images/couvertures/soierie-tours.webp", couleur: "#1E3F7A" },
  { titre: "La Sologne et la Brenne", sousTitre: "Étangs, forêts, chasse et oiseaux", page: "sologne-brenne.html", couverture: "images/couvertures/sologne-brenne.webp", couleur: "#1E3F7A" },
  { titre: "Les traditions populaires du Berry", sousTitre: "Vielle, bourrée, légendes et George Sand", page: "traditions-berry.html", couverture: "images/couvertures/traditions-berry.webp", couleur: "#1E3F7A" },
  { titre: "Les vignobles du Centre-Val de Loire", sousTitre: "Sancerre, Vouvray, Chinon, Bourgueil…", page: "vignobles.html", couverture: "images/couvertures/vignobles.webp", couleur: "#1E3F7A" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
