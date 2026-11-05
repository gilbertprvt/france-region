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
    couleur: "#ECBB81" },

  { titre: "Recettes salées ou sucrées",
    sousTitre: "de Provence-Alpes-Côte d'Azur",
    page: "recettes-provence.html",
    couverture: "images/couvertures/recettes-provence.webp",
    couleur: "#EBB87E" },

  { titre: "La Provence à la loupe",
    sousTitre: "géographie, habitants, économie",
    page: "provence-a-la-loupe.html",
    couverture: "images/couvertures/provence-a-la-loupe.webp",
    couleur: "#E9B67C" },

  { titre: "Marseille, histoire d'une ville",
    sousTitre: "2 600 ans d'histoire",
    page: "marseille-histoire.html",
    couverture: "images/couvertures/marseille-histoire.webp",
    couleur: "#E9AF73" },

  { titre: "La Provence romaine",
    sousTitre: "de Massalia à la fin de l'Empire",
    page: "provence-romaine.html",
    couverture: "images/couvertures/provence-romaine.webp",
    couleur: "#E9B177" },

  { titre: "Les Vaudois du Luberon",
    sousTitre: "et les guerres de Religion",
    page: "vaudois-luberon.html",
    couverture: "images/couvertures/vaudois-luberon.webp",
    couleur: "#F3B46A" },

  { titre: "Les places fortes de Vauban",
    sousTitre: "Briançon, Mont-Dauphin, Entrevaux, Toulon",
    page: "vauban-places-fortes.html",
    couverture: "images/couvertures/vauban-places-fortes.webp",
    couleur: "#F4B76F" },

  { titre: "La Résistance et le débarquement",
    sousTitre: "de Provence, 1939-1945",
    page: "resistance-debarquement.html",
    couverture: "images/couvertures/resistance-debarquement.webp",
    couleur: "#EBB57A" },

  { titre: "Les vins de Provence",
    sousTitre: "vignobles, cépages et appellations",
    page: "vins-provence.html",
    couverture: "images/couvertures/vins-provence.webp",
    couleur: "#EAB378" },

  { titre: "Les artisans de Provence",
    sousTitre: "santons, faïences, poteries, verre",
    page: "artisans-provence.html",
    couverture: "images/couvertures/artisans-provence.webp",
    couleur: "#F7BA74" },

  { titre: "La transhumance et les bergers",
    sousTitre: "de la Crau aux alpages",
    page: "transhumance-bergers.html",
    couverture: "images/couvertures/transhumance-bergers.webp",
    couleur: "#E9AF74" },

  { titre: "Les Alpes du Sud et la nature",
    sousTitre: "Mercantour, Verdon, Ventoux, Calanques",
    page: "alpes-sud-nature.html",
    couverture: "images/couvertures/alpes-sud-nature.webp",
    couleur: "#E09D59" },

  { titre: "Les peintres en Provence",
    sousTitre: "Cézanne, Van Gogh, Picasso, Matisse, Chagall",
    page: "peintres-provence.html",
    couverture: "images/couvertures/peintres-provence.webp",
    couleur: "#F6B568" },

  { titre: "Toulon et la Marine",
    sousTitre: "l'arsenal et le sabordage de 1942",
    page: "toulon-marine.html",
    couverture: "images/couvertures/toulon-marine.webp",
    couleur: "#F9B96B" },

  { titre: "La Provence au Moyen Âge",
    sousTitre: "comtes, roi René et abbayes",
    page: "provence-moyen-age.html",
    couverture: "images/couvertures/provence-moyen-age.webp",
    couleur: "#F9BA6C" },

  { titre: "Les écrivains de Provence",
    sousTitre: "Mistral, Daudet, Giono, Pagnol, Bosco",
    page: "ecrivains-provence.html",
    couverture: "images/couvertures/ecrivains-provence.webp",
    couleur: "#FAB763" },

  { titre: "Noël et les traditions provençales",
    sousTitre: "treize desserts, pastorales, pétanque",
    page: "noel-traditions.html",
    couverture: "images/couvertures/noel-traditions.webp",
    couleur: "#FABA69" },

  { titre: "Les produits du terroir",
    sousTitre: "truffe, melon, fruits, miel, Banon",
    page: "produits-terroir.html",
    couverture: "images/couvertures/produits-terroir.webp",
    couleur: "#FAB563" },

  { titre: "Aix-en-Provence",
    sousTitre: "ville d'art et de fontaines",
    page: "aix-en-provence.html",
    couverture: "images/couvertures/aix-en-provence.webp",
    couleur: "#F9B866" }

  /* Modèle à recopier pour un nouveau livre (mettre une virgule après le livre précédent) :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp" },
  */
]);
