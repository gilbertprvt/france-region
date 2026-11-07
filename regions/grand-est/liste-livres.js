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
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
