# CSScout

React frontend for scouting Counter-Strike 2 player statistics from ESEA leagues.

## Features

- Search for players by nickname
- View player's ESEA season history
- Detailed stats per season (K/D, ADR, win rate, headshot %, multi-kills)

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + DaisyUI
- **Routing**: React Router
- **Testing**: Vitest + React Testing Library

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Requires the [backend API](https://github.com/mr-jackpot/cs2-league-stats) running on `http://localhost:3000`.

## Scripts

```bash
npm run dev       # Start dev server with hot reload
npm run build     # Build for production
npm run preview   # Preview production build
npm run test      # Run tests in watch mode
npm run test:run  # Run tests once
npm run lint      # Run ESLint
```

## Configuration

The API URL is configured in `src/config.ts`:

```ts
export const config = {
  apiUrl: 'https://cs2-league-stats-857778773897.europe-west2.run.app',
};
```

## Deployment

### Firebase Hosting (Frontend)

```bash
# Login to Firebase
firebase login

# Build for production
npm run build

# Deploy
firebase deploy --only hosting
```

### Configuration Files

- `firebase.json` - Firebase Hosting configuration
- `.firebaserc` - Firebase project settings

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Navbar.tsx
│   ├── PlayerSearch.tsx
│   ├── PlayerList.tsx
│   ├── PlayerProfile.tsx
│   ├── SeasonsList.tsx
│   └── PlayerStatsCard.tsx
├── pages/          # Page components
│   ├── HomePage.tsx
│   └── PlayerPage.tsx
├── services/       # API client
│   └── api.ts
├── types/          # TypeScript types
│   └── api.ts
└── test/           # Test setup
    └── setup.ts
```

## License

MIT
