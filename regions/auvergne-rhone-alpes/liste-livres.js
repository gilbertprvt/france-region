/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Auvergne-Rhône-Alpes
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

AME.ajouterLivres("auvergne-rhone-alpes", [
  { titre: "Les canuts de Lyon",
    sousTitre: "la soie et les révoltes ouvrières",
    page: "canuts-lyon.html",
    couverture: "images/couvertures/canuts-lyon.webp",
    couleur: "#1D4A1F" },

  { titre: "Lyon et le cinéma",
    sousTitre: "les frères Lumière en 1895",
    page: "lyon-cinema.html",
    couverture: "images/couvertures/lyon-cinema.webp",
    couleur: "#1D4A1F" },

  { titre: "La fête des Lumières à Lyon",
    sousTitre: "du 8 décembre 1852 au festival",
    page: "fete-des-lumieres.html",
    couverture: "images/couvertures/fete-des-lumieres.webp",
    couleur: "#1D4A1F" },

  { titre: "Les bouchons lyonnais",
    sousTitre: "mères lyonnaises et Paul Bocuse",
    page: "bouchons-lyonnais.html",
    couverture: "images/couvertures/bouchons-lyonnais.webp",
    couleur: "#1D4A1F" },

  { titre: "Les volcans d'Auvergne",
    sousTitre: "chaîne des Puys, Sancy, Cantal",
    page: "volcans-auvergne.html",
    couverture: "images/couvertures/volcans-auvergne.webp",
    couleur: "#1D4A1F" },

  { titre: "Michelin à Clermont-Ferrand",
    sousTitre: "le pneu, Bibendum et le Guide rouge",
    page: "michelin-clermont.html",
    couverture: "images/couvertures/michelin-clermont.webp",
    couleur: "#1D4A1F" },

  { titre: "Les couteaux de Thiers",
    sousTitre: "émouleurs, Laguiole et Le Thiers",
    page: "couteaux-thiers.html",
    couverture: "images/couvertures/couteaux-thiers.webp",
    couleur: "#1D4A1F" },

  { titre: "Le Puy-en-Velay",
    sousTitre: "Compostelle, dentelle et volcans",
    page: "puy-en-velay.html",
    couverture: "images/couvertures/puy-en-velay.webp",
    couleur: "#1D4A1F" },

  { titre: "Saint-Étienne",
    sousTitre: "armes, cycles et Manufrance",
    page: "saint-etienne.html",
    couverture: "images/couvertures/saint-etienne.webp",
    couleur: "#1D4A1F" },

  { titre: "Le Mont-Blanc et l'alpinisme",
    sousTitre: "de 1786 aux Jeux de 1924",
    page: "mont-blanc-alpinisme.html",
    couverture: "images/couvertures/mont-blanc-alpinisme.webp",
    couleur: "#1D4A1F" },

  { titre: "Les glaciers des Alpes",
    sousTitre: "la Mer de Glace et le climat",
    page: "glaciers-alpes.html",
    couverture: "images/couvertures/glaciers-alpes.webp",
    couleur: "#1D4A1F" },

  { titre: "Les parcs de la Vanoise et des Écrins",
    sousTitre: "bouquetins et haute montagne",
    page: "parcs-vanoise-ecrins.html",
    couverture: "images/couvertures/parcs-vanoise-ecrins.webp",
    couleur: "#1D4A1F" },

  { titre: "Lac Léman, lac d'Annecy, lac du Bourget",
    sousTitre: "les grands lacs alpins",
    page: "lacs-alpins.html",
    couverture: "images/couvertures/lacs-alpins.webp",
    couleur: "#1D4A1F" },

  { titre: "La houille blanche",
    sousTitre: "barrages, électricité et usines",
    page: "houille-blanche.html",
    couverture: "images/couvertures/houille-blanche.webp",
    couleur: "#1D4A1F" },

  { titre: "L'horlogerie et le décolletage",
    sousTitre: "la vallée de l'Arve",
    page: "horlogerie-decolletage.html",
    couverture: "images/couvertures/horlogerie-decolletage.webp",
    couleur: "#1D4A1F" },

  { titre: "La Chartreuse et les moines",
    sousTitre: "le silence et la liqueur",
    page: "chartreuse-moines.html",
    couverture: "images/couvertures/chartreuse-moines.webp",
    couleur: "#1D4A1F" },

  { titre: "Châteaux et villages perchés",
    sousTitre: "Pérouges, Yvoire, Murol",
    page: "chateaux-villages-perches.html",
    couverture: "images/couvertures/chateaux-villages-perches.webp",
    couleur: "#1D4A1F" },

  { titre: "Les gorges de l'Ardèche",
    sousTitre: "et la grotte Chauvet",
    page: "gorges-ardeche-chauvet.html",
    couverture: "images/couvertures/gorges-ardeche-chauvet.webp",
    couleur: "#1D4A1F" },

  { titre: "Les fromages des Alpes",
    sousTitre: "reblochon, beaufort, tomme, abondance",
    page: "fromages-alpes.html",
    couverture: "images/couvertures/fromages-alpes.webp",
    couleur: "#1D4A1F" },

  { titre: "Les vins de la région",
    sousTitre: "Beaujolais, côtes-du-rhône, Savoie",
    page: "vins-ara.html",
    couverture: "images/couvertures/vins-ara.webp",
    couleur: "#1D4A1F" }

  /* Modèle à recopier pour un nouveau livre (mettre une virgule après le livre précédent) :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp" },
  */
]);
