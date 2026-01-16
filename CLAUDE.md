# CSScout - Development Guide

## Project Overview
A React frontend for scouting CS2 player statistics. Allows users to search for players, view their ESEA seasons, and see detailed statistics.

## Tech Stack
- **Framework**: React 19.2.0
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Package Manager**: npm

## Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Project Structure
```
src/
├── main.tsx         # Application entry point
├── App.tsx          # Root component
├── components/      # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── services/        # API client functions
├── types/           # TypeScript type definitions
└── utils/           # Helper functions
```

## API Integration
Backend API runs at `http://localhost:3000`

### Endpoints
- `GET /players/search?nickname=<name>` - Search players
- `GET /players/:playerId/esea` - Get player's ESEA seasons
- `GET /players/:playerId/competitions/:competitionId/stats` - Get season stats

## Code Conventions
- Use functional components with hooks
- Use `async/await` for API calls
- Prefer named exports
- Keep components small and focused
- Use TypeScript strict mode
- Use DaisyUI component classes where possible

## DaisyUI Components
Reference: https://daisyui.com/components/
Common components used:
- `btn` - Buttons
- `input` - Form inputs
- `card` - Card containers
- `table` - Data tables
- `loading` - Loading spinners
- `alert` - Alerts/notifications
- `stats` - Statistics display
