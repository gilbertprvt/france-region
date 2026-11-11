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
  { titre: "La défaite des Vénètes", sousTitre: "56 av. J.-C. : César contre les marins de l'Armorique", page: "venetes.html", couverture: "images/couvertures/venetes-2.webp", couleur: "#1C5A12" },
  { titre: "L'arrivée des Bretons", sousTitre: "Ve-VIe siècles : comment l'Armorique devint la Bretagne", page: "arrivee-bretons.html", couverture: "images/couvertures/arrivee-bretons-2.webp", couleur: "#1C5A12" },
  { titre: "Nominoë et la bataille de Ballon", sousTitre: "845 : le « père de la patrie » bretonne", page: "nominoe-ballon.html", couverture: "images/couvertures/nominoe-ballon.webp", couleur: "#1C5A12" },
  { titre: "Alain Barbetorte", sousTitre: "936-939 : le prince qui chassa les Vikings", page: "alain-barbetorte.html", couverture: "images/couvertures/alain-barbetorte-2.webp", couleur: "#1C5A12" },
  { titre: "La guerre de Succession de Bretagne", sousTitre: "1341-1364 : Blois contre Montfort", page: "guerre-succession.html", couverture: "images/couvertures/guerre-succession-2.webp", couleur: "#1C5A12" },
  { titre: "Anne de Bretagne", sousTitre: "1477-1514 : duchesse et deux fois reine", page: "anne-de-bretagne.html", couverture: "images/couvertures/anne-de-bretagne-2.webp", couleur: "#1C5A12" },
  { titre: "L'édit d'Union", sousTitre: "1532 : la Bretagne unie à la France", page: "edit-union.html", couverture: "images/couvertures/edit-union-2.webp", couleur: "#1C5A12" },
  { titre: "Jacques Cartier", sousTitre: "1534 : le Malouin qui explora le Canada", page: "jacques-cartier.html", couverture: "images/couvertures/jacques-cartier.webp", couleur: "#1C5A12" },
  { titre: "Lorient et la Compagnie des Indes", sousTitre: "1666 : une ville née du commerce avec l'Asie", page: "lorient-compagnie-indes.html", couverture: "images/couvertures/lorient-compagnie-indes.webp", couleur: "#1C5A12" },
  { titre: "La révolte des Bonnets rouges", sousTitre: "1675 : la Bretagne contre les impôts de Louis XIV", page: "bonnets-rouges.html", couverture: "images/couvertures/bonnets-rouges.webp", couleur: "#1C5A12" },
  { titre: "Les corsaires de Saint-Malo", sousTitre: "De Duguay-Trouin à Surcouf", page: "corsaires-saint-malo.html", couverture: "images/couvertures/corsaires-saint-malo.webp", couleur: "#1C5A12" },
  { titre: "La Chouannerie", sousTitre: "1793-1800 : la guerre des chemins creux", page: "chouannerie.html", couverture: "images/couvertures/chouannerie.webp", couleur: "#1C5A12" },
  { titre: "Les ports et arsenaux", sousTitre: "Brest, Lorient, Saint-Nazaire et Roscoff", page: "ports-arsenaux.html", couverture: "images/couvertures/ports-arsenaux.webp", couleur: "#1C5A12" },
  { titre: "La pêche et les conserveries", sousTitre: "La sardine, Douarnenez et les Penn Sardin", page: "peche-conserveries.html", couverture: "images/couvertures/peche-conserveries.webp", couleur: "#1C5A12" },
  { titre: "La langue et la culture bretonnes", sousTitre: "Breton, gallo, Barzaz Breiz, fest-noz et Gwenn ha du", page: "langue-culture.html", couverture: "images/couvertures/langue-culture.webp", couleur: "#1C5A12" },
  { titre: "La révolution agricole d'après-guerre", sousTitre: "De la petite ferme à l'agroalimentaire", page: "revolution-agricole.html", couverture: "images/couvertures/revolution-agricole.webp", couleur: "#1C5A12" },
  { titre: "Le renouveau culturel breton", sousTitre: "Des années 1950 à nos jours : Stivell, Diwan, fest-noz", page: "renouveau-culturel.html", couverture: "images/couvertures/renouveau-culturel.webp", couleur: "#1C5A12" },
  { titre: "La marée noire de l'Amoco Cadiz", sousTitre: "1978 : la catastrophe et le « Plus jamais ça »", page: "amoco-cadiz.html", couverture: "images/couvertures/amoco-cadiz.webp", couleur: "#1C5A12" },
  { titre: "Pont-Aven et les peintres", sousTitre: "Gauguin, Bernard et l'École de Pont-Aven", page: "pont-aven.html", couverture: "images/couvertures/pont-aven.webp", couleur: "#1C5A12" },
  { titre: "L'énergie de la mer", sousTitre: "La Rance, Plogoff et l'éolien en mer", page: "energie-mer.html", couverture: "images/couvertures/energie-mer.webp", couleur: "#1C5A12" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
