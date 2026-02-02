# The Darwin Principle

A competitive mobile and web game app where players duel in mini-game encounters to climb through 10 levels and win real money.

## Tech Stack

### Mobile App (Expo)
- **Framework**: Expo (SDK 52+)
- **Language**: TypeScript (Strict Mode)
- **Navigation**: Expo Router (File-based)
- **State Management**: Zustand
- **Animations**: React Native Reanimated
- **Backend**: PocketBase (Real-time)

### Web App (Next.js)
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Backend**: PocketBase (Real-time)

### Shared Code
- **Package**: @darwin/shared
- **Contents**: Types, utilities, stores, services, configuration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI (for mobile development)

### Installation

1. Clone the repository
2. Install dependencies: `npm install` 
3. Start development servers:
   - Mobile: `cd apps/mobile && npx expo start` 
   - Web: `cd apps/web && npm run dev` 

### Available Scripts (Root)

- `npm run dev` - Start all development servers
- `npm run build` - Build all apps
- `npm run lint` - Run ESLint across all apps
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
darwin/
├── apps/
│   ├── mobile/                 # Expo mobile app
│   │   ├── app/               # Expo Router file-based routing
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   ├── config/
│   │   │   ├── stores/
│   │   │   └── hooks/
│   │   └── assets/
│   └── web/                    # Next.js web app
│       ├── app/               # Next.js App Router
│       ├── src/
│       │   ├── components/
│       │   ├── services/
│       │   ├── utils/
│       │   ├── config/
│       │   ├── stores/
│       │   └── hooks/
│       └── public/
├── packages/
│   └── shared/                 # Shared code (@darwin/shared)
│       └── src/
│           ├── types/
│           ├── utils/
│           ├── stores/
│           ├── services/
│           └── config/
├── .env.development
├── .env.staging
├── .env.production
├── .env.local
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
└── package.json
```

## Environment Variables

- `.env.development` - Development environment
- `.env.staging` - Staging environment
- `.env.production` - Production environment
- `.env.local` - Local overrides (not committed)

## Monorepo Workspaces

This project uses npm workspaces to manage multiple applications and shared code:

- `apps/mobile` - Expo mobile application
- `apps/web` - Next.js web application
- `packages/shared` - Shared code, types, and utilities

## License

Proprietary - All rights reserved
