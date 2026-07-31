/* Atlas Wear — script principal (config, helpers réutilisés sur toutes les pages) */

const SITE_CONFIG = {
  whatsappNumber: "2126XXXXXXXX", // placeholder — remplacer par le vrai numéro (format international sans +)
  email: "contact@atlaswear.ma",
  instagramUrl: "https://instagram.com/atlaswear.ma",
  facebookUrl: "https://facebook.com/atlaswear.ma",
  address: "12 Rue Ibnou Khaldoun, Quartier Gauthier, Casablanca",
  hours: [
    { days: "Lundi – Samedi", hours: "10h00 – 20h00" },
    { days: "Dimanche", hours: "14h00 – 19h00" }
  ]
};

function formatPrice(price) {
  return `${price.toLocaleString("fr-FR")} <span class="currency">MAD</span>`;
}

function whatsappOrderLink(productName, size) {
  const sizePart = size ? ` (taille ${size})` : "";
  const message = `Bonjour Atlas Wear, je suis intéressé(e) par le produit : ${productName}${sizePart}. Est-il disponible ?`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function placeholderImgHTML(label, { tone = "sable", extraClass = "" } = {}) {
  return `<div class="placeholder-img tone-${tone} ${extraClass}"><span>${label}</span></div>`;
}

// Photos Unsplash (libres de droits) utilisées comme placeholders produit —
// voir js/products.js pour les IDs et CLAUDE.md pour le détail de la démarche.
function unsplashUrl(photoId, { w = 800, h = 1000 } = {}) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

function productImgHTML(product, { w = 800, h = 1000, extraClass = "" } = {}) {
  const photoId = product.images && product.images[0];
  if (!photoId) {
    const tone = product.colorTag === "black" ? "black" : "sable";
    return placeholderImgHTML(product.name, { tone, extraClass });
  }
  return `<img class="product-photo ${extraClass}" src="${unsplashUrl(photoId, { w, h })}" alt="${product.name}" loading="lazy">`;
}

function productCardHTML(product) {
  return `
    <a class="product-card" href="produit.html?id=${product.id}">
      <div class="product-card-media">
        ${product.isNew ? '<span class="badge">Nouveau</span>' : ""}
        ${productImgHTML(product, { w: 600, h: 800 })}
      </div>
      <div class="product-card-category">${product.category}</div>
      <div class="product-card-name">${product.name}</div>
      <div class="product-card-price">${formatPrice(product.price)}</div>
    </a>
  `;
}

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

function markActiveNavLink() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
}

function initWhatsappFloat() {
  const float = document.querySelector(".whatsapp-float");
  if (!float) return;
  float.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Bonjour Atlas Wear, j'ai une question.")}`;
}

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  markActiveNavLink();
  initWhatsappFloat();
});
