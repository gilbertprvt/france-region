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
  { titre: "Les Gaulois et les Romains", sousTitre: "Namnètes, Andécaves, Cénomans et la muraille du Mans", page: "gaulois-romains.html", couverture: "images/couvertures/gaulois-romains.webp", couleur: "#B5520C" },
  { titre: "Les Plantagenêts et l'empire angevin", sousTitre: "Henri II, Aliénor et Richard Cœur de Lion", page: "plantagenets.html", couverture: "images/couvertures/plantagenets.webp", couleur: "#B5520C" },
  { titre: "L'abbaye de Fontevraud", sousTitre: "Et les grandes abbayes : Solesmes, l'Épau, Maillezais…", page: "abbayes.html", couverture: "images/couvertures/abbayes.webp", couleur: "#B5520C" },
  { titre: "Le château d'Angers", sousTitre: "Et la tapisserie de l'Apocalypse", page: "chateau-angers.html", couverture: "images/couvertures/chateau-angers.webp", couleur: "#B5520C" },
  { titre: "Les ducs de Bretagne et le château de Nantes", sousTitre: "François II, Anne de Bretagne et l'union de 1532", page: "ducs-bretagne-nantes.html", couverture: "images/couvertures/ducs-bretagne-nantes.webp", couleur: "#B5520C" },
  { titre: "Les châteaux de la Loire", sousTitre: "La Renaissance angevine et le roi René", page: "chateaux-loire.html", couverture: "images/couvertures/chateaux-loire.webp", couleur: "#B5520C" },
  { titre: "L'édit de Nantes", sousTitre: "1598 : Henri IV et la paix des religions", page: "edit-nantes.html", couverture: "images/couvertures/edit-nantes.webp", couleur: "#B5520C" },
  { titre: "Les guerres de Vendée", sousTitre: "1793-1796 : insurrection, Virée de Galerne et répression", page: "guerres-vendee.html", couverture: "images/couvertures/guerres-vendee.webp", couleur: "#B5520C" },
  { titre: "La Chouannerie dans le Maine et l'Anjou", sousTitre: "Jean Chouan et la guérilla du bocage", page: "chouannerie-maine.html", couverture: "images/couvertures/chouannerie-maine.webp", couleur: "#B5520C" },
  { titre: "Nantes, port colonial et de la traite négrière", sousTitre: "Le commerce triangulaire et le devoir de mémoire", page: "nantes-port-traite.html", couverture: "images/couvertures/nantes-port-traite.webp", couleur: "#B5520C" },
  { titre: "La Loire, fleuve de commerce", sousTitre: "Gabares, mariniers, crues et levées", page: "loire-fleuve.html", couverture: "images/couvertures/loire-fleuve.webp", couleur: "#B5520C" },
  { titre: "Les marais salants de Guérande", sousTitre: "Le sel, la fleur de sel et les paludiers", page: "marais-salants.html", couverture: "images/couvertures/marais-salants.webp", couleur: "#B5520C" },
  { titre: "Le vignoble nantais et les vins d'Anjou-Saumur", sousTitre: "Muscadet, Layon, Saumur-Champigny…", page: "vignoble.html", couverture: "images/couvertures/vignoble.webp", couleur: "#B5520C" },
  { titre: "Le patrimoine religieux et les pèlerinages", sousTitre: "Cathédrales, Pontmain, Béhuard, Compostelle", page: "patrimoine-religieux.html", couverture: "images/couvertures/patrimoine-religieux.webp", couleur: "#B5520C" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
