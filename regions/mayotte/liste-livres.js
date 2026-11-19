/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Mayotte
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

AME.ajouterLivres("mayotte", [
  { titre: "Mayotte à la loupe", sousTitre: "L'île aux parfums en chiffres, en cartes et en histoire", page: "mayotte-info.html", couverture: "images/couvertures/mayotte-info.webp?v=20261119m", couleur: "#1E6014" },
  { titre: "Recettes salées & sucrées", sousTitre: "Saveurs de Mayotte, entre Afrique et océan Indien", page: "recettes-mayotte.html", couverture: "images/couvertures/recettes-mayotte.webp?v=20261119m", couleur: "#1E6412" },
  { titre: "Les premiers habitants et les sultanats", sousTitre: "Des premiers villages aux sultans de Mayotte", page: "premiers-habitants.html", couverture: "images/couvertures/premiers-habitants.webp?v=20261119m", couleur: "#1D6113" },
  { titre: "Le temps des sultans batailleurs", sousTitre: "Mayotte entre Anjouan, Mohéli et Madagascar", page: "sultans-batailleurs.html", couverture: "images/couvertures/sultans-batailleurs.webp?v=20261119m", couleur: "#1D6313" },
  { titre: "1841 : Mayotte devient française", sousTitre: "Le sultan Andriantsoly et le commandant Passot", page: "mayotte-1841.html", couverture: "images/couvertures/mayotte-1841.webp?v=20261119m", couleur: "#1B6012" },
  { titre: "Le sucre, l'esclavage et l'abolition (1846)", sousTitre: "Les plantations de Mayotte au XIXᵉ siècle", page: "sucre-abolition.html", couverture: "images/couvertures/sucre-abolition.webp?v=20261119m", couleur: "#1D6413" },
  { titre: "L'ylang-ylang et l'île aux parfums", sousTitre: "Vanille, cannelle et plantes à parfum", page: "ylang-ylang.html", couverture: "images/couvertures/ylang-ylang.webp?v=20261119m", couleur: "#206515" },
  { titre: "Mayotte et les Comores au XXᵉ siècle", sousTitre: "De Dzaoudzi capitale à l'indépendance des Comores", page: "comores-xxe.html", couverture: "images/couvertures/comores-xxe.webp?v=20261119m", couleur: "#1C6012" },
  { titre: "Mayotte, 101ᵉ département", sousTitre: "Les référendums et le choix de la France (1974-2011)", page: "departement-101.html", couverture: "images/couvertures/departement-101.webp?v=20261119n", couleur: "#1E6416" },
  { titre: "Le lagon de Mayotte", sousTitre: "L'un des plus grands lagons fermés du monde", page: "lagon.html", couverture: "images/couvertures/lagon.webp?v=20261119m", couleur: "#1E6514" },
  { titre: "Baobabs, makis et volcans", sousTitre: "La nature de Grande-Terre et de Petite-Terre", page: "nature.html", couverture: "images/couvertures/nature.webp?v=20261119n", couleur: "#1E6215" },
  { titre: "Traditions et culture mahoraises", sousTitre: "Shimaoré, debaa, msindzano et grand mariage", page: "traditions.html", couverture: "images/couvertures/traditions.webp?v=20261119m", couleur: "#216615" },
]);
