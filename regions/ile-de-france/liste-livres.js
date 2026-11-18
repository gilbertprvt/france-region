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
  { titre: "L'Île-de-France à la loupe", sousTitre: "La région capitale en chiffres, en cartes et en histoire", page: "ile-de-france-info.html", couverture: "images/couvertures/ile-de-france-info.webp?v=20261118", couleur: "#6E3B23" },
  { titre: "Recettes salées & sucrées", sousTitre: "Bistrots, brasseries et grande pâtisserie parisienne", page: "recettes-ile-de-france.html", couverture: "images/couvertures/recettes-ile-de-france.webp?v=20261118", couleur: "#6E3B23" },
  { titre: "La bataille de Lutèce (52 av. J.-C.)", sousTitre: "Labienus contre Camulogène", page: "bataille-lutece.html", couverture: "images/couvertures/bataille-lutece.webp", couleur: "#6E3B23" },
  { titre: "Clovis, Paris capitale (508)", sousTitre: "Le premier roi des Francs choisit Paris", page: "clovis-paris.html", couverture: "images/couvertures/clovis-paris.webp", couleur: "#6E3B23" },
  { titre: "Saint-Denis, naissance du gothique (1144)", sousTitre: "L'abbé Suger et la lumière des vitraux", page: "saint-denis-gothique.html", couverture: "images/couvertures/saint-denis-gothique.webp", couleur: "#6E3B23" },
  { titre: "Notre-Dame de Paris (1163)", sousTitre: "Le chantier d'une cathédrale", page: "notre-dame.html", couverture: "images/couvertures/notre-dame.webp", couleur: "#6E3B23" },
  { titre: "La Sorbonne (1257)", sousTitre: "Robert de Sorbon et l'université de Paris", page: "sorbonne.html", couverture: "images/couvertures/sorbonne.webp", couleur: "#6E3B23" },
  { titre: "Le massacre de la Saint-Barthélemy (1572)", sousTitre: "Paris dans les guerres de Religion", page: "saint-barthelemy.html", couverture: "images/couvertures/saint-barthelemy.webp", couleur: "#6E3B23" },
  { titre: "Louis XIV à Versailles (1682)", sousTitre: "La cour s'installe au château", page: "versailles.html", couverture: "images/couvertures/versailles.webp", couleur: "#6E3B23" },
  { titre: "Le premier vol en montgolfière (1783)", sousTitre: "Pilâtre de Rozier et le marquis d'Arlandes", page: "montgolfiere.html", couverture: "images/couvertures/montgolfiere.webp", couleur: "#6E3B23" },
  { titre: "La prise de la Bastille (1789)", sousTitre: "Le 14 juillet et la Révolution", page: "bastille.html", couverture: "images/couvertures/bastille.webp", couleur: "#6E3B23" },
  { titre: "Le Louvre devient un musée (1793)", sousTitre: "Du palais des rois au musée de tous", page: "louvre-musee.html", couverture: "images/couvertures/louvre-musee.webp", couleur: "#6E3B23" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
