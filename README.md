# Sakinah

Sakinah is an Arabic-language Islamic companion website. It brings Quran
reading, prayer times, a digital tasbih, hadith, daily adhkar, an Islamic
library, and a Qibla compass together in one place.

## Requirements

- Node.js 22 or later
- npm

## Getting started

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Vite prints the local URL when the server starts.

## Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start the development server |
| `npm run build`     | Build the production app     |
| `npm run build:dev` | Build using development mode |
| `npm run preview`   | Preview the production build |
| `npm run lint`      | Run ESLint                   |

## Deploy

### Vercel

This is a TanStack Start application. Deploy it with Vercel's **TanStack Start**
framework preset and the Nitro Vite plugin. The repository's `vercel.json`
selects that framework preset. Use `npm run build` as the Build Command. Leave
the Output Directory override empty: Nitro creates `.vercel/output`, including
the server function and static assets, for Vercel to deploy.

```sh
npm run build
```

Do not set the Output Directory to `dist` or add a static-site rewrite; the app
uses server-rendered TanStack Start routes.

### Other platforms

Build the app with `npm run build`, then deploy the generated output using a
platform that supports TanStack Start and Nitro.

## Repository

[oussamatght/sakinah-plugin-website](https://github.com/oussamatght/sakinah-plugin-website)
