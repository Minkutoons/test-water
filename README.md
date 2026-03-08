# CreatorFlow (TikTok-style Monetization Mobile App Starter)

CreatorFlow is a React Native + Expo starter app that demonstrates **short-video feed UX** and core **creator monetization features** inspired by platforms like TikTok.

## Included monetization features

- Vertical short-video feed with engagement controls
- Creator profile with:
  - Subscription tiers
  - Live gifting balance
  - Ad revenue estimate
- Live stream gifting UI with coin packages
- In-app wallet summary and payout progress
- Creator campaign marketplace mock data

## Stack

- React Native (Expo)
- TypeScript
- React Navigation (stack + bottom tabs)

## How to see the app

### 1) Install dependencies

```bash
npm install
```

### 2) Start the Expo dev server

```bash
npm run start
```

### 3) Open the app

After the server starts, Expo prints a QR code and options:

- **iOS/Android (recommended):**
  - Install **Expo Go** on your phone.
  - Scan the QR code from the terminal/browser.
- **Web preview:**
  - Press `w` in the Expo terminal, or run:

```bash
npm run web
```

### Optional: run directly on simulators

```bash
npm run ios
npm run android
```

> You need Xcode (for iOS simulator) or Android Studio (for Android emulator) installed locally.

## Notes

This starter uses mock data. For production, replace mocks with a real backend (Firebase/Supabase/Node APIs), integrate secure payments (Stripe/RevenueCat), and add moderation/compliance controls.
