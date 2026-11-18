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
  { titre: "La bataille de Lutèce (52 av. J.-C.)", sousTitre: "Labienus contre Camulogène", page: "bataille-lutece.html", couverture: "images/couvertures/bataille-lutece.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Clovis, Paris capitale (508)", sousTitre: "Le premier roi des Francs choisit Paris", page: "clovis-paris.html", couverture: "images/couvertures/clovis-paris.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Saint-Denis, naissance du gothique (1144)", sousTitre: "L'abbé Suger et la lumière des vitraux", page: "saint-denis-gothique.html", couverture: "images/couvertures/saint-denis-gothique.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Notre-Dame de Paris (1163)", sousTitre: "Le chantier d'une cathédrale", page: "notre-dame.html", couverture: "images/couvertures/notre-dame.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "La Sorbonne (1257)", sousTitre: "Robert de Sorbon et l'université de Paris", page: "sorbonne.html", couverture: "images/couvertures/sorbonne.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Le massacre de la Saint-Barthélemy (1572)", sousTitre: "Paris dans les guerres de Religion", page: "saint-barthelemy.html", couverture: "images/couvertures/saint-barthelemy.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Louis XIV à Versailles (1682)", sousTitre: "La cour s'installe au château", page: "versailles.html", couverture: "images/couvertures/versailles.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Le premier vol en montgolfière (1783)", sousTitre: "Pilâtre de Rozier et le marquis d'Arlandes", page: "montgolfiere.html", couverture: "images/couvertures/montgolfiere.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "La prise de la Bastille (1789)", sousTitre: "Le 14 juillet et la Révolution", page: "bastille.html", couverture: "images/couvertures/bastille.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Le Louvre devient un musée (1793)", sousTitre: "Du palais des rois au musée de tous", page: "louvre-musee.html", couverture: "images/couvertures/louvre-musee.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Le mètre étalon (1799)", sousTitre: "La naissance du système métrique", page: "metre-etalon.html", couverture: "images/couvertures/metre-etalon.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Le premier train de Paris (1837)", sousTitre: "La ligne Paris – Saint-Germain-en-Laye", page: "premier-train.html", couverture: "images/couvertures/premier-train.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "La naissance de la photographie (1839)", sousTitre: "Daguerre, Niépce et Arago", page: "photographie.html", couverture: "images/couvertures/photographie.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Les grands travaux d'Haussmann (1853-1870)", sousTitre: "Le nouveau visage de Paris", page: "haussmann.html", couverture: "images/couvertures/haussmann.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "La Commune de Paris (1871)", sousTitre: "Soixante-douze jours de révolution", page: "commune-paris.html", couverture: "images/couvertures/commune-paris.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Pasteur et la rage (1885)", sousTitre: "Le premier vaccin donné à un homme", page: "pasteur-rage.html", couverture: "images/couvertures/pasteur-rage.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "La tour Eiffel (1889)", sousTitre: "L'Exposition universelle et la « dame de fer »", page: "tour-eiffel.html", couverture: "images/couvertures/tour-eiffel.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "La première séance de cinéma (1895)", sousTitre: "Les frères Lumière au Grand Café", page: "cinema-lumiere.html", couverture: "images/couvertures/cinema-lumiere.webp", couleur: "#6E3B23" },
  { titre: "Pierre et Marie Curie (1898)", sousTitre: "La découverte du radium", page: "curie-radium.html", couverture: "images/couvertures/curie-radium.webp", couleur: "#6E3B23" },
  { titre: "Louis Renault (1898)", sousTitre: "La première voiture et Boulogne-Billancourt", page: "louis-renault.html", couverture: "images/couvertures/louis-renault.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Paris 1900 : le métro et les Jeux", sousTitre: "La première ligne et les Jeux olympiques", page: "paris-1900.html", couverture: "images/couvertures/paris-1900.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Le traité de Versailles (1919)", sousTitre: "La paix signée dans la galerie des Glaces", page: "traite-versailles.html", couverture: "images/couvertures/traite-versailles.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "La libération de Paris (1944)", sousTitre: "Les journées d'août 1944", page: "liberation-paris.html", couverture: "images/couvertures/liberation-paris.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "La Défense et le CNIT (1958)", sousTitre: "Naissance d'un quartier d'affaires", page: "la-defense.html", couverture: "images/couvertures/la-defense.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Mai 68", sousTitre: "Étudiants, ouvriers et grèves", page: "mai-68.html", couverture: "images/couvertures/mai-68.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Roissy-Charles-de-Gaulle (1974)", sousTitre: "Le grand aéroport de Paris", page: "roissy.html", couverture: "images/couvertures/roissy.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Le Centre Pompidou (1977)", sousTitre: "Un musée qui ne ressemble à aucun autre", page: "centre-pompidou.html", couverture: "images/couvertures/centre-pompidou.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Disneyland Paris (1992)", sousTitre: "D'Euro Disney à Marne-la-Vallée", page: "disneyland-paris.html", couverture: "images/couvertures/disneyland-paris.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "L'Accord de Paris (2015)", sousTitre: "La COP21 au Bourget", page: "accord-paris.html", couverture: "images/couvertures/accord-paris.webp?v=20261118c", couleur: "#6E3B23" },
  { titre: "Paris 2024", sousTitre: "Les Jeux olympiques et Notre-Dame retrouvée", page: "paris-2024.html", couverture: "images/couvertures/paris-2024.webp?v=20261118c", couleur: "#6E3B23" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
