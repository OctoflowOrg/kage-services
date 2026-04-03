# KAGE Services

Single-page Astro landing page for KAGE Services with Formspree handling quote requests and GitHub + Vercel ready deployment.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

- Connect the GitHub repo to Vercel.
- Set `PUBLIC_SITE_URL` in Vercel once the production domain is known.
- Vercel will create preview deployments for pull requests and production deployments for merges to `main`.

## Content Updates

Business copy, contact details, social links, and image URLs live in `src/data/site.ts`.
