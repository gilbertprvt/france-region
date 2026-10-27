/* ══════════════════════════════════════════════════════════════
   regions.js — LA LISTE DES RÉGIONS (dossier « commun »)

   Les LIVRES ne sont pas ici : chaque région a son propre fichier
   regions/<région>/liste-livres.js

   ▶ AFFICHER L'OUTRE-MER sur la carte : passer afficherOutreMer
     à true. Les 5 bibliothèques d'outre-mer sont déjà prêtes.
   ══════════════════════════════════════════════════════════════ */

window.AME = {

  afficherOutreMer: false,

  regions: [
    /* ─── Métropole ─── */
    { id: "auvergne-rhone-alpes",        code: "84", nom: "Auvergne-Rhône-Alpes" },
    { id: "bourgogne-franche-comte",     code: "27", nom: "Bourgogne-Franche-Comté" },
    { id: "bretagne",                    code: "53", nom: "Bretagne" },
    { id: "centre-val-de-loire",         code: "24", nom: "Centre-Val de Loire" },
    { id: "corse",                       code: "94", nom: "Corse" },
    { id: "grand-est",                   code: "44", nom: "Grand Est" },
    { id: "hauts-de-france",             code: "32", nom: "Hauts-de-France" },
    { id: "ile-de-france",               code: "11", nom: "Île-de-France" },
    { id: "normandie",                   code: "28", nom: "Normandie" },
    { id: "nouvelle-aquitaine",          code: "75", nom: "Nouvelle-Aquitaine" },
    { id: "occitanie",                   code: "76", nom: "Occitanie" },
    { id: "pays-de-la-loire",            code: "52", nom: "Pays de la Loire" },
    { id: "provence-alpes-cote-d-azur",  code: "93", nom: "Provence-Alpes-Côte d'Azur" },


    /* ─── Outre-mer (visibles sur la carte quand afficherOutreMer vaut true) ─── */
    { id: "guadeloupe",                  code: "01", nom: "Guadeloupe", outreMer: true },
    { id: "martinique",                  code: "02", nom: "Martinique", outreMer: true },
    { id: "guyane",                      code: "03", nom: "Guyane", outreMer: true },
    { id: "la-reunion",                  code: "04", nom: "La Réunion", outreMer: true },
    { id: "mayotte",                     code: "06", nom: "Mayotte", outreMer: true }
  ],

  /* Les fichiers liste-livres.js de chaque région viennent se ranger ici */
  livres: {},
  ajouterLivres: function (region, liste) { this.livres[region] = liste || []; }
};
