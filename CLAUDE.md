# Atlas Wear — Mémo projet

Site vitrine pour Atlas Wear, boutique de prêt-à-porter streetwear (touche marocaine), Casablanca. Pas d'e-commerce : les commandes se finalisent via WhatsApp.

## Décisions prises

**Structure** : pages HTML séparées (pas de SPA), un dossier unique.
```
atlas-wear/
├── index.html
├── collection.html    (à créer)
├── produit.html        (à créer)
├── apropos.html         (à créer)
├── contact.html         (à créer)
├── css/style.css
├── js/products.js       (données produits, source unique)
├── js/main.js           (helpers partagés + config du site)
└── images/              (vide — placeholders en CSS pour l'instant)
```

**Stack** : HTML/CSS/JS vanilla, aucune dépendance, aucun build. Un seul `css/style.css` partagé par toutes les pages.

**Couleurs** (variables CSS dans `:root`, voir `css/style.css`) :
- `--color-black: #111111` — fond principal foncé, texte, boutons primaires
- `--color-sable: #e9e0cf` / `--color-sable-light: #f4efe4` — fonds clairs, blocs placeholder
- `--color-gold: #c9a24b` / `--color-gold-light: #e0c17f` — accents, hover, badges
- `--color-white`, `--color-gray`, `--color-border` — neutres

**Typographie** : Google Fonts `Poppins` (700/600, titres et boutons, uppercase + letter-spacing) + `Inter` (400/500/600, texte courant). Chargées via `<link>` Google Fonts dans le `<head>` de chaque page.

**Ton visuel** : épuré, premium, beaucoup d'espace blanc, gros aplats de couleur, pas d'ombres lourdes ni de coins très arrondis (`--radius: 2px`).

