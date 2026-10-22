# Μήνη Athens · Ιστοσελίδα (πρότυπο)

Live: https://zacharatoss.github.io/mene-athens/

Στατική ιστοσελίδα (HTML/CSS/JS). Δεν χρειάζεται εγκατάσταση. Ανοίγεις το `index.html` στον browser.

## Σελίδες
| Αρχείο | Περιεχόμενο |
|---|---|
| `index.html` | Αρχική: hero, πρωί/μεσημέρι/βράδυ, κριτικές, κράτηση, delivery |
| `menu.html` | Μενού. **Αυτή τη διεύθυνση βάζεις στο QR code.** |
| `about.html` | Για εμάς (προσωρινό κείμενο) |
| `contact.html` | Τηλέφωνο, διεύθυνση, ωράριο, χάρτης |

## Πώς αλλάζω…
- **Το μενού και τις τιμές** → `js/menu-data.js` (οδηγίες μέσα στο αρχείο)
- **Τηλέφωνο, ωράριο, Instagram, κριτικές, delivery links** → `js/config.js`
- **Λογότυπο** → `images/logo.png` (ρύθμιση `logo` στο `js/config.js`)
- **Χρώματα** → στην αρχή του `css/style.css` (μεταβλητές `--paper` για το λαδί και `--moon` για το χρυσό)
- **Φωτογραφίες** → είναι προσωρινές από το Unsplash. Βάλε τις δικές σου στο `images/` και άλλαξε τα `src="…"` στα `.html`

## Πριν βγει online
- [ ] Πραγματικές κριτικές στο `js/config.js` (οι τωρινές είναι δείγματα) και `reviewsAreSamples: false`
- [ ] `googleReviewsUrl` στο `js/config.js`
- [ ] Links για efood / Wolt όταν υπάρχουν
- [ ] Πραγματικές φωτογραφίες και κείμενο «Για εμάς»
- [ ] Σύντομη πολιτική απορρήτου/cookies (λόγω Google Maps & Google Fonts)
