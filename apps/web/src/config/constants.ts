export const APP_CONFIG = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8090',
  environment: process.env.NODE_ENV || 'development',
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'The Darwin Principle',
} as const;
