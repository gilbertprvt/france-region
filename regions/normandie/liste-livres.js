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
  { titre: "Guillaume le Conquérant et la bataille d'Hastings", sousTitre: "De Falaise à Westminster (1066)", page: "hastings.html", couverture: "images/couvertures/hastings-2.webp", couleur: "#E8C080" },
  { titre: "Le rattachement à la France (1204)", sousTitre: "Philippe Auguste et Château-Gaillard", page: "rattachement-1204.html", couverture: "images/couvertures/rattachement-1204-2.webp", couleur: "#E8C080" },
  { titre: "La guerre de Cent Ans", sousTitre: "La Normandie anglaise et le procès de Jeanne d'Arc", page: "guerre-cent-ans.html", couverture: "images/couvertures/guerre-cent-ans-2.webp", couleur: "#E8C080" },
  { titre: "La bataille de Formigny (1450)", sousTitre: "La victoire qui libère la Normandie", page: "formigny.html", couverture: "images/couvertures/formigny-2.webp", couleur: "#E8C080" },
  { titre: "Les grands navigateurs", sousTitre: "De Dieppe et Honfleur au Nouveau Monde", page: "navigateurs.html", couverture: "images/couvertures/navigateurs-2.webp", couleur: "#E8C080" },
  { titre: "La révolte des Nu-pieds (1639)", sousTitre: "Le sel, les impôts et la colère normande", page: "nu-pieds.html", couverture: "images/couvertures/nu-pieds-2.webp", couleur: "#E8C080" },
  { titre: "Le Haras national du Pin", sousTitre: "Le Versailles du cheval", page: "haras-du-pin.html", couverture: "images/couvertures/haras-du-pin-2.webp", couleur: "#E8C080" },
  { titre: "Charlotte Corday", sousTitre: "Une Normande dans la Révolution (1768-1793)", page: "charlotte-corday.html", couverture: "images/couvertures/charlotte-corday-2.webp", couleur: "#E8C080" },
  { titre: "Le camembert normand", sousTitre: "Marie Harel, la légende et les fromages AOP", page: "camembert.html", couverture: "images/couvertures/camembert-2.webp", couleur: "#E8C080" },
  { titre: "Le lin", sousTitre: "Le trésor bleu de la Normandie", page: "lin.html", couverture: "images/couvertures/lin.webp", couleur: "#E8C080" },
  { titre: "Pomme, cidre et calvados", sousTitre: "Vergers, pressoirs et alambics", page: "pommes-cidre-calvados.html", couverture: "images/couvertures/pommes-cidre-calvados.webp", couleur: "#E8C080" },
  { titre: "La révolution industrielle textile", sousTitre: "Rouen, Elbeuf, Louviers et le coton", page: "textile.html", couverture: "images/couvertures/textile.webp", couleur: "#E8C080" },
  { titre: "L'invention des bains de mer", sousTitre: "De Dieppe à Deauville et Cabourg", page: "bains-de-mer.html", couverture: "images/couvertures/bains-de-mer.webp", couleur: "#E8C080" },
  { titre: "Flaubert et Maupassant", sousTitre: "Deux écrivains normands", page: "flaubert-maupassant.html", couverture: "images/couvertures/flaubert-maupassant.webp", couleur: "#E8C080" },
  { titre: "La naissance de l'impressionnisme", sousTitre: "Boudin, Monet et la lumière normande", page: "impressionnisme.html", couverture: "images/couvertures/impressionnisme.webp", couleur: "#E8C080" },
  { titre: "Sainte Thérèse de Lisieux", sousTitre: "1873-1897", page: "therese-lisieux.html", couverture: "images/couvertures/therese-lisieux.webp", couleur: "#E8C080" },
  { titre: "Les grands ports transatlantiques", sousTitre: "Le Havre, Cherbourg, le Titanic et le Normandie", page: "ports-transatlantiques.html", couverture: "images/couvertures/ports-transatlantiques.webp", couleur: "#E8C080" },
  /* Modèle à recopier :
  { titre: "Titre du livre",
    sousTitre: "sous-titre (facultatif)",
    page: "nom-du-livre.html",
    couverture: "images/couvertures/couverture-nom-du-livre.webp",
    theme: "Patrimoine" },
  */
]);
