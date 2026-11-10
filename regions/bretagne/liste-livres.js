/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Bretagne
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

AME.ajouterLivres("bretagne", [
  { titre: "La Bretagne à la loupe", sousTitre: "La région en chiffres, en cartes et en images", page: "bretagne-info.html", couverture: "images/couvertures/bretagne-info.webp", couleur: "#1C5A12" },
  { titre: "Recettes salées & sucrées", sousTitre: "60 recettes de Bretagne, avec leurs boissons", page: "recettes-bretagne.html", couverture: "images/couvertures/recettes-bretagne-2.webp", couleur: "#1C5A12" },
  { titre: "La Côte de Granit rose", sousTitre: "Ploumanac'h, Perros-Guirec, Trégastel et les Sept-Îles", page: "granit-rose.html", couverture: "images/couvertures/granit-rose.webp", couleur: "#1C5A12" },
  { titre: "Le Finistère, le « bout du monde »", sousTitre: "La pointe du Raz, Crozon, Ouessant et Sein", page: "finistere.html", couverture: "images/couvertures/finistere.webp", couleur: "#1C5A12" },
  { titre: "Le golfe du Morbihan et Belle-Île", sousTitre: "La « petite mer », la Côte sauvage et Claude Monet", page: "golfe-morbihan-belle-ile.html", couverture: "images/couvertures/golfe-morbihan-belle-ile.webp", couleur: "#1C5A12" },
  { titre: "Brocéliande et les monts d'Arrée", sousTitre: "Merlin, Viviane, l'Ankou et les légendes bretonnes", page: "broceliande-arree.html", couverture: "images/couvertures/broceliande-arree.webp", couleur: "#1C5A12" },
  { titre: "Les mégalithes de Bretagne", sousTitre: "Carnac, Barnenez, Gavrinis et Locmariaquer", page: "megalithes.html", couverture: "images/couvertures/megalithes.webp", couleur: "#1C5A12" },
  { titre: "La défaite des Vénètes", sousTitre: "56 av. J.-C. : César contre les marins de l'Armorique", page: "venetes.html", couverture: "images/couvertures/venetes.webp", couleur: "#1C5A12" },
  { titre: "L'arrivée des Bretons", sousTitre: "Ve-VIe siècles : comment l'Armorique devint la Bretagne", page: "arrivee-bretons.html", couverture: "images/couvertures/arrivee-bretons.webp", couleur: "#1C5A12" },
  { titre: "Nominoë et la bataille de Ballon", sousTitre: "845 : le « père de la patrie » bretonne", page: "nominoe-ballon.html", couverture: "images/couvertures/nominoe-ballon.webp", couleur: "#1C5A12" },
  { titre: "Alain Barbetorte", sousTitre: "936-939 : le prince qui chassa les Vikings", page: "alain-barbetorte.html", couverture: "images/couvertures/alain-barbetorte.webp", couleur: "#1C5A12" },
  { titre: "La guerre de Succession de Bretagne", sousTitre: "1341-1364 : Blois contre Montfort", page: "guerre-succession.html", couverture: "images/couvertures/guerre-succession.webp", couleur: "#1C5A12" },
  { titre: "Anne de Bretagne", sousTitre: "1477-1514 : duchesse et deux fois reine", page: "anne-de-bretagne.html", couverture: "images/couvertures/anne-de-bretagne.webp", couleur: "#1C5A12" },
  { titre: "L'édit d'Union", sousTitre: "1532 : la Bretagne unie à la France", page: "edit-union.html", couverture: "images/couvertures/edit-union.webp", couleur: "#1C5A12" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
