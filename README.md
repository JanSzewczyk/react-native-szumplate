# React Native Szumplate

A modern, production‑ready React Native starter template by Szum-Tech. Built with Expo, TypeScript, Expo Router, NativeWind (Tailwind), Reanimated, and strong type-safety via Zod. It’s designed to help you ship high‑quality iOS, Android, and web apps fast.

- Company: Szum-Tech
- Status: Production‑ready
- Target platforms: iOS, Android, Web

## Features

- Cross‑platform with Expo and React Native
- Fully typed with TypeScript
- File‑based routing via Expo Router v6
- NativeWind (Tailwind CSS) for styling
- Smooth animations with Reanimated 4
- Runtime type safety with Zod
- Developer tooling: ESLint 9 + Prettier (using @szum-tech/prettier-config)
- Optimized for Expo SDK 54 and Metro bundler

## Tech Stack

- React Native 0.81.4, React 19.1.0
- Expo SDK 54.0.9
- TypeScript 5.9.2
- Expo Router 6.0.7
- NativeWind 4.2.1 + Tailwind CSS 3.4.17
- Reanimated 4.1.0
- React Navigation 7 (core and bottom-tabs)
- Safe Area Context, Gesture Handler, Screens
- React Native Web 0.21.0
- Zod 4.1.11
- Expo modules: Blur, Haptics, Image, Linking, StatusBar, System UI, Web Browser, Vector Icons

## Requirements

- Node.js 18+ (LTS recommended)
- npm (package manager)
- iOS: Xcode + iOS Simulator
- Android: Android Studio + Android SDK/Emulator

## Quick Start

1) Install dependencies
```shell script
npm install
```


2) Start the development server
```shell script
# Using package script (preferred if available)
npm run start

# Or directly via Expo
npx expo start
```


3) Run on a device or simulator
```shell script
# Android
npm run android    # or: npx expo run:android

# iOS (on macOS)
npm run ios        # or: npx expo run:ios

# Web (React Native Web)
npm run web        # or: npx expo start --web
```


Tip: You can also scan the QR code in the terminal or Expo DevTools to open the app on a device.

## Project Structure (typical)

```shell script.
├─ app/                  # Expo Router v6 file-based routes
│  └─ index.tsx          # Home route
├─ components/           # Reusable UI components
├─ assets/               # Images, fonts, etc.
├─ types/                # Global TypeScript types
├─ .env                  # Environment variables (local)
├─ .env.example          # Example env vars
├─ tailwind.config.js    # Tailwind/NativeWind config
├─ babel.config.js       # Babel config (ensure Reanimated plugin is last)
└─ package.json
```


Note: Route files live in app/ using Expo Router conventions. Adjust or expand as your app grows.

## Styling (NativeWind + Tailwind)

- Tailwind classes are used directly in React Native via NativeWind.
- Ensure Tailwind is configured and NativeWind preset is enabled in tailwind.config.js.
- If you add custom colors or themes, update the Tailwind config accordingly.

Example command to run Tailwind IntelliSense in editors:
```shell script
bash
# no runtime command required; ensure tailwind.config.js exists for IDE tooling
```


## Animations (Reanimated)

- Reanimated 4 is included for performant, native‑thread animations.
- Ensure the Babel plugin is enabled and is the last plugin in babel.config.js:
```textmate
// babel.config.js (snippet)
plugins: [
  // ...other plugins
  "react-native-reanimated/plugin"
]
```

If you “prebuild” (bare/native), remember to reinstall pods on iOS.

## Navigation

- Expo Router v6 provides file‑based routing, deep linking, and stack/tab patterns.
- React Navigation is available for components and primitives used by the router (screens, bottom tabs).

## Type Safety and Validation

- TypeScript provides static typing across the app.
- Zod enables runtime validation for external inputs (e.g., API responses, env vars).

## Linting and Formatting

- ESLint 9 for code quality.
- Prettier with Szum-Tech’s shared config.
```shell script
# Lint
npm run lint         # if script exists
# or
npx eslint .

# Format
npm run format       # if script exists
# or
npx prettier . --write
```


## Environment Variables

- Keep secrets out of source control.
- Add your variables to a local .env and commit a sanitized .env.example.

Example:
```shell script
# .env
API_URL=https://api.example.com
SENTRY_DSN=<YOUR_SENTRY_DSN>
```


Do not commit real credentials; use placeholders like <YOUR_VALUE>.

## Building for Production

- Recommended: EAS Build for cloud builds and signing.
```shell script
# Install EAS CLI if needed
npm install -g eas-cli

# Configure
eas login
eas init

# Build
eas build -p ios
eas build -p android
```


- For prebuilding to native projects (optional):
```shell script
npx expo prebuild
```


## Updating

- Keep Expo SDK and Expo Router versions in sync.
- Use the official Expo upgrade guide when bumping SDK versions:
```shell script
npx expo install --fix
```


## Troubleshooting

- Reanimated plugin not found: Ensure "react-native-reanimated/plugin" is the last Babel plugin, then clear cache.
```shell script
npx expo start -c
```


- iOS build errors after native changes:
```shell script
cd ios && pod install && cd ..
```


- Verify environment setup:
```shell script
npx expo doctor
```


## Scripts (common)

Not all projects expose every script, but these are typical:
```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web",
    "lint": "eslint .",
    "format": "prettier. --write",
    "typecheck": "tsc --noEmit"
  }
}
```


## Repository

- GitHub: https://github.com/JanSzewczyk/react-native-szumplate

## License

This template is provided by Szum-Tech. See LICENSE for details.

## Support

- Maintainer: Szum-Tech
- For issues and feature requests, please open an issue on the repository.

Happy building!