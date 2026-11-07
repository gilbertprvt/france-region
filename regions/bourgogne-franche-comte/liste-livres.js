/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Bourgogne-Franche-Comté
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

AME.ajouterLivres("bourgogne-franche-comte", [
  { titre: "L'usine SACM de Belfort",
    sousTitre: "de la locomotive à vapeur au TGV",
    page: "sacm-belfort.html",
    couverture: "images/couvertures/sacm-belfort.webp",
    couleur: "#E8D7B2" },

  { titre: "La race montbéliarde",
    sousTitre: "la vache du comté",
    page: "race-montbeliarde.html",
    couverture: "images/couvertures/race-montbeliarde.webp",
    couleur: "#E8D7B2" },

  { titre: "L'horlogerie, LIP et Morteau",
    sousTitre: "Besançon, capitale de la montre",
    page: "horlogerie-lip.html",
    couverture: "images/couvertures/horlogerie-lip.webp",
    couleur: "#E8D7B2" },

  { titre: "Les Hospices de Beaune",
    sousTitre: "l'Hôtel-Dieu et la vente des vins",
    page: "hospices-beaune.html",
    couverture: "images/couvertures/hospices-beaune.webp",
    couleur: "#E8D7B2" },

  { titre: "L'usine Peugeot de Sochaux",
    sousTitre: "un siècle d'automobiles",
    page: "peugeot-sochaux.html",
    couverture: "images/couvertures/peugeot-sochaux.webp",
    couleur: "#E8D7B2" },

  { titre: "La Confrérie des Chevaliers du Tastevin",
    sousTitre: "les chevaliers du vin de Bourgogne",
    page: "confrerie-tastevin.html",
    couverture: "images/couvertures/confrerie-tastevin.webp",
    couleur: "#E8D7B2" },

  { titre: "La faïence de Nevers",
    sousTitre: "quatre siècles d'art au bord de la Loire",
    page: "faience-nevers.html",
    couverture: "images/couvertures/faience-nevers.webp",
    couleur: "#E8D7B2" },

  { titre: "Le massif du Jura",
    sousTitre: "forêts, lacs, comté et ski de fond",
    page: "massif-jura.html",
    couverture: "images/couvertures/massif-jura.webp",
    couleur: "#E8D7B2" },

  { titre: "La Compagnie des mines de Blanzy",
    sousTitre: "le pays noir de Montceau-les-Mines",
    page: "mines-blanzy.html",
    couverture: "images/couvertures/mines-blanzy.webp",
    couleur: "#E8D7B2" },

  { titre: "Saint-Claude, capitale de la pipe",
    sousTitre: "la pipe en bruyère et le diamant",
    page: "pipe-saint-claude.html",
    couverture: "images/couvertures/pipe-saint-claude.webp",
    couleur: "#E8D7B2" },

  { titre: "Le siège de Belfort",
    sousTitre: "103 jours de résistance, 1870-1871",
    page: "siege-belfort.html",
    couverture: "images/couvertures/siege-belfort.webp",
    couleur: "#E8D7B2" },

  { titre: "Le traité de Nimègue",
    sousTitre: "la Franche-Comté devient française (1678)",
    page: "traite-nimegue.html",
    couverture: "images/couvertures/traite-nimegue.webp",
    couleur: "#E8D7B2" },

  { titre: "Philippe le Hardi",
    sousTitre: "le premier des grands ducs (1342-1404)",
    page: "philippe-le-hardi.html",
    couverture: "images/couvertures/philippe-le-hardi.webp",
    couleur: "#E8D7B2" },

  { titre: "Le traité de Verdun",
    sousTitre: "843 : le partage de l'empire de Charlemagne",
    page: "traite-verdun.html",
    couverture: "images/couvertures/traite-verdun.webp",
    couleur: "#E8D7B2" },

  { titre: "1870-1871 : Belfort, la forteresse qui résista",
    sousTitre: "la guerre franco-prussienne dans la région",
    page: "guerre-1870-belfort.html",
    couverture: "images/couvertures/guerre-1870-belfort.webp",
    couleur: "#E8D7B2" },

  { titre: "Les ducs de Bourgogne",
    sousTitre: "de la gloire à la chute (1363-1493)",
    page: "ducs-de-bourgogne.html",
    couverture: "images/couvertures/ducs-de-bourgogne.webp",
    couleur: "#E8D7B2" },

  { titre: "Recettes sucrées et salées",
    sousTitre: "de Bourgogne-Franche-Comté : 60 recettes",
    page: "recettes-bfc.html",
    couverture: "images/couvertures/recettes-bfc.webp",
    couleur: "#E8D7B2" },

  { titre: "La Bourgogne-Franche-Comté à la loupe",
    sousTitre: "la région en chiffres, cartes et repères",
    page: "bourgogne-franche-comte-info.html",
    couverture: "images/couvertures/bourgogne-franche-comte-info.webp",
    couleur: "#E8D7B2" },

  /* Modèle à recopier pour un nouveau livre (mettre une virgule après le livre précédent) :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
