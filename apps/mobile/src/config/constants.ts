import Constants from 'expo-constants';

export const APP_CONFIG = {
  apiUrl: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8090',
  environment: process.env.EXPO_PUBLIC_ENV || 'development',
  appName: Constants.expoConfig?.name || 'The Darwin Principle',
} as const;
