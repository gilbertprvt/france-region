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
    couleur: "#EEC48B" }

  /* Modèle à recopier pour un nouveau livre (mettre une virgule après le livre précédent) :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp" },
  */
]);
