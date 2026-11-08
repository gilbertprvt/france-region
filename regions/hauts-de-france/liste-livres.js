/* ══════════════════════════════════════════════════════════════
   LES LIVRES DE LA BIBLIOTHÈQUE — Hauts-de-France
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

AME.ajouterLivres("hauts-de-france", [
  { titre: "Les Hauts-de-France à la loupe", sousTitre: "La région en chiffres, en cartes et en images", page: "hauts-de-france-info.html", couverture: "images/couvertures/hauts-de-france-info.webp", couleur: "#2A5C93" },
  { titre: "Recettes salées & sucrées", sousTitre: "60 recettes des Hauts-de-France, avec leurs boissons", page: "recettes-hauts-de-france.html", couverture: "images/couvertures/recettes-hauts-de-france.webp", couleur: "#2A5C93" },
  { titre: "La baie de Somme et la côte d'Opale", sousTitre: "Falaises, dunes, phoques et ports", page: "baie-somme-cote-opale.html", couverture: "images/couvertures/baie-somme.webp", couleur: "#2A5C93" },
  { titre: "Les beffrois", sousTitre: "Tours de la liberté des villes du Nord", page: "beffrois.html", couverture: "images/couvertures/beffrois.webp", couleur: "#2A5C93" },
  { titre: "Le carnaval de Dunkerque", sousTitre: "Bandes, chahut, rigodon et harengs", page: "carnaval-dunkerque.html", couverture: "images/couvertures/carnaval.webp", couleur: "#2A5C93" },
  { titre: "Le Chemin des Dames", sousTitre: "L'offensive de 1917 et les mutineries", page: "chemin-des-dames.html", couverture: "images/couvertures/chemin-des-dames.webp", couleur: "#2A5C93" },
  { titre: "La dentelle de Calais et Caudry", sousTitre: "Des métiers Leavers à la haute couture", page: "dentelle-calais-caudry.html", couverture: "images/couvertures/dentelle.webp", couleur: "#2A5C93" },
  { titre: "Les grands écrivains et artistes", sousTitre: "La Fontaine, Verne, Matisse, Claudel, Yourcenar", page: "ecrivains-artistes.html", couverture: "images/couvertures/ecrivains.webp", couleur: "#2A5C93" },
  { titre: "Les églises fortifiées de Thiérache", sousTitre: "Des églises-refuges en brique", page: "eglises-fortifiees-thierache.html", couverture: "images/couvertures/eglises-fortifiees.webp", couleur: "#2A5C93" },
  { titre: "La faïence de Desvres et de Saint-Amand", sousTitre: "L'art de la terre et de la couleur", page: "faience-desvres-saint-amand.html", couverture: "images/couvertures/faience.webp", couleur: "#2A5C93" },
  { titre: "Le Louvre-Lens", sousTitre: "Le Louvre au pays des mines", page: "louvre-lens.html", couverture: "images/couvertures/louvre-lens.webp", couleur: "#2A5C93" },
  { titre: "Le bassin minier inscrit à l'UNESCO", sousTitre: "Trois siècles de charbon", page: "bassin-minier-unesco.html", couverture: "images/couvertures/minier.webp", couleur: "#2A5C93" },
  { titre: "La pêche et les ports de Boulogne et Dunkerque", sousTitre: "Pêcheurs, corsaires et industrie", page: "peche-ports-boulogne-dunkerque.html", couverture: "images/couvertures/peche.webp", couleur: "#2A5C93" },
  { titre: "Les grands pôles industriels", sousTitre: "Automobile, batteries, trains, avions", page: "poles-industriels.html", couverture: "images/couvertures/pole-industriel.webp", couleur: "#2A5C93" },
  { titre: "Le tunnel sous la Manche", sousTitre: "Deux siècles de rêve, 50 km sous la mer", page: "tunnel-sous-la-manche.html", couverture: "images/couvertures/tunnel.webp", couleur: "#2A5C93" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
