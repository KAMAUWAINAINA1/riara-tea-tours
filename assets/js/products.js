/* =========================================================
   SHOP PRODUCTS — every product in the shop comes from this list.

   To ADD a product: copy one { ... } block, paste it at the end,
   give it a new unique "id" and change the text, price and photos.
   To change a PRICE: edit the number (KES, no commas).
   To hide a product for now: set available: false.
   Photos live in assets/img/.
   ========================================================= */
window.PRODUCTS = [
  {
    id: "black-tea-orthodox",
    available: true,
    name: "Black Tea – Orthodox",
    tagline: "Whole-leaf loose tea",
    price: 700,
    image: "assets/img/shop-orthodox-pouch.jpg",
    gallery: ["assets/img/shop-orthodox-leaves.jpg", "assets/img/shop-orthodox-pouch-2.jpg"],
    description:
      "Made the traditional orthodox way: whole leaves are rolled and oxidised rather than crushed. It brews a bright, smooth cup with a gentle malty finish. Great on its own, or with a splash of milk.",
    details: ["Loose leaf, resealable kraft pouch", "Grown and made at Riara, Limuru", "Brew 1 tsp per cup, 3–5 minutes"],
  },
  {
    id: "tea-bags",
    available: true,
    name: "Riara Tea Bags",
    tagline: "Everyday black tea",
    price: 600,
    image: "assets/img/shop-teabags.jpg",
    gallery: ["assets/img/shop-teabags-2.jpg"],
    description:
      "Our everyday Kenyan black tea in convenient bags. Strong, rich and quick to brew, it makes the perfect cup of chai.",
    details: ["Tea bags in a resealable pouch", "Grown at Riara, Limuru", "Brew 3–5 minutes; add milk and sugar to taste"],
  },
];
