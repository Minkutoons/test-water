# CreatorFlow (TikTok-style Monetization Mobile App Starter)

CreatorFlow is a React Native + Expo starter app that demonstrates **short-video feed UX** and core **creator monetization features** inspired by platforms like TikTok.

## Why you saw a 404 on GitHub Pages

Your screenshot shows GitHub Pages default **404 File not found**, which means Pages is enabled but no `index.html` was deployed for your repo path (`/test-water/`).

This repo now includes an automatic GitHub Actions workflow that exports Expo web and publishes it to GitHub Pages.

## One-time GitHub setup (required)

1. Push this branch to your GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source = GitHub Actions**.
4. Merge to `main` (or run the workflow manually from **Actions** tab).

After deployment finishes, open:

- `https://minkutoons.github.io/test-water/`

## Local run (to verify before deploy)

### 1) Install dependencies

```bash
npm install
```

### 2) Start Expo

```bash
npm run start
```

### 3) Open app

- Phone (Expo Go): scan the QR code.
- Web: press `w`, or run:

```bash
npm run web
```

## Build/export commands

```bash
npm run build:web
```

This generates static web files in `dist/` (including `index.html`) used by the Pages workflow.

## Notes

This starter uses mock data. For production, replace mocks with a real backend (Firebase/Supabase/Node APIs), integrate secure payments (Stripe/RevenueCat), and add moderation/compliance controls.
