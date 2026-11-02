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
   ══════════════════════════════════════════════════════════════ */

AME.ajouterLivres("corse", [
  { titre: "La Corse pisane et ses églises romanes",
    sousTitre: "1077-1284",
    page: "corse-pisane.html",
    couverture: "images/couvertures/corse-pisane.webp",
    couleur: "#1E6FA0" },

  { titre: "La bataille de la Meloria",
    sousTitre: "6 août 1284",
    page: "meloria.html",
    couverture: "images/couvertures/meloria.webp",
    couleur: "#1E6FA0" },

  { titre: "Sambucucciu et la Terre des communes",
    sousTitre: "la révolte de 1358",
    page: "sambucucciu.html",
    couverture: "images/couvertures/sambucucciu.webp",
    couleur: "#1E6FA0" },

  { titre: "Gênes et la Corse",
    sousTitre: "cinq siècles de domination, 1284-1768",
    page: "genes-corse.html",
    couverture: "images/couvertures/genes-corse.webp",
    couleur: "#1E6FA0" },

  { titre: "Les tours génoises",
    sousTitre: "sentinelles contre les Barbaresques",
    page: "tours-genoises.html",
    couverture: "images/couvertures/tours-genoises.webp",
    couleur: "#1E6FA0" },

  { titre: "Sampiero Corso",
    sousTitre: "le héros de la résistance à Gênes",
    page: "sampiero-corso.html",
    couverture: "images/couvertures/sampiero-corso.webp",
    couleur: "#1E6FA0" },

  { titre: "La guerre d'indépendance et le roi Théodore",
    sousTitre: "1729-1755",
    page: "independance-theodore.html",
    couverture: "images/couvertures/independance-theodore.webp",
    couleur: "#1E6FA0" },

  { titre: "Pascal Paoli et la Corse indépendante",
    sousTitre: "1755-1769",
    page: "pascal-paoli.html",
    couverture: "images/couvertures/pascal-paoli.webp",
    couleur: "#1E6FA0" },

  { titre: "Napoléon et la Corse",
    sousTitre: "Ajaccio et la famille Bonaparte",
    page: "napoleon-corse.html",
    couverture: "images/couvertures/napoleon-corse.webp",
    couleur: "#1E6FA0" },

  { titre: "Le royaume anglo-corse",
    sousTitre: "1794-1796",
    page: "royaume-anglo-corse.html",
    couverture: "images/couvertures/royaume-anglo-corse.webp",
    couleur: "#1E6FA0" },

  { titre: "La Corse dans les guerres mondiales",
    sousTitre: "1914-1918 et 1939-1945",
    page: "corse-guerres-mondiales.html",
    couverture: "images/couvertures/corse-guerres-mondiales.webp",
    couleur: "#1E6FA0" },

  { titre: "La Corse contemporaine",
    sousTitre: "de 1945 à nos jours",
    page: "corse-contemporaine.html",
    couverture: "images/couvertures/corse-contemporaine.webp",
    couleur: "#1E6FA0" },

  { titre: "Vendetta et bandits d'honneur",
    sousTitre: "le maquis, Mérimée et « Colomba »",
    page: "vendetta-bandits.html",
    couverture: "images/couvertures/vendetta-bandits.webp",
    couleur: "#1E6FA0" },

  { titre: "L'émigration corse",
    sousTitre: "du village au continent et à l'empire",
    page: "emigration-corse.html",
    couverture: "images/couvertures/emigration-corse.webp",
    couleur: "#1E6FA0" },

  { titre: "La langue et le chant corses",
    sousTitre: "paghjella, confréries, Riacquistu",
    page: "langue-chant-corses.html",
    couverture: "images/couvertures/langue-chant-corses.webp",
    couleur: "#1E6FA0" }

  /* Modèle à recopier pour un nouveau livre (mettre une virgule après le livre précédent) :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp" },
  */
]);