**Images produits** : chaque produit a un champ `images` (tableau d'IDs de photos Unsplash) dans `js/products.js`, un seul visuel par produit pour l'instant. Rendues via `productImgHTML()` / `unsplashUrl()` (`js/main.js`), hotlinkées directement depuis `images.unsplash.com` (licence Unsplash, gratuite, pas d'attribution requise) — **pas de vraies photos de la marque**. Chaque photo a été choisie et vérifiée visuellement une par une (beaucoup de résultats de recherche Unsplash renvoient du contenu inattendu : logos de marques concurrentes, contenu inapproprié, sujet hors-sillet — ne pas faire confiance à un extrait de description sans avoir regardé l'image). À remplacer par les vraies photos produit avant mise en ligne : il suffit de swap le contenu du tableau `images` (le code n'a pas besoin de changer). Ajouter plusieurs IDs à un même produit réactive automatiquement la galerie multi-vues sur `produit.html` (actuellement masquée car un seul visuel par produit).

**Images non-produit** (hero, tuiles "à propos", bloc adresse sur `contact.html`) : toujours des blocs de couleur (`.placeholder-img`, tons `tone-black` / `tone-sable`) avec texte en overlay, générés par `placeholderImgHTML()` — non concernées par le remplacement Unsplash ci-dessus, à remplacer plus tard par les vraies photos de marque/boutique.

**Produits** : données centralisées dans `js/products.js` (tableau `PRODUCTS`), 8 produits provisoires (homme / femme / accessoires), prix en MAD. Réutilisé par la page d'accueil, `collection.html` et `produit.html` — ne pas dupliquer les données produit ailleurs.

**WhatsApp** : numéro placeholder `2126XXXXXXXX` dans `SITE_CONFIG.whatsappNumber` (`js/main.js`), format international sans `+`. Le message pré-rempli est généré par `whatsappOrderLink(productName)`. **À remplacer par le vrai numéro avant mise en ligne** — un seul endroit à modifier.

**Contact / réseaux** : placeholders réalistes dans `SITE_CONFIG` (`js/main.js`) et dupliqués en dur dans le footer de chaque page (adresse, horaires) — adresse "12 Rue Ibnou Khaldoun, Gauthier, Casablanca", Instagram/Facebook `atlaswear.ma`. À ajuster avec les vraies infos.

**Textes** : tous les textes (accueil, descriptions produits, à propos) sont provisoires, écrits en français, ton jeune/urbain mais correct. Le client les ajustera.

## Conventions de code

- Indentation 2 espaces, pas de point-virgule oublié en JS.
- Chaque page HTML inclut, dans cet ordre : `css/style.css`, puis `js/products.js`, puis `js/main.js`, puis un `<script>` inline en bas de page pour la logique spécifique à la page (ex. rendu des filtres sur `collection.html`).
- Classes CSS en kebab-case, réutilisables entre pages (`.btn`, `.product-card`, `.placeholder-img`, `.section`, etc.) — éviter de créer des styles ad hoc par page, préférer étendre `style.css`.
- `main.js` = uniquement du code partagé par toutes les pages (nav mobile, lien actif, WhatsApp, helpers de formatage). La logique propre à une page reste dans le `<script>` inline de cette page.
- Mobile-first dans l'esprit (le site est pensé pour être vérifié d'abord en vue mobile), breakpoints CSS à 1024px / 860px / 640px.

## État d'avancement

- [x] Structure du projet + design system (couleurs, typo, composants de base)
- [x] Page d'accueil (`index.html`)
- [x] Page Collection avec filtres (catégorie, prix) — `collection.html`
- [x] Page Produit (galerie, tailles, bouton WhatsApp) — `produit.html`
- [x] Page À propos — `apropos.html`
- [x] Page Contact (formulaire + carte/adresse + réseaux) — `contact.html`

Les 5 pages du brief sont terminées.

## Notes techniques

- **Filtres Collection** : deux groupes de `.filter-pill` (catégorie, prix), sélection unique par groupe, filtrage combiné (AND) en JS vanilla, pas de rechargement de page. Le prix utilise des tranches fixes (`0-250`, `250-450`, `450-99999`) plutôt qu'un slider, plus simple à fiabiliser sans dépendance.
- **Header mobile** : le bouton secondaire du header (`.header-actions .btn`) est masqué sous 860px pour éviter le chevauchement avec le logo sur petits écrans — seul le menu hamburger reste visible.
- **Page Produit** (`produit.html`) : le produit est résolu via `?id=` (paramètre lu dans `PRODUCTS`) ; si l'id ne correspond à rien, affichage d'un état "produit introuvable" avec lien retour catalogue. Galerie = 4 vues placeholder (`Vue avant`, `Vue arrière`, `Détail matière`, `Porté`) cliquables, `.gallery-thumbs` en `flex-wrap: wrap` pour éviter tout débordement horizontal sur mobile. Le bouton "Commander via WhatsApp" est bloqué (avec message d'avertissement) tant qu'aucune taille n'est sélectionnée ; une fois choisie, elle est ajoutée au message WhatsApp pré-rempli via `whatsappOrderLink(name, size)` (`js/main.js`).
- **Page À propos** (`apropos.html`) : réutilise `.brand-block` (déjà utilisé en teaser sur l'accueil) deux fois, avec un modificateur `.reverse` (CSS `order`) pour alterner l'image et le texte sans dupliquer de markup. La section "Nos valeurs" réutilise directement les classes `.perks` / `.perks-grid` / `.perk` de l'accueil (pas de nouveau composant) — convention à garder : préférer réutiliser `.perks-grid` pour toute nouvelle grille de 3-4 items avec icône + titre + texte.
- **Page Contact** (`contact.html`) : pas de backend. Le formulaire construit un lien `mailto:` (destinataire = `SITE_CONFIG.email`) avec sujet/corps pré-remplis à partir des champs, puis affiche une note expliquant que le client email va s'ouvrir. **Si le client veut un vrai envoi silencieux** (sans ouvrir le client mail), il faudra brancher un service tiers (Formspree, EmailJS, etc.) ou un petit backend — poser la question avant de choisir, ça sort du HTML/CSS/JS pur. Pas de carte Google Maps embarquée (dépendance externe) : l'emplacement boutique reste un bloc placeholder texte, cohérent avec le reste du site.

## Lancer le site en local

Aucune installation nécessaire. Deux options :

1. **Ouvrir directement le fichier** : double-clique sur `index.html` (ou ouvre-le depuis ton navigateur). Suffisant pour vérifier le rendu rapidement.
2. **Recommandé — via un petit serveur local** (évite d'éventuels soucis de chemins relatifs) :
   ```bash
   cd atlas-wear
   python3 -m http.server 8000
   ```
   Puis ouvre `http://localhost:8000` dans le navigateur.
