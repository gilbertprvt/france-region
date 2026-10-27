/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Occitanie
   Un livre = un bloc { … }, séparés par des virgules, dans l'ordre
   où ils seront rangés sur les étagères.
     titre       : titre écrit sur le dos et sur l'étiquette
     sousTitre   : (facultatif)
     page        : le fichier du livre, rangé dans ce dossier
     couverture  : l'image, rangée dans images/couvertures/
     theme       : (facultatif) le rayon : Histoire, Patrimoine,
                   Légendes, Traditions, Gastronomie… Chaque thème
                   a ses propres étagères, avec une plaque.
                   (Sans thème, tous les livres sont sur les mêmes étagères.)
     couleur     : (facultatif) couleur unie du dos, ex. "#7A2E2E"
                   (sinon le dos reprend les couleurs de la couverture)
   ══════════════════════════════════════════════════════════════ */

AME.ajouterLivres("occitanie", [

  { titre: "Le canal du Midi",
    sousTitre: "le rêve des Deux-Mers",
    page: "canal-du-midi.html",
    couverture: "images/couvertures/couverture-canal-du-midi.webp",
    couleur: "#3B0E02" },

  { titre: "Les bastides",
    sousTitre: "villes neuves du Midi",
    page: "bastides-occitanie.html",
    couverture: "images/couvertures/bastides-occitanie.webp",
    couleur: "#3B0E02" },

  { titre: "La soie des Cévennes",
    sousTitre: "mûriers, magnaneries et filatures",
    page: "soie-cevennes.html",
    couverture: "images/couvertures/la-soie-des-cevennes.webp",
    couleur: "#3B0E02" },

  { titre: "Aigues-Mortes",
    sousTitre: "& la Camargue gardoise",
    page: "aigues-mortes-camargue-gardoise.html",
    couverture: "images/couvertures/aigues-mortes.webp",
    couleur: "#3E1304" },

  { titre: "L'Antiquité romaine",
    sousTitre: "en Occitanie",
    page: "antiquite-romaine-occitanie.html",
    couverture: "images/couvertures/antiquite-romaine.webp",
    couleur: "#401104" },

  { titre: "L'Armagnac & la Gascogne",
    page: "armagnac-gascogne.html",
    couverture: "images/couvertures/la-gascogne.webp",
    couleur: "#411304" },

  { titre: "La croisade des Albigeois",
    page: "croisade-albigeois.html",
    couverture: "images/couvertures/croisade-albigeoise.webp",
    couleur: "#3E1003" },

  { titre: "Forteresses royales & Cathares",
    page: "catharisme-forteresses-occitanie.html",
    couverture: "images/couvertures/catharisme.webp",
    couleur: "#3B1004" },

  { titre: "Les chemins de Compostelle",
    sousTitre: "& l'art roman",
    page: "compostelle-art-roman-occitanie.html",
    couverture: "images/couvertures/compostelle.webp",
    couleur: "#3F1103" },

  { titre: "Les céréales d'Occitanie",
    page: "cereales-occitanie.html",
    couverture: "images/couvertures/cereales.webp",
    couleur: "#3D1104" },

  { titre: "Le cuir & la laine",
    sousTitre: "du Tarn et de l'Aveyron",
    page: "cuir-laine-tarn-aveyron.html",
    couverture: "images/couvertures/artisanat-cuir-laine.webp",
    couleur: "#3F1003" },

  { titre: "L'arrivée du chemin de fer",
    page: "chemin-de-fer-occitanie.html",
    couverture: "images/couvertures/chemin-de-fer.webp",
    couleur: "#3B0F03" },

  { titre: "Jaurès & le Tarn ouvrier",
    page: "jaures-tarn-ouvrier.html",
    couverture: "images/couvertures/jean-jaures.webp",
    couleur: "#421103" },

  { titre: "Roussillon & Catalogne du Nord",
    page: "roussillon-histoire-catalogne-nord.html",
    couverture: "images/couvertures/roussillon.webp",
    couleur: "#430F02" },

  { titre: "La langue d'oc & les troubadours",
    page: "langue-oc-troubadours.html",
    couverture: "images/couvertures/langue-d-oc.webp",
    couleur: "#3D0F02" },

  { titre: "Le protestantisme en Occitanie",
    page: "protestantisme-occitanie.html",
    couverture: "images/couvertures/protestantisme.webp",
    couleur: "#421002" },

  { titre: "Montpellier",
    sousTitre: "huit siècles de savoir",
    page: "montpellier-recherche.html",
    couverture: "images/couvertures/montpellier-recherche.webp",
    couleur: "#420F02" },

  { titre: "Lourdes & les Pyrénées",
    page: "lourdes-pyrenees.html",
    couverture: "images/couvertures/lourdes.webp",
    couleur: "#411002" },

  { titre: "Les mines de charbon",
    page: "mines-charbon-occitanie.html",
    couverture: "images/couvertures/charbon.webp",
    couleur: "#421002" },

  { titre: "La Résistance",
    sousTitre: "1939-1945",
    page: "resistance-1939-1945-occitanie.html",
    couverture: "images/couvertures/resistance.webp",
    couleur: "#430F02" },

  { titre: "Rapatriés de 1962 & immigrations",
    page: "rapatries-immigrations-occitanie.html",
    couverture: "images/couvertures/rapatries-migrations.webp",
    couleur: "#420F02" },

  { titre: "Le littoral & la mission Racine",
    page: "littoral-mission-racine.html",
    couverture: "images/couvertures/littoral.webp",
    couleur: "#400F02" },

  { titre: "L'Occitanie en bref",
    sousTitre: "carte d'identité d'une région",
    page: "occitanie-info.html",
    couverture: "images/couvertures/occitanie-info.webp",
    couleur: "#580F04" },

  { titre: "La langue occitane",
    sousTitre: "langue d'òc & occitan",
    page: "langue-occitane.html",
    couverture: "images/couvertures/langue-occitane.webp",
    couleur: "#5D1406" },

  { titre: "La vigne en Occitanie",
    page: "vigne-occitanie.html",
    couverture: "images/couvertures/vigne.webp",
    couleur: "#561206" },

  { titre: "Le Larzac",
    sousTitre: "Roquefort, brebis & résistance",
    page: "larzac-roquefort-pastoralisme.html",
    couverture: "images/couvertures/causses-larzac.webp",
    couleur: "#581105" },

  { titre: "La Violette de Toulouse",
    page: "violette-toulouse.html",
    couverture: "images/couvertures/violette-toulouse.webp",
    couleur: "#450901" },

  { titre: "La Retirada",
    sousTitre: "1939",
    page: "retirada-1939-occitanie.html",
    couverture: "images/couvertures/retirada.webp",
    couleur: "#440901" },

  { titre: "L'aviation en Occitanie",
    sousTitre: "de Montaudran aux étoiles",
    page: "toulouse_industrie.html",
    couverture: "images/couvertures/aviation-occitanie.webp",
    couleur: "#460E02" },

  { titre: "Recettes salées ou sucrées",
    sousTitre: "50 recettes d'Occitanie",
    page: "recettes-occitanie.html",
    couverture: "images/couvertures/recettes-occitanie.webp",
    couleur: "#450F02" }

]);
