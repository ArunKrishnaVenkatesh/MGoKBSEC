# MGoKBSEC Website

Website for **MGoKBSEC** — Student Entrepreneurship Cell of Manipal Government of Karnataka BioIncubator.

Built with [Astro](https://astro.build) and deployed on GitHub Pages.

## Pages

- **Home** (`/`) — Hero, featured startups, upcoming events, impact stats, newsletter
- **About** (`/about`) — ECell story, mission/vision, partners, offerings
- **Startups** (`/startups`) — Filterable portfolio of student ventures
- **Events** (`/events`) — Upcoming and past events with tabs
- **Resources** (`/resources`) — Downloadable templates and guides
- **Team** (`/team`) — Faculty advisors, core team, mentors
- **Contact** (`/contact`) — Inquiry form, newsletter, social links
- **404** — Custom error page

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Pure CSS with custom properties
- **Deployment**: GitHub Pages
- **Forms**: Formspree

## Setup

```bash
npm install
npm run dev     # Development server at localhost:4321
npm run build   # Build to ./docs
```

## Deployment

Push to `main` branch. GitHub Actions automatically builds and deploys to GitHub Pages.

**Important**: Update Formspree form IDs in:
- `src/pages/index.astro` (newsletter form)
- `src/pages/contact.astro` (contact form)

## Project Structure

```
src/
├── components/     # Reusable components (Header, Footer)
├── data/          # TypeScript data files (startups, events, resources, team)
├── layouts/       # Page layout wrapper
├── pages/         # Astro pages (routing)
└── styles/        # Global CSS
```

## License

MIT
