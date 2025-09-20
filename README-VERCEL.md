# Deploying Axnmihn on Vercel (no custom JSON)

The site now deploys on Vercel using the default zero-config Python + static hosting:

- `public/index.html` serves the marketing site directly from Vercel's static hosting.
- `public/static/**` contains the CSS assets consumed by the page.
- `api/contact.py` exposes a FastAPI-powered endpoint (`/api/contact`) for form submissions. It validates input, persists to SQLite (or any DB you configure), and optionally sends email via SendGrid.

Because everything relies on the standard Vercel layout, **`vercel.json` is no longer required.**
