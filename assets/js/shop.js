/* Builds the shop from products.js and handles the order basket.
   Orders are sent by WhatsApp or email (no online payment yet).
   You shouldn't need to edit this file to change products or prices. */
(function () {
  const S = window.SITE;
  const products = (window.PRODUCTS || []).filter((p) => p.available !== false);
  const ksh = (n) => "KES " + n.toLocaleString("en-KE");

  // Basket: { productId: quantity }. Remembered in this browser only.
  let basket = {};
  try { basket = JSON.parse(localStorage.getItem("riara-basket") || "{}"); } catch (e) {}
  const save = () => { try { localStorage.setItem("riara-basket", JSON.stringify(basket)); } catch (e) {} };

  const grid = document.getElementById("products");
  if (grid) {
    grid.innerHTML = products.map((p) => `
      <article class="product" id="${p.id}">
        <div class="product-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          ${p.gallery && p.gallery.length ? `<div class="product-thumbs">${[p.image, ...p.gallery].map((g, i) => `<button type="button" data-img="${g}" aria-label="Photo ${i + 1}"${i === 0 ? ' aria-current="true"' : ""}><img src="${g}" alt="" loading="lazy"></button>`).join("")}</div>` : ""}
        </div>
        <div class="product-body">
          <span class="eyebrow">${p.tagline}</span>
          <h2>${p.name}</h2>
          <p class="product-price">${ksh(p.price)}</p>
          <p>${p.description}</p>
          <ul class="checks">${p.details.map((d) => `<li>${d}</li>`).join("")}</ul>
          <div class="qty-row">
            <div class="qty" data-id="${p.id}">
              <button type="button" data-step="-1" aria-label="Fewer">−</button>
              <output aria-live="polite">${basket[p.id] || 0}</output>
              <button type="button" data-step="1" aria-label="More">+</button>
            </div>
            <button class="btn" type="button" data-add="${p.id}">Add to order</button>
          </div>
        </div>
      </article>`).join("");

    grid.addEventListener("click", (e) => {
      const thumb = e.target.closest("[data-img]");
      if (thumb) {
        const card = thumb.closest(".product");
        card.querySelector(".product-media > img").src = thumb.dataset.img;
        card.querySelectorAll("[data-img]").forEach((b) => b.removeAttribute("aria-current"));
        thumb.setAttribute("aria-current", "true");
        return;
      }
      const step = e.target.closest("[data-step]");
      if (step) {
        const id = step.closest(".qty").dataset.id;
        basket[id] = Math.max(0, (basket[id] || 0) + Number(step.dataset.step));
        if (!basket[id]) delete basket[id];
        update();
        return;
      }
      const add = e.target.closest("[data-add]");
      if (add) {
        const id = add.dataset.add;
        if (!basket[id]) basket[id] = 1;
        update();
        document.getElementById("order").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  const summary = document.getElementById("order-lines");
  const totalEl = document.getElementById("order-total");
  const panel = document.getElementById("order");
  const bar = document.getElementById("order-bar");

  function lines() {
    return products.filter((p) => basket[p.id]).map((p) => ({ p, q: basket[p.id], sub: p.price * basket[p.id] }));
  }

  function update() {
    save();
    document.querySelectorAll(".qty").forEach((q) => (q.querySelector("output").textContent = basket[q.dataset.id] || 0));
    const L = lines();
    const total = L.reduce((a, l) => a + l.sub, 0);
    const count = L.reduce((a, l) => a + l.q, 0);
    if (summary) {
      summary.innerHTML = L.length
        ? L.map((l) => `<li><span>${l.q} × ${l.p.name}</span><span>${ksh(l.sub)}</span></li>`).join("")
        : `<li class="empty-line">Your order is empty. Choose a tea above.</li>`;
      totalEl.textContent = ksh(total);
      panel.classList.toggle("has-items", L.length > 0);
    }
    if (bar) {
      bar.hidden = count === 0;
      bar.querySelector("[data-count]").textContent = `${count} item${count === 1 ? "" : "s"} · ${ksh(total)}`;
    }
  }

  const form = document.getElementById("order-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const L = lines();
      if (!L.length) { summary.scrollIntoView({ behavior: "smooth", block: "center" }); return; }
      if (!form.reportValidity()) return;
      const d = new FormData(form);
      const total = L.reduce((a, l) => a + l.sub, 0);
      const text = [
        "Hello Riara Tea, I'd like to order:",
        "",
        ...L.map((l) => `• ${l.q} × ${l.p.name} (${ksh(l.p.price)} each) = ${ksh(l.sub)}`),
        `Total: ${ksh(total)}`,
        "",
        `Name: ${d.get("name")}`,
        `Phone: ${d.get("phone")}`,
        `Delivery: ${d.get("delivery")}`,
        d.get("address") ? `Location: ${d.get("address")}` : null,
        d.get("notes") ? `Notes: ${d.get("notes")}` : null,
      ].filter((x) => x !== null).join("\n");
      if (e.submitter && e.submitter.value === "email") {
        location.href = `mailto:${S.email}?subject=${encodeURIComponent("Tea order – " + d.get("name"))}&body=${encodeURIComponent(text)}`;
      } else {
        window.open(window.waLink(text), "_blank", "noopener");
      }
    });
  }

  update();
})();
