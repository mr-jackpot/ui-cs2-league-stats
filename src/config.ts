const isDev = import.meta.env.DEV;

export const config = {
  // In dev mode, use empty string so Vite proxy handles requests to local backend
  // In production, use the Cloud Run URL
  apiUrl: isDev ? '' : 'https://cs2-league-stats-857778773897.europe-west2.run.app',
};
