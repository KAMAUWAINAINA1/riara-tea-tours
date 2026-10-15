# Riara Tea Tours website

Static HTML/CSS/JS site for [Riara Tea Tours](https://www.riarateatours.co.ke), Limuru, Kenya.
It needs no build step or database and is hosted free on GitHub Pages.

## How to edit

| I want to change… | Edit this file |
|---|---|
| Phone, email, WhatsApp, address, hours, social links, top banner | `assets/js/config.js` |
| Add / remove / change a tour, prices, photos | `assets/js/tours.js` |
| Menu links, footer | `assets/js/layout.js` (the `NAV` list at the top) |
| Colours and fonts | `assets/css/style.css` (the `:root` block at the top) |
| Home, About, FAQ, Contact, Policies text | the matching `.html` file |
| Photos | drop into `assets/img/` and reference by filename |

**Adding a tour:** copy one `{ ... }` block in `tours.js`, give it a new `id`, and edit the text.
It appears on the Tours page automatically, gets its own page at `tour.html?id=<id>`,
and is added to the booking form dropdown and the footer.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Bookings

For now the booking forms open WhatsApp (or the visitor's email app) with a pre-filled
message. When email is set up, this can switch to a form service such as Formspree or Web3Forms.

## Publishing

Every push to `main` goes live on GitHub Pages within a minute or two.
