/* Données produits Atlas Wear — provisoires, à remplacer par le vrai catalogue
   `images` : IDs de photos Unsplash (libres de droits, Unsplash License) utilisées
   comme placeholders réalistes en attendant les vraies photos de la marque.
   Un seul visuel par produit pour l'instant — ajouter d'autres IDs au tableau
   réactive automatiquement la galerie multi-vues sur la fiche produit. */

const PRODUCTS = [
  {
    id: "hoodie-oversize-atlas",
    name: "Hoodie Oversize Atlas",
    category: "homme",
    price: 450,
    sizes: ["S", "M", "L", "XL"],
    colorTag: "black",
    images: ["1680292783974-a9a336c10366"],
    shortDescription: "Hoodie oversize en molleton épais, broderie Atlas sur la poitrine.",
    description: "Un hoodie oversize taillé dans un molleton épais 400g, pensé pour les journées fraîches de Casablanca. La broderie \"Atlas\" discrète sur la poitrine et le grand kangourou apportent une touche premium sans excès. Coupe ample, manches tombantes, capuche doublée.",
    isNew: true
  },
  {
    id: "tshirt-zellige",
    name: "T-shirt Brodé Zellige",
    category: "homme",
    price: 220,
    sizes: ["S", "M", "L", "XL"],
    colorTag: "sable",
    images: ["1581655353564-df123a1eb820"],
    shortDescription: "T-shirt en coton lourd avec motif zellige brodé sur la manche.",
    description: "T-shirt en coton peigné 220g/m², coupe droite et col renforcé. Le motif zellige brodé sur la manche gauche rend hommage à l'artisanat marocain, dans un esprit résolument streetwear. Un basique qui ne l'est pas tout à fait.",
    isNew: true
  },
  {
    id: "crop-top-casablanca",
    name: "Crop Top Casablanca",
    category: "femme",
    price: 190,
    sizes: ["XS", "S", "M", "L"],
    colorTag: "black",
    images: ["1765560215006-3f55535b83ee"],
    shortDescription: "Crop top côtelé, coupe ajustée, logo doré imprimé.",
    description: "Crop top en maille côtelée extensible, coupe ajustée flatteuse. Le logo Atlas Wear est imprimé en doré sur la poitrine. Se porte aussi bien avec un jean taille haute qu'un legging pour un look streetwear décontracté.",
    isNew: false
  },
  {
    id: "jogging-sable",
    name: "Ensemble Jogging Sable",
    category: "femme",
    price: 480,
    sizes: ["XS", "S", "M", "L", "XL"],
    colorTag: "sable",
    images: ["1780396508935-94e234affc92"],
    shortDescription: "Ensemble jogging (sweat + pantalon) coloris sable, coupe oversize.",
    description: "Ensemble deux pièces — sweat col rond et pantalon jogging — dans un coloris sable signature. Matière molletonnée douce, coupe oversize assumée, poches zippées sur le pantalon. Vendu en set, taille identique pour les deux pièces.",
    isNew: false
  },
  {
    id: "veste-coach-atlas",
    name: "Veste Coach Atlas",
    category: "homme",
    price: 650,
    sizes: ["S", "M", "L", "XL"],
    colorTag: "black",
    images: ["1624548140129-74786c5f1279"],
    shortDescription: "Veste coach légère, doublure filet, patch brodé doré.",
    description: "Veste coach en nylon déperlant, doublure filet pour les journées mi-saison. Fermeture zip, poches à rabat, patch brodé doré \"Atlas Wear\" dans le dos. La pièce statement de la collection, pensée pour durer plusieurs saisons.",
    isNew: true
  },
  {
    id: "robe-oversize-medina",
    name: "Robe Oversize Médina",
    category: "femme",
    price: 380,
    sizes: ["XS", "S", "M", "L"],
    colorTag: "sable",
    images: ["1621198059871-0d5f9b449233"],
    shortDescription: "Robe sweat oversize, poches kangourou, finitions côtelées.",
    description: "Robe sweat oversize en molleton doux, poches kangourou, finitions côtelées aux poignets et au bas. Se porte seule en été ou superposée avec un pantalon large en hiver. Un vestiaire streetwear pensé pour le quotidien.",
    isNew: false
  },
  {
    id: "casquette-atlas",
    name: "Casquette Brodée Atlas",
    category: "accessoires",
    price: 150,
    sizes: ["Taille unique"],
    colorTag: "black",
    images: ["1560774358-d727658f457c"],
    shortDescription: "Casquette 6 panneaux, broderie Atlas, sangle ajustable.",
    description: "Casquette 6 panneaux en coton épais, broderie \"Atlas\" 3D sur le devant, œillets métalliques et sangle ajustable dorée à l'arrière. L'accessoire qui complète n'importe quelle tenue de la collection.",
    isNew: false
  },
  {
    id: "sac-banane-wax",
    name: "Sac Banane Wax",
    category: "accessoires",
    price: 210,
    sizes: ["Taille unique"],
    colorTag: "sable",
    images: ["1565151448704-33d96c51fff0"],
    shortDescription: "Sac banane en toile robuste avec empiècement wax.",
    description: "Sac banane en toile résistante, empiècement en tissu wax pour une touche colorée et artisanale. Compartiment principal zippé et poche avant rapide, sangle réglable. Pratique pour la ville comme pour sortir léger le week-end.",
    isNew: true
  }
];
