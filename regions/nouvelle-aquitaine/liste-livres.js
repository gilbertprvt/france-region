/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Nouvelle-Aquitaine
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

AME.ajouterLivres("nouvelle-aquitaine", [

  { titre: "Le Pays basque",
    sousTitre: "histoire et traditions",
    page: "pays-basque-histoire-traditions.html",
    couverture: "images/couvertures/pays-basque.webp",
    couleur: "#07294F" },

  { titre: "Le pastoralisme pyrénéen",
    page: "pastoralisme-pyreneen.html",
    couverture: "images/couvertures/pastoralisme-pyreneen.webp",
    couleur: "#0D3254" },

  { titre: "Les huîtres de Marennes-Oléron",
    page: "huitres-marennes-oleron.html",
    couverture: "images/couvertures/huitres-marennes-oleron.webp",
    couleur: "#0C2C49" },

  { titre: "L'élevage limousin",
    page: "elevage-bovin-limousin.html",
    couverture: "images/couvertures/vache-limousine.webp",
    couleur: "#0D2F4E" },

  { titre: "Les tapisseries d'Aubusson",
    page: "tapisseries-aubusson.html",
    couverture: "images/couvertures/tapisserie-aubusson.webp",
    couleur: "#0D2F4D" },

  { titre: "Les papeteries d'Angoulême",
    page: "papeteries-angouleme.html",
    couverture: "images/couvertures/papeteries-angouleme.webp",
    couleur: "#0C2C4A" },

  { titre: "La laine et le cuir",
    sousTitre: "Limousin et Béarn",
    page: "textile-cuir-limousin-bearn.html",
    couverture: "images/couvertures/textile-cuir.webp",
    couleur: "#0D2E4E" },

  { titre: "Le vignoble bordelais",
    page: "vignoble-bordelais.html",
    couverture: "images/couvertures/vignoble-bordelais.webp",
    couleur: "#0D2E4C" },

  { titre: "Le cognac",
    page: "cognac-charentes.html",
    couverture: "images/couvertures/cognac.webp",
    couleur: "#0D2E4D" },

  { titre: "La peste noire",
    sousTitre: "1348",
    page: "peste-noire-1348.html",
    couverture: "images/couvertures/peste-noire.webp",
    couleur: "#0D2E4D" },

  { titre: "La Rochelle",
    sousTitre: "port atlantique",
    page: "la-rochelle-commerce-maritime.html",
    couverture: "images/couvertures/la-rochelle.webp",
    couleur: "#0D2E4C" },

  { titre: "Commerce colonial et traite",
    page: "commerce-colonial-traite.html",
    couverture: "images/couvertures/traite-atlantique.webp",
    couleur: "#0D2E4D" },

  { titre: "Limoges 1895",
    sousTitre: "naissance de la CGT",
    page: "cgt-limoges-1895.html",
    couverture: "images/couvertures/cgt-limoges.webp",
    couleur: "#0E304F" },

  { titre: "Les gabares de la Dordogne",
    page: "gabares-dordogne.html",
    couverture: "images/couvertures/gabares-dordogne.webp",
    couleur: "#0D2D4D" },

  { titre: "Le rail dans le Sud-Ouest",
    page: "chemin-de-fer-tgv-sud-ouest.html",
    couverture: "images/couvertures/chemin-de-fer-sud-ouest.webp",
    couleur: "#0E2F4E" },

  { titre: "L'aéronautique à Bordeaux",
    page: "aeronautique-bordeaux.html",
    couverture: "images/couvertures/aeronautique-bordeaux.webp",
    couleur: "#0D2E4C" },

  { titre: "Aliénor d'Aquitaine",
    page: "alienor-aquitaine.html",
    couverture: "images/couvertures/alienor-aquitaine.webp",
    couleur: "#04284A" },

  { titre: "La guerre de Cent Ans",
    sousTitre: "en Aquitaine",
    page: "guerre-cent-ans-aquitaine.html",
    couverture: "images/couvertures/guerre-cent-ans-aquitaine.webp",
    couleur: "#04274A" },

  { titre: "Les guerres de Religion",
    sousTitre: "et La Rochelle",
    page: "guerres-religion-la-rochelle.html",
    couverture: "images/couvertures/guerres-religion-la-rochelle.webp",
    couleur: "#04274A" },

  { titre: "La Résistance",
    sousTitre: "et la ligne de démarcation",
    page: "resistance-demarcation-oradour.html",
    couverture: "images/couvertures/resistance-demarcation-oradour.webp",
    couleur: "#04274B" },

  { titre: "Lascaux",
    sousTitre: "et la vallée de la Vézère",
    page: "lascaux-vallee-vezere.html",
    couverture: "images/couvertures/lascaux-vallee-vezere.webp",
    couleur: "#04274B" },

  { titre: "Les châteaux du Périgord",
    page: "chateaux-perigord.html",
    couverture: "images/couvertures/chateaux-perigord.webp",
    couleur: "#04274B" },

  { titre: "La dune du Pilat",
    sousTitre: "et le bassin d'Arcachon",
    page: "dune-pilat-bassin-arcachon.html",
    couverture: "images/couvertures/dune-pilat-bassin-arcachon.webp",
    couleur: "#04284C" },

  { titre: "Le Béarn et Henri IV",
    page: "bearn-henri-iv.html",
    couverture: "images/couvertures/bearn-henri-iv.webp",
    couleur: "#04274C" },

  { titre: "Le Limousin",
    sousTitre: "histoire et paysages",
    page: "limousin-histoire-paysages.html",
    couverture: "images/couvertures/limousin-histoire-paysages.webp",
    couleur: "#05284D" },

  { titre: "Le Marais poitevin",
    page: "marais-poitevin.html",
    couverture: "images/couvertures/marais-poitevin.webp",
    couleur: "#05284D" },

  { titre: "La langue occitane et le basque",
    page: "langues-occitan-basque.html",
    couverture: "images/couvertures/langues-occitan-basque.webp",
    couleur: "#05284E" },

  { titre: "La Nouvelle-Aquitaine à la loupe",
    page: "nouvelle-aquitaine-info.html",
    couverture: "images/couvertures/nouvelle-aquitaine-info.webp",
    couleur: "#05284B" },

  { titre: "Recettes salées ou sucrées",
    page: "recettes-nouvelle-aquitaine.html",
    couverture: "images/couvertures/recettes-nouvelle-aquitaine.webp",
    couleur: "#07284E" }

]);
