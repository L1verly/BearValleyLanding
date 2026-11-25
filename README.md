# Bear Valley Bible Institute Ukraine — Landing Page

Source code for the official landing page of Bear Valley Bible Institute Ukraine (BVBIU), live at **[bvbiu.com](https://bvbiu.com)**.

The site is a single-page, Ukrainian-language website that introduces the institute's mission (training preachers, evangelists, missionaries and youth ministers), shares news, presents the team, and links to donations and video content.

## Tech Stack

- [Astro](https://astro.build/) 5 — static-first site framework
- [React](https://react.dev/) (via `@astrojs/react`) — interactive components (nav bar, news slider, buttons)
- [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`) — styling
- [react-slick](https://react-slick.neostack.com/) / slick-carousel — news carousel
- [Netlify adapter](https://docs.astro.build/en/guides/integrations-guide/netlify/) (`@astrojs/netlify`) — deployment

## Getting Started

Requirements: Node.js 18.20+ (or 20+) and npm.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

### Scripts

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Start the local dev server                  |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |
| `npm run astro`   | Run Astro CLI commands (e.g. `astro check`) |

## Project Structure

```text
├── public/                 # Favicons, web manifest (served as-is)
├── src/
│   ├── assets/             # Logos, news images, team photos
│   │   ├── news/
│   │   └── teamMembers/
│   ├── components/         # Page sections and UI pieces
│   │   ├── Buttons/        # Button, PrimaryButton, SecondaryButton
│   │   ├── Hero.astro      # Mission statement
│   │   ├── News.astro      # News section (NewsSlider / NewsCard)
│   │   ├── Team.astro      # Team section (TeamMemberCard)
│   │   ├── Donations.astro # Donation call to action
│   │   ├── Youtube.astro   # Video section
│   │   ├── Navigation.astro / NavBar.tsx / NavLink.tsx
│   │   └── Footer.astro
│   ├── layouts/Layout.astro
│   └── pages/index.astro   # The single page, composing all sections
├── astro.config.mjs
└── package.json
```

## Updating Content

- **News:** add the image to `src/assets/news/` and add an entry in `src/components/News.astro`.
- **Team:** add a photo to `src/assets/teamMembers/` and add the member in `src/components/Team.astro`.
- **Donation link:** edit the button `href` in `src/components/Donations.astro`.

## Deployment

The site is deployed to Netlify at [bvbiu.com](https://bvbiu.com) using the Astro Netlify adapter.

Netlify settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Pushes to the connected branch trigger a new deploy.
