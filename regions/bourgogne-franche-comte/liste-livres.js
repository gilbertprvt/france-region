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

  /* Modèle à recopier pour un nouveau livre (mettre une virgule après le livre précédent) :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
