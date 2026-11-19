/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Guyane
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

AME.ajouterLivres("guyane", [
  { titre: "La Guyane à la loupe", sousTitre: "L'Amazonie française en chiffres, en cartes et en histoire", page: "guyane-info.html", couverture: "images/couvertures/guyane-info.webp?v=20261119c", couleur: "#2771AA" },
  { titre: "Recettes salées & sucrées", sousTitre: "Saveurs créoles et amazoniennes de Guyane", page: "recettes-guyane.html", couverture: "images/couvertures/recettes-guyane.webp?v=20261119c", couleur: "#2877B1" },
  { titre: "Les peuples amérindiens", sousTitre: "Kali'na, Lokono, Palikur, Wayana, Wayampi et Teko", page: "peuples-amerindiens.html", couverture: "images/couvertures/peuples-amerindiens.webp?v=20261119c", couleur: "#2372A3" },
  { titre: "Les débuts de la colonisation", sousTitre: "De Cayenne (1643) à l'expédition de Kourou (1763)", page: "debuts-colonisation.html", couverture: "images/couvertures/debuts-colonisation.webp?v=20261119c", couleur: "#2F7FB9" },
  { titre: "Esclavage, marronnage et abolition", sousTitre: "Les Bushinengés et la liberté de 1848", page: "esclavage-marronnage.html", couverture: "images/couvertures/esclavage-marronnage.webp?v=20261119c", couleur: "#2675AE" },
  { titre: "La ruée vers l'or (1855)", sousTitre: "Orpailleurs, placers et pays contesté", page: "ruee-or.html", couverture: "images/couvertures/ruee-or.webp?v=20261119c", couleur: "#2672AB" },
  { titre: "Le bagne de Guyane (1852-1953)", sousTitre: "Saint-Laurent-du-Maroni et les îles du Salut", page: "bagne.html", couverture: "images/couvertures/bagne.webp?v=20261119c", couleur: "#2670AA" },
  { titre: "Le XXᵉ siècle en Guyane", sousTitre: "De Félix Éboué à la départementalisation", page: "xxe-siecle.html", couverture: "images/couvertures/xxe-siecle.webp?v=20261119c", couleur: "#2C7BB5" },
  { titre: "Le Centre spatial guyanais", sousTitre: "De Véronique (1968) à Ariane", page: "centre-spatial.html", couverture: "images/couvertures/centre-spatial.webp?v=20261119c", couleur: "#2872AF" },
  { titre: "La forêt amazonienne et le Parc amazonien", sousTitre: "Le plus grand parc national de France", page: "foret-parc.html", couverture: "images/couvertures/foret-parc.webp?v=20261119c", couleur: "#2D7DB8" },
  { titre: "Les fleuves Maroni et Oyapock", sousTitre: "La vie au fil de l'eau", page: "fleuves.html", couverture: "images/couvertures/fleuves.webp?v=20261119c", couleur: "#2E75A9" },
  { titre: "Carnaval et peuples de Guyane", sousTitre: "Touloulous, créoles, Hmong et mille cultures", page: "carnaval-peuples.html", couverture: "images/couvertures/carnaval-peuples.webp?v=20261119c", couleur: "#307EB9" },
]);
