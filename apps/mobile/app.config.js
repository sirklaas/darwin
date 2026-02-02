const IS_DEV = process.env.EXPO_PUBLIC_ENV === 'development';
const IS_STAGING = process.env.EXPO_PUBLIC_ENV === 'staging';
const IS_PROD = process.env.EXPO_PUBLIC_ENV === 'production';

const getAppName = () => {
  if (IS_DEV) return 'Darwin Principle (Dev)';
  if (IS_STAGING) return 'Darwin Principle (Staging)';
  return 'The Darwin Principle';
};

const getBundleIdentifier = () => {
  if (IS_DEV) return 'com.darwinprinciple.app.dev';
  if (IS_STAGING) return 'com.darwinprinciple.app.staging';
  return 'com.darwinprinciple.app';
};

export default {
  expo: {
    name: getAppName(),
    slug: 'darwin-principle',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    splash: {
      image: './assets/images/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      bundleIdentifier: getBundleIdentifier(),
      supportsTablet: true,
      infoPlist: {
        NSCameraUsageDescription: 'Upload your profile picture for The Darwin Principle',
      },
    },
    android: {
      package: getBundleIdentifier(),
      adaptiveIcon: {
        foregroundImage: './assets/images/android-icon-foreground.png',
        backgroundColor: '#ffffff',
      },
      permissions: ['CAMERA', 'READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE'],
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      [
        'expo-notifications',
        {
          icon: './assets/images/notification-icon.png',
          color: '#ffffff',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      environment: process.env.EXPO_PUBLIC_ENV,
    },
  },
};
