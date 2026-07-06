# ICI Namibia — Independent Cargo Inspectors

Marketing website for Independent Cargo Inspectors (ICI), a marine and cargo inspection company based at the Port of Walvis Bay, Namibia.

## Structure

Static HTML/CSS/JS site, no build step required.

```
index.html         Home
services.html       Marine & cargo inspection services
commodities.html    Commodities inspected
about.html          About ICI / team
contact.html        Contact details, enquiry form, map
css/styles.css      Design system & layout
js/main.js          Mobile nav toggle + enquiry form (mailto)
images/favicon.svg  Site favicon
```

## Local preview

Open `index.html` directly in a browser, or serve locally:

```
python3 -m http.server 8080
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the site to GitHub Pages automatically (Settings → Pages → Source: GitHub Actions is configured by the workflow itself on first run).

## Contact

- André Myburgh
- Mobile / WhatsApp: +264 81 128 1238
- Email: andre@ici.com.na
- Port of Walvis Bay, Erongo Region, Namibia