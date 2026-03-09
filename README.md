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

### 2) Start Expo

```bash
npm run start
```

### 3) Open the app

- **Phone (Expo Go):** scan the QR code shown in terminal/browser.
- **Web:** press `w` in terminal, or run:

```bash
npm run web
```

### Optional simulators

```bash
npm run ios
npm run android
```

> iOS simulator requires Xcode. Android emulator requires Android Studio.

## Troubleshooting (if you cannot see the app)

1. Ensure you are in the project root (`/workspace/test-water`) before running commands.
2. Verify install completed and `node_modules` exists.
3. If web fails, make sure these deps are present in `package.json`:
   - `react-dom`
   - `react-native-web`
4. If Metro is stuck, clear cache:

```bash
npx expo start -c
```

5. If network/QR on phone fails, try tunnel mode:

```bash
npx expo start --tunnel
```

## Notes

This starter uses mock data. For production, replace mocks with a real backend (Firebase/Supabase/Node APIs), integrate secure payments (Stripe/RevenueCat), and add moderation/compliance controls.
