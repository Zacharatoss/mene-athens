/* Κοινά κομμάτια όλων των σελίδων: header, footer, κουμπιά, κριτικές, μενού.
   Τα δεδομένα έρχονται από config.js και menu-data.js. */

const NAV = [
  { href: "index.html", label: "Αρχική" },
  { href: "menu.html", label: "Μενού" },
  { href: "about.html", label: "Για εμάς" },
  { href: "contact.html", label: "Επικοινωνία" },
];

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const telHref = `tel:${SITE.phone}`;
const igHref = `https://www.instagram.com/${SITE.instagram}/`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;

function logoHtml() {
  const img = SITE.logo ? `<img src="${esc(SITE.logo)}" alt="" class="logo-img">` : "";
  return `${img}<span class="logo-word">Μήνη</span><span class="logo-sub">Athens</span>`;
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const current = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(
    (n) => `<a href="${n.href}"${n.href === current ? ' aria-current="page"' : ""}>${n.label}</a>`
  ).join("");
  el.innerHTML = `
    <div class="container header-inner">
      <a href="index.html" class="logo">${logoHtml()}</a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Μενού πλοήγησης">
        <span></span><span></span><span></span>
      </button>
      <nav id="main-nav" class="main-nav">
        ${links}
        <a href="${telHref}" class="btn btn-small btn-moon">Κράτηση</a>
      </nav>
    </div>`;
  const toggle = el.querySelector(".nav-toggle");
  toggle.addEventListener("click", () => {
    const open = el.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
  });
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer-top">
        ${SITE.logo ? `<img class="footer-logo" src="${esc(SITE.logo)}" alt="${esc(SITE.name)}">` : `<div class="footer-word" aria-hidden="true">Μήνη<span>.</span></div>`}
        <p>${esc(SITE.tagline)}</p>
      </div>
      <div class="footer-cols">
        <div>
          <h4>Ωράριο</h4>
          <p>${esc(SITE.hours)}</p>
        </div>
        <div>
          <h4>Διεύθυνση</h4>
          <p><a href="${mapsHref}" target="_blank" rel="noopener">${esc(SITE.address)}</a></p>
        </div>
        <div>
          <h4>Κρατήσεις & social</h4>
          <p><a href="${telHref}">${esc(SITE.phoneDisplay)}</a></p>
          <p><a href="${igHref}" target="_blank" rel="noopener">@${esc(SITE.instagram)}</a></p>
        </div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} ${esc(SITE.name)} · <a href="privacy.html">Πολιτική απορρήτου</a></div>
    </div>`;
}

/* Συμπληρώνει στοιχεία με data-site="phone|address|hours|instagram" */
function fillSiteData() {
  document.querySelectorAll("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (key === "phone") { el.textContent = SITE.phoneDisplay; if (el.tagName === "A") el.href = telHref; }
    if (key === "address") { el.textContent = SITE.address; if (el.tagName === "A") el.href = mapsHref; }
    if (key === "hours") el.textContent = SITE.hours;
    if (key === "instagram") { el.textContent = `@${SITE.instagram}`; if (el.tagName === "A") el.href = igHref; }
  });
  document.querySelectorAll("[data-href]").forEach((el) => {
    el.href = { tel: telHref, instagram: igHref, maps: mapsHref }[el.dataset.href] || el.href;
    if (el.dataset.href !== "tel") { el.target = "_blank"; el.rel = "noopener"; }
  });
}

function renderDelivery() {
  document.querySelectorAll("[data-delivery]").forEach((el) => {
    el.innerHTML = SITE.delivery
      .map((d) =>
        d.url
          ? `<a class="delivery-btn" href="${esc(d.url)}" target="_blank" rel="noopener"><strong>${esc(d.name)}</strong><span>Παράγγειλε ↗</span></a>`
          : `<span class="delivery-btn is-soon" aria-disabled="true"><strong>${esc(d.name)}</strong><span>Σύντομα</span></span>`
      )
      .join("");
  });
}

function renderReviews() {
  const el = document.getElementById("reviews");
  if (!el) return;
  const stars = (n) => `<div class="stars" aria-label="${n} στα 5 αστέρια">${"★".repeat(n)}<span>${"★".repeat(5 - n)}</span></div>`;
  el.innerHTML = SITE.reviews
    .map(
      (r) => `
      <figure class="review">
        ${stars(r.stars)}
        <blockquote>«${esc(r.text)}»</blockquote>
        <figcaption><span class="avatar" aria-hidden="true">${esc(r.name.charAt(0))}</span>${esc(r.name)}</figcaption>
      </figure>`
    )
    .join("");
  if (SITE.reviewsAreSamples) {
    el.insertAdjacentHTML("afterend", `<p class="reviews-note">Ενδεικτικές κριτικές για το πρότυπο της σελίδας.</p>`);
  }
  const more = document.getElementById("reviews-more");
  if (more) {
    if (SITE.googleReviewsUrl) more.href = SITE.googleReviewsUrl;
    else more.hidden = true;
  }
}

function renderMenu() {
  const nav = document.getElementById("menu-nav");
  const body = document.getElementById("menu-body");
  if (!nav || !body || typeof MENU === "undefined") return;

  nav.innerHTML = MENU.map((c) => `<a href="#${esc(c.id)}">${esc(c.title)}</a>`).join("");
  body.innerHTML = MENU.map(
    (c) => `
    <section class="menu-cat" id="${esc(c.id)}">
      <h2>${esc(c.title)}</h2>
      ${c.note ? `<p class="menu-note">${esc(c.note)}</p>` : ""}
      <ul>
        ${c.items
          .map(
            (i) => `
          <li class="menu-item">
            <div class="menu-item-main">
              <span class="menu-item-name">${esc(i.name)}${i.tag ? ` <em class="tag">${esc(i.tag)}</em>` : ""}</span>
              <span class="menu-dots" aria-hidden="true"></span>
              <span class="menu-price">${esc(i.price)}€</span>
            </div>
            ${i.desc ? `<p class="menu-desc">${esc(i.desc)}</p>` : ""}
          </li>`
          )
          .join("")}
      </ul>
    </section>`
  ).join("");

  // Επισήμανση της κατηγορίας που φαίνεται στην οθόνη
  const links = [...nav.querySelectorAll("a")];
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
        const active = nav.querySelector("a.active");
        if (active) nav.scrollTo({ left: active.offsetLeft - 16, behavior: "smooth" });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  body.querySelectorAll(".menu-cat").forEach((s) => io.observe(s));
}

function openNowBadge() {
  const el = document.getElementById("open-now");
  if (!el) return;
  // Ωράριο 08:00 – 01:00: κλειστό μόνο 01:00 – 08:00
  const h = new Date().getHours();
  const open = h >= 8 || h < 1;
  el.textContent = open ? "Ανοιχτά τώρα" : "Ανοίγουμε στις 08:00";
  el.classList.toggle("closed", !open);
}

/* Ο χάρτης Google φορτώνει μόνο όταν ο επισκέπτης πατήσει το κουμπί */
function setupMapConsent() {
  document.querySelectorAll("[data-map-src]").forEach((box) => {
    const btn = box.querySelector("[data-map-load]");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.className = "map";
      iframe.title = `Χάρτης: ${SITE.name}`;
      iframe.src = box.dataset.mapSrc;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      box.replaceWith(iframe);
    });
  });
}

renderHeader();
renderFooter();
fillSiteData();
renderDelivery();
renderReviews();
renderMenu();
openNowBadge();
setupMapConsent();
