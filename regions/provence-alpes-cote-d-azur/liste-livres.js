/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Provence-Alpes-Côte d'Azur
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

AME.ajouterLivres("provence-alpes-cote-d-azur", [
  { titre: "La Camargue",
    sousTitre: "traditions, élevage et pèlerinages",
    page: "camargue.html",
    couverture: "images/couvertures/camargue.webp",
    couleur: "#E9C38C" },

  { titre: "Les chantiers navals de La Ciotat",
    sousTitre: "des paquebots aux yachts",
    page: "chantiers-navals-la-ciotat.html",
    couverture: "images/couvertures/chantiers-navals-la-ciotat.webp",
    couleur: "#ECC388" },

  { titre: "Les ocres de Provence",
    sousTitre: "de la terre aux pigments",
    page: "ocres-provence.html",
    couverture: "images/couvertures/ocres-provence.webp",
    couleur: "#EEC48B" },

  { titre: "Nice et la Savoie",
    sousTitre: "de 1388 à 1860",
    page: "nice-savoie.html",
    couverture: "images/couvertures/nice-savoie.webp",
    couleur: "#EBC188" },

  { titre: "La papauté en Avignon",
    sousTitre: "la Cité des papes",
    page: "papaute-avignon.html",
    couverture: "images/couvertures/papaute-avignon.webp",
    couleur: "#EABF84" },

  { titre: "Le provençal",
    sousTitre: "langue et culture",
    page: "provencal-langue-culture.html",
    couverture: "images/couvertures/provencal-langue-culture.webp",
    couleur: "#EDC187" },

  { titre: "Le Festival de Cannes",
    sousTitre: "la capitale du cinéma",
    page: "festival-cannes.html",
    couverture: "images/couvertures/festival-cannes.webp",
    couleur: "#EDC188" },

  { titre: "Les parfumeries de Grasse",
    sousTitre: "de la fleur au parfum",
    page: "parfumeries-grasse.html",
    couverture: "images/couvertures/parfumeries-grasse.webp",
    couleur: "#EBBD83" },

  { titre: "La culture de l'olivier",
    sousTitre: "de l'arbre à l'huile",
    page: "culture-olivier.html",
    couverture: "images/couvertures/culture-olivier.webp",
    couleur: "#EDBF84" },

  { titre: "La culture de la lavande",
    sousTitre: "des champs aux huiles essentielles",
    page: "culture-lavande.html",
    couverture: "images/couvertures/culture-lavande.webp",
    couleur: "#ECBB81" },

  { titre: "L'industrialisation de Marseille",
    sousTitre: "et de l'étang de Berre",
    page: "industrialisation-marseille-berre.html",
    couverture: "images/couvertures/industrialisation-marseille-berre.webp",
    couleur: "#ECBB81" }

  /* Modèle à recopier pour un nouveau livre (mettre une virgule après le livre précédent) :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp" },
  */
]);
