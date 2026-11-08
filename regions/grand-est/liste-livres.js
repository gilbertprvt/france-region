/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Grand Est
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

AME.ajouterLivres("grand-est", [
  { titre: "Le Grand Est à la loupe", sousTitre: "La région en chiffres, en cartes et en images", page: "grand-est-info.html", couverture: "images/couvertures/grand-est-info.webp", couleur: "#C27A3A" },
  { titre: "Recettes salées & sucrées", sousTitre: "60 recettes du Grand Est, avec leurs boissons", page: "recettes-grand-est.html", couverture: "images/couvertures/recettes-grand-est.webp", couleur: "#C27A3A" },
  { titre: "Strasbourg, capitale européenne et cité historique", sousTitre: "De la cathédrale au Parlement européen", page: "strasbourg.html", couverture: "images/couvertures/strasbourg.webp", couleur: "#C27A3A" },
  { titre: "Reims, cité des sacres et du champagne", sousTitre: "Clovis, la cathédrale, les caves et la paix", page: "reims-sacres-champagne.html", couverture: "images/couvertures/reims-sacres-champagne.webp", couleur: "#C27A3A" },
  { titre: "Nancy, capitale des ducs de Lorraine", sousTitre: "Place Stanislas et École de Nancy", page: "nancy-ducs-lorraine.html", couverture: "images/couvertures/nancy-ducs-lorraine.webp", couleur: "#C27A3A" },
  { titre: "La Lorraine, des ducs à Stanislas", sousTitre: "Sept siècles d'un duché indépendant", page: "lorraine-ducs-stanislas.html", couverture: "images/couvertures/lorraine-ducs-stanislas.webp", couleur: "#C27A3A" },
  { titre: "L'Alsace, entre France et Allemagne", sousTitre: "Cinq changements de pays, une identité", page: "alsace-france-allemagne.html", couverture: "images/couvertures/alsace-france-allemagne.webp", couleur: "#C27A3A" },
  { titre: "Les mines de fer et la sidérurgie lorraine", sousTitre: "La minette, les hauts fourneaux et les hommes", page: "mines-fer-siderurgie.html", couverture: "images/couvertures/mines-fer-siderurgie.webp", couleur: "#C27A3A" },
  { titre: "La Première Guerre mondiale", sousTitre: "Marne, Champagne, Argonne, Verdun, Vosges", page: "premiere-guerre-mondiale.html", couverture: "images/couvertures/premiere-guerre-mondiale.webp", couleur: "#C27A3A" },
  { titre: "La Seconde Guerre mondiale", sousTitre: "Annexion, Malgré-nous, Struthof et libération", page: "seconde-guerre-grand-est.html", couverture: "images/couvertures/seconde-guerre-grand-est.webp", couleur: "#C27A3A" },
  { titre: "Les vins de Champagne et d'Alsace", sousTitre: "Cépages, bulles, grands crus et route des vins", page: "vins-champagne-alsace.html", couverture: "images/couvertures/vins-champagne-alsace.webp", couleur: "#C27A3A" },
  { titre: "L'agriculture du Grand Est", sousTitre: "Céréales, betteraves, lait, mirabelles", page: "agriculture-grand-est.html", couverture: "images/couvertures/agriculture-grand-est.webp", couleur: "#C27A3A" },
  { titre: "Les cristalleries, verreries et faïenceries", sousTitre: "Baccarat, Saint-Louis, Daum, Lunéville, Sarreguemines", page: "cristalleries-faienceries.html", couverture: "images/couvertures/cristalleries-faienceries.webp", couleur: "#C27A3A" },
  { titre: "Le textile d'Alsace, des Vosges et de Champagne", sousTitre: "Mulhouse, Épinal, Troyes, Sedan", page: "textile-grand-est.html", couverture: "images/couvertures/textile-grand-est.webp", couleur: "#C27A3A" },
  { titre: "Les mines de charbon et de potasse", sousTitre: "Moselle houillère et Alsace potassique", page: "charbon-potasse.html", couverture: "images/couvertures/charbon-potasse.webp", couleur: "#C27A3A" },
  { titre: "Les grands noms nés dans le Grand Est", sousTitre: "De Jeanne d'Arc à Tomi Ungerer", page: "grands-noms-grand-est.html", couverture: "images/couvertures/grands-noms-grand-est.webp", couleur: "#C27A3A" },
  { titre: "Les grandes maisons de champagne", sousTitre: "Ruinart, Moët, Clicquot, Pommery, Krug…", page: "maisons-champagne.html", couverture: "images/couvertures/maisons-champagne.webp", couleur: "#C27A3A" },
  { titre: "La route des vins d'Alsace", sousTitre: "De Marlenheim à Thann", page: "route-des-vins-alsace.html", couverture: "images/couvertures/route-des-vins-alsace.webp", couleur: "#C27A3A" },
  { titre: "L'Alsace industrielle", sousTitre: "Textile, mécanique, potasse, Bugatti, Peugeot", page: "alsace-industrielle.html", couverture: "images/couvertures/alsace-industrielle.webp", couleur: "#C27A3A" },
  { titre: "Histoire de la famille Schlumpf", sousTitre: "Des filatures au Musée national de l'Automobile", page: "famille-schlumpf.html", couverture: "images/couvertures/famille-schlumpf.webp", couleur: "#C27A3A" },
  { titre: "Les Vosges, montagnes, forêts et industries", sousTitre: "Ballons, lacs, bois, papier, thermes", page: "vosges-montagnes-industries.html", couverture: "images/couvertures/vosges-montagnes-industries.webp", couleur: "#C27A3A" },
  { titre: "La construction européenne et le rôle de Strasbourg", sousTitre: "Conseil de l'Europe, Parlement européen, réconciliation", page: "construction-europeenne-strasbourg.html", couverture: "images/couvertures/construction-europeenne-strasbourg.webp", couleur: "#C27A3A" },
  { titre: "L'École de Nancy et l'Art nouveau", sousTitre: "Gallé, Daum, Majorelle, Gruber", page: "ecole-de-nancy.html", couverture: "images/couvertures/ecole-de-nancy.webp", couleur: "#C27A3A" },
  { titre: "La guerre franco-prussienne et la bataille de Sedan", sousTitre: "1870-1871", page: "guerre-1870-sedan.html", couverture: "images/couvertures/guerre-1870-sedan.webp", couleur: "#C27A3A" },
  { titre: "L'annexion de l'Alsace-Moselle à l'Empire allemand", sousTitre: "Le Reichsland, 1871-1918", page: "annexion-alsace-moselle.html", couverture: "images/couvertures/annexion-alsace-moselle.webp", couleur: "#C27A3A" },
  { titre: "La bataille de Verdun", sousTitre: "21 février-18 décembre 1916", page: "bataille-verdun.html", couverture: "images/couvertures/bataille-verdun.webp", couleur: "#C27A3A" },
  { titre: "Les peuples gaulois du Grand Est", sousTitre: "Rèmes, Médiomatriques, Leuques, Triboques", page: "peuples-gaulois.html", couverture: "images/couvertures/peuples-gaulois.webp", couleur: "#C27A3A" },
  { titre: "Clovis, Reims et le baptême des Francs", sousTitre: "Vers 496-508", page: "clovis-bapteme-reims.html", couverture: "images/couvertures/clovis-bapteme-reims.webp", couleur: "#C27A3A" },
  { titre: "La naissance de la Lorraine médiévale", sousTitre: "De la Lotharingie à Ferry III", page: "lorraine-medievale.html", couverture: "images/couvertures/lorraine-medievale.webp", couleur: "#C27A3A" },
  { titre: "Jeanne d'Arc et le sacre de Charles VII à Reims", sousTitre: "De Domrémy à Reims, 1429", page: "jeanne-arc-sacre-reims.html", couverture: "images/couvertures/jeanne-arc-sacre-reims.webp", couleur: "#C27A3A" },
  { titre: "La Réforme protestante en Alsace", sousTitre: "Bucer, Calvin, Sturm et le simultaneum", page: "reforme-alsace.html", couverture: "images/couvertures/reforme-alsace.webp", couleur: "#C27A3A" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
