# CS2 League Stats UI

React frontend for tracking Counter-Strike 2 player statistics from ESEA leagues.

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

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `` (empty, uses relative paths) |

For production builds, set the API URL:

```bash
VITE_API_URL=https://your-api-url.com npm run build
```

## Deployment

### Firebase Hosting (Frontend)

```bash
# Login to Firebase
firebase login

# Build with production API URL
VITE_API_URL=https://your-cloud-run-url npm run build

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
