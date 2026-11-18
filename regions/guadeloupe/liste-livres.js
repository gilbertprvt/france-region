/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Guadeloupe
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

AME.ajouterLivres("guadeloupe", [
  { titre: "La Guadeloupe à la loupe", sousTitre: "L'archipel en chiffres, en cartes et en histoire", page: "guadeloupe-info.html", couverture: "images/couvertures/guadeloupe-info.webp?v=20261118", couleur: "#892E19" },
  { titre: "Recettes salées & sucrées", sousTitre: "Saveurs créoles de la Guadeloupe", page: "recettes-guadeloupe.html", couverture: "images/couvertures/recettes-guadeloupe.webp?v=20261118", couleur: "#8B2E19" },
  { titre: "Les premiers habitants", sousTitre: "Des Arawaks aux Kalinagos", page: "premiers-habitants.html", couverture: "images/couvertures/premiers-habitants.webp?v=20261118", couleur: "#8E2D16" },
  { titre: "Christophe Colomb et Karukera (1493)", sousTitre: "L'arrivée des Européens", page: "colomb-karukera.html", couverture: "images/couvertures/colomb-karukera.webp?v=20261118", couleur: "#932E15" },
  { titre: "La colonisation française (1635)", sousTitre: "L'Olive, Duplessis et les premiers colons", page: "colonisation-1635.html", couverture: "images/couvertures/colonisation-1635.webp?v=20261118", couleur: "#8F2D15" },
  { titre: "Le sucre et l'esclavage", sousTitre: "Les habitations et le Code noir", page: "sucre-esclavage.html", couverture: "images/couvertures/sucre-esclavage.webp?v=20261118", couleur: "#942D13" },
  { titre: "Esclavage, résistance et abolition", sousTitre: "De Delgrès (1802) à Schœlcher (1848)", page: "esclavage-abolition.html", couverture: "images/couvertures/esclavage-abolition.webp?v=20261118", couleur: "#922E15" },
  { titre: "Les engagés indiens (1854)", sousTitre: "Un long voyage depuis l'Inde", page: "engages-indiens.html", couverture: "images/couvertures/engages-indiens.webp?v=20261118", couleur: "#952D11" },
  { titre: "Le XXᵉ siècle en Guadeloupe", sousTitre: "De la dissidence à la départementalisation", page: "xxe-siecle.html", couverture: "images/couvertures/xxe-siecle.webp?v=20261118", couleur: "#952E13" },
  { titre: "La Soufrière et le Parc national", sousTitre: "Le volcan et la forêt tropicale", page: "soufriere-parc.html", couverture: "images/couvertures/soufriere-parc.webp?v=20261118", couleur: "#972C13" },
  { titre: "Les îles et les richesses de l'archipel", sousTitre: "Marie-Galante, Les Saintes, La Désirade ; canne, rhum et banane", page: "iles-richesses.html", couverture: "images/couvertures/iles-richesses.webp?v=20261118", couleur: "#952F14" },
  { titre: "Gwoka, carnaval et créole", sousTitre: "Musique, fêtes et langue", page: "gwoka-carnaval.html", couverture: "images/couvertures/gwoka-carnaval.webp?v=20261118", couleur: "#993015" },
]);
