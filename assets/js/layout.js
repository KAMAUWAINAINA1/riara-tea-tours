/* =========================================================
   SHARED LAYOUT — the header, footer and WhatsApp button are
   built here once and added to every page. To change the menu,
   edit NAV below.
   ========================================================= */
(function () {
  const S = window.SITE;
  const NAV = [
    ["index.html", "Home"],
    ["tours.html", "Tours"],
    ["about.html", "About"],
    ["faq.html", "FAQ"],
    ["contact.html", "Contact"],
  ];

  const here = location.pathname.split("/").pop() || "index.html";
  const isActive = (href) => href === here || (here === "tour.html" && href === "tours.html");
  const tel = "tel:" + S.phone.replace(/\s/g, "");
  const wa = (text) => `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(text || "Hello Riara Tea Tours, I'd like to ask about a tour.")}`;
  window.waLink = wa;

  const icons = {
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.6a1 1 0 0 1-.25 1z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.25-.12-1.47-.72-1.7-.8s-.39-.13-.56.12-.64.8-.78.97-.29.19-.54.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34a.45.45 0 0 0-.02-.43c-.06-.12-.56-1.35-.77-1.85s-.4-.42-.56-.43h-.48a.92.92 0 0 0-.66.31 2.8 2.8 0 0 0-.87 2.07 4.85 4.85 0 0 0 1 2.58 11.1 11.1 0 0 0 4.27 3.77c1.58.68 2.2.74 3 .62a2.53 2.53 0 0 0 1.66-1.17 2.06 2.06 0 0 0 .14-1.17c-.06-.1-.22-.16-.47-.29z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM21.9 7.9c-.1-1.6-.4-3-1.6-4.2S17.7 2.2 16.1 2.1C14.5 2 9.5 2 7.9 2.1 6.3 2.2 4.9 2.5 3.7 3.7S2.2 6.3 2.1 7.9C2 9.5 2 14.5 2.1 16.1c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.6.1 8.2 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.6 0-8.2zM19.8 18a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.4.4-5.9.4s-4.6.1-5.9-.4A3.3 3.3 0 0 1 4.2 18c-.5-1.3-.4-4.4-.4-5.9s-.1-4.6.4-5.9A3.3 3.3 0 0 1 6.1 4.2c1.3-.5 4.4-.4 5.9-.4s4.6-.1 5.9.4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.4.4 5.9s.1 4.6-.4 5.9z"/></svg>',
    yt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.75 15V9l5.75 3z"/></svg>',
  };
  window.ICONS = icons;

  const header = `
    ${S.announcement ? `<div class="announce">${S.announcement}</div>` : ""}
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" href="index.html" aria-label="${S.name} home"><img src="assets/img/logo.png" alt="${S.name}" width="135" height="61"></a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu"><span></span><span></span><span></span></button>
        <nav id="site-nav" class="site-nav">
          ${NAV.map(([h, t]) => `<a href="${h}"${isActive(h) ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
          <a class="btn btn-sm" href="contact.html#book">Book a tour</a>
        </nav>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <img class="footer-logo" src="assets/img/logo.png" alt="${S.name}" width="135" height="61">
          <p>Tea tours, factory visits and retreats on a family-run tea farm in Limuru, about 45 minutes from Nairobi.</p>
          <div class="social">
            ${S.social.facebook ? `<a href="${S.social.facebook}" aria-label="Facebook" target="_blank" rel="noopener">${icons.fb}</a>` : ""}
            ${S.social.instagram ? `<a href="${S.social.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${icons.ig}</a>` : ""}
            ${S.social.youtube ? `<a href="${S.social.youtube}" aria-label="YouTube" target="_blank" rel="noopener">${icons.yt}</a>` : ""}
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>${NAV.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}<li><a href="policies.html">Policies</a></li></ul>
        </div>
        <div>
          <h3>Tours</h3>
          <ul>${(window.TOURS || []).map((t) => `<li><a href="tour.html?id=${t.id}">${t.title}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h3>Visit us</h3>
          <ul class="contact-list">
            <li>${icons.pin}<a href="${S.mapUrl}" target="_blank" rel="noopener">${S.address}<br><small>${S.plusCode}</small></a></li>
            <li>${icons.phone}<a href="${tel}">${S.phone}</a></li>
            <li>${icons.mail}<a href="mailto:${S.email}">${S.email}</a></li>
          </ul>
          <p class="hours">${S.hours.map(([d, h]) => `${d}: ${h}`).join("<br>")}</p>
        </div>
      </div>
      <div class="wrap footer-bottom">
        <span>© ${new Date().getFullYear()} ${S.name}. All rights reserved.</span>
        <span><a href="policies.html#privacy">Privacy</a> · <a href="policies.html#terms">Terms</a> · <a href="policies.html#booking">Booking policy</a></span>
      </div>
    </footer>
    <a class="wa-float" href="${wa()}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icons.wa}</a>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  // Fill any element marked data-site="phone|email|address|..." with config values
  document.querySelectorAll("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (key === "phone") { el.textContent = S.phone; if (el.tagName === "A") el.href = tel; }
    else if (key === "email") { el.textContent = S.email; if (el.tagName === "A") el.href = "mailto:" + S.email; }
    else if (key === "whatsapp") { el.href = wa(); }
    else if (S[key] != null) el.textContent = S[key];
  });

  /* Booking / enquiry forms: any <form data-enquiry> sends its fields as a
     WhatsApp message (or email if the visitor picks that button).
     When email hosting is set up, this can be swapped for a form service. */
  document.querySelectorAll("form[data-enquiry]").forEach((form) => {
    const tourSelect = form.querySelector("[name=tour]");
    if (tourSelect && tourSelect.tagName === "SELECT") {
      tourSelect.insertAdjacentHTML("beforeend", (window.TOURS || []).map((t) => `<option>${t.title}</option>`).join("") + "<option>Custom / not sure yet</option>");
      const pre = new URLSearchParams(location.search).get("tour");
      const match = (window.TOURS || []).find((t) => t.id === pre);
      if (match) tourSelect.value = match.title;
    }
  });

  // Listen at document level so forms added later (e.g. on tour pages) work too.
  document.addEventListener("submit", (e) => {
    const form = e.target.closest("form[data-enquiry]");
    if (!form) return;
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = ["Hello Riara Tea Tours, I'd like to make a booking enquiry:", ""];
    for (const [k, v] of data.entries()) if (v) lines.push(`${form.querySelector(`[name="${k}"]`).dataset.label || k}: ${v}`);
    const text = lines.join("\n");
    const via = e.submitter && e.submitter.value === "email" ? "email" : "whatsapp";
    if (via === "email") location.href = `mailto:${S.email}?subject=${encodeURIComponent("Tour enquiry – " + (data.get("tour") || "Riara"))}&body=${encodeURIComponent(text)}`;
    else window.open(wa(text), "_blank", "noopener");
  });
})();
