/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Corse
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
     sujet       : le sujet du livre, montré par une étiquette de couleur
                   sur le dos et dans le registre. Au choix : antiquite,
                   moyen-age, moderne, contemporain, industrie, agriculture,
                   nature, villes, culture, gastronomie, panorama
   ══════════════════════════════════════════════════════════════ */

AME.ajouterLivres("corse", [
  { titre: "La Corse antique",
    sousTitre: "Grecs, Étrusques et Romains, d'Alalia à Aléria",
    page: "corse-antique.html",
    sujet: "antiquite",
    couverture: "images/couvertures/corse-antique.webp",
    couleur: "#1E6FA0" },

  { titre: "La Corse pisane et ses églises romanes",
    sousTitre: "1077-1284",
    page: "corse-pisane.html",
    sujet: "moyen-age",
    couverture: "images/couvertures/corse-pisane.webp",
    couleur: "#1E6FA0" },

  { titre: "La bataille de la Meloria",
    sousTitre: "6 août 1284",
    page: "meloria.html",
    sujet: "moyen-age",
    couverture: "images/couvertures/meloria.webp",
    couleur: "#1E6FA0" },

  { titre: "Sambucucciu et la Terre des communes",
    sousTitre: "la révolte de 1358",
    page: "sambucucciu.html",
    sujet: "moyen-age",
    couverture: "images/couvertures/sambucucciu.webp",
    couleur: "#1E6FA0" },

  { titre: "Gênes et la Corse",
    sousTitre: "cinq siècles de domination, 1284-1768",
    page: "genes-corse.html",
    sujet: "moderne",
    couverture: "images/couvertures/genes-corse.webp",
    couleur: "#1E6FA0" },

  { titre: "Les tours génoises",
    sousTitre: "sentinelles contre les Barbaresques",
    page: "tours-genoises.html",
    sujet: "moderne",
    couverture: "images/couvertures/tours-genoises.webp",
    couleur: "#1E6FA0" },

  { titre: "Sampiero Corso",
    sousTitre: "le héros de la résistance à Gênes",
    page: "sampiero-corso.html",
    sujet: "moderne",
    couverture: "images/couvertures/sampiero-corso.webp",
    couleur: "#1E6FA0" },

  { titre: "La guerre d'indépendance et le roi Théodore",
    sousTitre: "1729-1755",
    page: "independance-theodore.html",
    sujet: "moderne",
    couverture: "images/couvertures/independance-theodore.webp",
    couleur: "#1E6FA0" },

  { titre: "Pascal Paoli et la Corse indépendante",
    sousTitre: "1755-1769",
    page: "pascal-paoli.html",
    sujet: "moderne",
    couverture: "images/couvertures/pascal-paoli.webp",
    couleur: "#1E6FA0" },

  { titre: "Napoléon et la Corse",
    sousTitre: "Ajaccio et la famille Bonaparte",
    page: "napoleon-corse.html",
    sujet: "contemporain",
    couverture: "images/couvertures/napoleon-corse.webp",
    couleur: "#1E6FA0" },

  { titre: "Le royaume anglo-corse",
    sousTitre: "1794-1796",
    page: "royaume-anglo-corse.html",
    sujet: "moderne",
    couverture: "images/couvertures/royaume-anglo-corse.webp",
    couleur: "#1E6FA0" },

  { titre: "La Corse dans les guerres mondiales",
    sousTitre: "1914-1918 et 1939-1945",
    page: "corse-guerres-mondiales.html",
    sujet: "contemporain",
    couverture: "images/couvertures/corse-guerres-mondiales.webp",
    couleur: "#1E6FA0" },

  { titre: "La Corse contemporaine",
    sousTitre: "de 1945 à nos jours",
    page: "corse-contemporaine.html",
    sujet: "contemporain",
    couverture: "images/couvertures/corse-contemporaine.webp",
    couleur: "#1E6FA0" },

  { titre: "Vendetta et bandits d'honneur",
    sousTitre: "le maquis, Mérimée et « Colomba »",
    page: "vendetta-bandits.html",
    sujet: "culture",
    couverture: "images/couvertures/vendetta-bandits.webp",
    couleur: "#1E6FA0" },

  { titre: "L'émigration corse",
    sousTitre: "du village au continent et à l'empire",
    page: "emigration-corse.html",
    sujet: "contemporain",
    couverture: "images/couvertures/emigration-corse.webp",
    couleur: "#1E6FA0" },

  { titre: "La langue et le chant corses",
    sousTitre: "paghjella, confréries, Riacquistu",
    page: "langue-chant-corses.html",
    sujet: "culture",
    couverture: "images/couvertures/langue-chant-corses.webp",
    couleur: "#1E6FA0" },

  { titre: "La naissance du FLNC",
    sousTitre: "d'Aléria (1975) à aujourd'hui",
    page: "naissance-flnc.html",
    sujet: "contemporain",
    couverture: "images/couvertures/naissance-flnc.webp",
    couleur: "#1E6FA0" },

  { titre: "Les rapatriés d'Afrique du Nord",
    sousTitre: "en Corse, dans les années 1960",
    page: "rapatries-afrique-du-nord.html",
    sujet: "contemporain",
    couverture: "images/couvertures/rapatries-afrique-du-nord.webp",
    couleur: "#1E6FA0" },

  { titre: "Les agrumes de la plaine orientale",
    sousTitre: "du cédrat à la clémentine IGP",
    page: "agrumes-plaine-orientale.html",
    sujet: "agriculture",
    couverture: "images/couvertures/agrumes-plaine-orientale.webp",
    couleur: "#1E6FA0" },

  { titre: "Les oliveraies de Balagne",
    sousTitre: "l'olivier, l'huile et la récolte sur filets",
    page: "oliveraies-balagne.html",
    sujet: "agriculture",
    couverture: "images/couvertures/oliveraies-balagne.webp",
    couleur: "#1E6FA0" },

  { titre: "La châtaigne, arbre à pain",
    sousTitre: "de la Castagniccia",
    page: "chataigne-castagniccia.html",
    sujet: "agriculture",
    couverture: "images/couvertures/chataigne-castagniccia.webp",
    couleur: "#1E6FA0" },

  { titre: "Le pastoralisme et le brocciu",
    sousTitre: "bergers, transhumance, fromages",
    page: "pastoralisme-brocciu.html",
    sujet: "agriculture",
    couverture: "images/couvertures/pastoralisme-brocciu.webp",
    couleur: "#1E6FA0" },

  { titre: "Les vins de Corse",
    sousTitre: "du phylloxéra à Patrimonio",
    page: "vins-corse.html",
    sujet: "agriculture",
    couverture: "images/couvertures/vins-corse.webp",
    couleur: "#1E6FA0" },

  { titre: "Les chemins de fer de Corse",
    sousTitre: "le Trinichellu et le viaduc du Vecchio",
    page: "chemins-de-fer-corse.html",
    sujet: "industrie",
    couverture: "images/couvertures/chemins-de-fer-corse.webp",
    couleur: "#1E6FA0" },

  { titre: "Mines et industries de Corse",
    sousTitre: "l'amiante de Canari, le tanin, le cédrat et le corail",
    page: "mines-industries.html",
    sujet: "industrie",
    couverture: "images/couvertures/mines-industries.webp",
    couleur: "#1E6FA0" },

  { titre: "Le golfe de Porto et Scandola",
    sousTitre: "un site du patrimoine mondial",
    page: "golfe-porto-scandola.html",
    sujet: "nature",
    couverture: "images/couvertures/golfe-porto-scandola.webp",
    couleur: "#1E6FA0" },

  { titre: "Le Parc naturel régional et le GR20",
    sousTitre: "montagnes, lacs, mouflons et gypaètes",
    page: "parc-naturel-gr20.html",
    sujet: "nature",
    couverture: "images/couvertures/parc-naturel-gr20.webp",
    couleur: "#1E6FA0" },

  { titre: "Ajaccio, cité impériale",
    sousTitre: "la ville natale de Napoléon",
    page: "ajaccio.html",
    sujet: "villes",
    couverture: "images/couvertures/ajaccio.webp",
    couleur: "#1E6FA0" },

  { titre: "Bonifacio et les Bouches",
    sousTitre: "la cité des falaises et sa réserve marine",
    page: "bonifacio-bouches.html",
    sujet: "villes",
    couverture: "images/couvertures/bonifacio-bouches.webp",
    couleur: "#1E6FA0" },

  { titre: "Bastia, la cité génoise",
    sousTitre: "le grand port du nord-est",
    page: "bastia.html",
    sujet: "villes",
    couverture: "images/couvertures/bastia.webp",
    couleur: "#1E6FA0" },

  { titre: "Corte, capitale de Paoli",
    sousTitre: "la citadelle, la constitution et l'université",
    page: "corte-capitale-paoli.html",
    sujet: "villes",
    couverture: "images/couvertures/corte-capitale-paoli.webp",
    couleur: "#1E6FA0" },

  { titre: "Religion, confréries et fêtes",
    sousTitre: "processions, Catenacciu et chants sacrés",
    page: "religion-confreries-fetes.html",
    sujet: "culture",
    couverture: "images/couvertures/religion-confreries-fetes.webp",
    couleur: "#1E6FA0" },

  { titre: "La Corse à la loupe",
    sousTitre: "administration, économie, nature et patrimoine",
    page: "corse-info.html",
    sujet: "panorama",
    couverture: "images/couvertures/corse-info.webp",
    couleur: "#1E6FA0" },

  { titre: "Recettes salées et sucrées",
    sousTitre: "de Corse : 60 recettes",
    page: "recettes-corse.html",
    sujet: "gastronomie",
    couverture: "images/couvertures/recettes-corse.webp",
    couleur: "#1E6FA0" }

  /* Modèle à recopier pour un nouveau livre (mettre une virgule après le livre précédent) :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    sujet: "culture",
    couverture: "images/couvertures/couverture-nom-du-livre.webp" },
  */
]);
