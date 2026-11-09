/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Normandie
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

AME.ajouterLivres("normandie", [
  { titre: "La Normandie à la loupe", sousTitre: "La région en chiffres, en cartes et en images", page: "normandie-info.html", couverture: "images/couvertures/normandie-info.webp", couleur: "#E8C080" },
  { titre: "Recettes salées & sucrées", sousTitre: "60 recettes de Normandie, avec leurs boissons", page: "recettes-normandie.html", couverture: "images/couvertures/recettes-normandie.webp", couleur: "#E8C080" },
  { titre: "Les peuples gaulois et la conquête romaine", sousTitre: "Viridovix contre Sabinus, 56 av. J.-C.", page: "peuples-gaulois.html", couverture: "images/couvertures/gaulois.webp", couleur: "#E8C080" },
  { titre: "La Normandie gallo-romaine", sousTitre: "Rotomagus, Juliobona et cinq siècles romains", page: "normandie-gallo-romaine.html", couverture: "images/couvertures/gallo-romaine.webp", couleur: "#E8C080" },
  { titre: "L'âge d'or des abbayes", sousTitre: "Saint-Wandrille et Jumièges au VIIe siècle", page: "abbayes.html", couverture: "images/couvertures/abbayes.webp", couleur: "#E8C080" },
  { titre: "Les raids vikings", sousTitre: "De Rouen en flammes à Rollon (841-911)", page: "raids-vikings.html", couverture: "images/couvertures/vikings.webp", couleur: "#E8C080" },
  { titre: "Le traité de Saint-Clair-sur-Epte", sousTitre: "Charles le Simple, Rollon et la naissance de la Normandie", page: "traite-saint-clair-sur-epte.html", couverture: "images/couvertures/saint-clair-sur-epte.webp", couleur: "#E8C080" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
