# Axnmihn — From Cognition to Structure

Next.js protocol site for Axnmihn. The interface combines shadcn/ui components, Tailwind CSS, and JSON-driven content to describe research, skills, and collaborative invitations.

## Tech stack

- [Next.js 15](https://nextjs.org/) with the App Router and React 19.
- [Tailwind CSS](https://tailwindcss.com/) with custom gradients and animations.
- [shadcn/ui](https://ui.shadcn.com/) components (`Button`, `Card`, `Badge`).
- JSON content sources in [`/content`](./content) to keep copy editable without touching JSX.

## Getting started

```bash
pnpm install
pnpm dev
```

The site runs at <http://localhost:3000>. Update the structured content in `content/site.json`, `content/research.json`, and `content/accessible-science.json` to change copy, skills, or research entries. Changes hot-reload during development.

### Build for production

```bash
pnpm build
pnpm start
```

## Content model

- `content/site.json` — About text, skills grid, and collaboration links.
- `content/research.json` — Research/project entries with long-form body text rendered on `/research/[slug]` pages.
- `content/accessible-science.json` — Explainers displayed in the Accessible Science section.

Add or remove entries from these files to update the UI. Each research entry supports `slug`, `title`, `summary`, `focus`, `readTime`, and a `body` array for paragraphs.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Optional | Public URL for canonical metadata (defaults to `https://axnmihn.com`). |
| `BUILD_ID` | Automatic | Injected by the build system and surfaced in the footer; falls back to `dev` locally. |

## Contact endpoint

`POST /api/contact` accepts `{ name, email, message }` and performs basic validation. Hook this route to SendGrid, Resend, or your database layer by replacing the logging stub in [`app/api/contact/route.ts`](./app/api/contact/route.ts).

## License

© 2025 Axnmihn. All rights reserved.
