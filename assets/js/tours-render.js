/* Builds tour cards and the tour detail page from tours.js.
   You shouldn't need to edit this file to change tour content. */
(function () {
  const tours = window.TOURS || [];

  const card = (t) => `
    <a class="card" href="tour.html?id=${t.id}">
      <div class="card-img"><img src="${t.image}" alt="${t.title}" loading="lazy"><span class="tag">${t.category}</span></div>
      <div class="card-body">
        <h3>${t.title}</h3>
        <p>${t.summary}</p>
        <div class="card-meta"><span class="price">From <strong>${t.priceFrom}</strong></span><span class="more">View tour →</span></div>
      </div>
    </a>`;

  const featured = document.getElementById("featured-tours");
  if (featured) featured.innerHTML = tours.filter((t) => t.featured).slice(0, 6).map(card).join("");

  const all = document.getElementById("all-tours");
  if (all) all.innerHTML = tours.map(card).join("");

  const detail = document.getElementById("tour-detail");
  if (!detail) return;

  const id = new URLSearchParams(location.search).get("id");
  const t = tours.find((x) => x.id === id);
  if (!t) {
    detail.innerHTML = `<div class="wrap empty"><h1>Tour not found</h1><p>That tour may have moved.</p><a class="btn" href="tours.html">See all tours</a></div>`;
    return;
  }

  document.title = `${t.title} | Riara Tea Tours`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", t.summary);
  const facts = [["Duration", t.duration], ["Available", t.days || "By booking"], ["Times", t.times], ["Group size", t.groupSize], ["Languages", t.languages]]
    .filter(([, v]) => v).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  const list = (items) => `<ul class="checks">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

  detail.innerHTML = `
    <section class="page-banner" style="background-image:url('${t.image}')">
      <div class="wrap">
        <div class="crumbs"><a href="index.html">Home</a> / <a href="tours.html">Tours</a> / ${t.title}</div>
        <h1>${t.title}</h1>
        <p>${t.summary}</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap tour-layout">
        <div>
          <dl class="facts">${facts}</dl>
          <div class="tour-content">
            <h2>About this tour</h2>
            <p>${t.intro}</p>
            ${t.itinerary ? `<h2>The day</h2><ol class="timeline">${t.itinerary.map(([time, what]) => `<li>${time ? `<strong>${time}</strong>` : ""}<span>${what}</span></li>`).join("")}</ol>` : ""}
            <h2>What's included</h2>
            ${list(t.includes)}
            ${t.addons ? `<h2>Optional add-ons</h2>${list(t.addons)}` : ""}
            <h2>Prices</h2>
            <table class="price-table"><tbody>${t.prices.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join("")}</tbody></table>
            ${t.notes ? `<div class="notes"><strong>Good to know</strong><ul>${t.notes.map((n) => `<li>${n}</li>`).join("")}</ul></div>` : ""}
            ${t.gallery ? `<h2>Gallery</h2><div class="thumbs">${t.gallery.map((g) => `<img src="${g}" alt="" loading="lazy">`).join("")}</div>` : ""}
            ${t.videos ? `<h2>See it in action</h2><div class="videos">${t.videos.map((v) => `<figure><video src="${v.src}" poster="${v.poster || ""}" controls muted playsinline preload="none"></video>${v.caption ? `<figcaption>${v.caption}</figcaption>` : ""}</figure>`).join("")}</div>` : ""}
          </div>
        </div>
        <aside class="sticky">
          <div class="panel" id="book">
            <h3>Book this tour</h3>
            <p>Send us your details and we'll confirm availability.</p>
            <form class="form" data-enquiry>
              <input type="hidden" name="tour" data-label="Tour" value="${t.title}">
              <label>Your name<input name="name" data-label="Name" required autocomplete="name"></label>
              <label>Phone<input name="phone" data-label="Phone" type="tel" required autocomplete="tel"></label>
              <div class="form-row">
                <label>Date<input name="date" data-label="Preferred date" type="date"></label>
                <label>People<input name="people" data-label="Number of people" type="number" min="1" value="2"></label>
              </div>
              <label>Message (optional)<textarea name="message" data-label="Message" rows="3"></textarea></label>
              <button class="btn btn-wa" type="submit" value="whatsapp">${window.ICONS.wa} Send via WhatsApp</button>
              <p class="form-alt">or <button type="submit" value="email">send by email</button></p>
            </form>
          </div>
        </aside>
      </div>
    </section>`;
})();
