# daren.gg

League of Legends performance overlay and stats platform built for Mac.

This is the **static** marketing site: plain HTML and CSS, no build step, no
JavaScript, no framework. It loads on essentially any browser or device and
on the slowest connections, and the full content is present in the raw HTML
so simple crawlers and verification bots can read it.

## Pages

- `index.html` — home / landing page
- `about.html` — about
- `privacy.html` — privacy policy
- `404.html` — not-found page
- `riot.txt` — Riot Games domain verification file (must stay at the web root)

## Assets

- `style.css` — single stylesheet (system fonts, hex colours, graceful degradation)
- `favicon.ico`
- `public/` — images (wolf logo, App Store badge, screenshots)

## Running locally

It's just static files — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server
```

Then open http://localhost:8000

## Deploying

Upload the folder to any static host (GitHub Pages, Netlify, Cloudflare Pages,
S3, plain Apache/nginx). No server-side runtime is required. Keep `riot.txt`
reachable at `https://your-domain/riot.txt`.

## License

MIT © 2025 Arryan Bhatnagar

---

*Wolf icons by [Icongeek26](https://www.flaticon.com/authors/icongeek26) from Flaticon*
