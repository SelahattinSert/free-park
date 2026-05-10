# Free Park — Smart Barrier Control UI

The official UI demo for the next-generation IoT platform that allows you to control your parking barrier via smartphone and web.

Built with a minimalist industrial design, this project is a Turborepo monorepo containing **Next.js (Web)** and **Expo/React Native (Mobile)** platforms. All screens, components, and designs are fully animated and configured to provide a "Premium" feel.

## Getting Started

The project is managed with Turborepo. To install the shared dependencies, run the following in the root directory:

```bash
npm install
```

### Starting the Web Application
```bash
npm run dev:web
```
→ Navigate to `http://localhost:3000` in your browser.

### Starting the Mobile Application
```bash
npm run dev:mobile
```
→ Scan the QR code that appears in the terminal with the Expo Go app on your phone.

## Application Architecture

- **Web (Next.js):** Home (Product Showcase), About Us, and Contact (Modern UI, Shadcn, Tailwind CSS v4, Framer Motion). Includes English/Turkish language support.
- **Mobile (Expo):** Control Panel (Animated barrier management), Activity History, and Profile Settings.
- **Tokens:** Shared design tokens (Colors, Typography) across all platforms.

*Note: All data (device logs, user information, etc.) are currently mocked.*