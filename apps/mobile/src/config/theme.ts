export const COLORS = {
  // Primary - Warm coral/orange tones
  primary: '#FF6B6B',
  primaryLight: '#FF8E8E',
  primaryDark: '#E85555',

  // Secondary - Soft purple/violet
  secondary: '#9B5DE5',
  secondaryLight: '#B57BFF',
  secondaryDark: '#7B3FC5',

  // Accent - Sunny yellow/gold
  accent: '#FFD93D',
  accentLight: '#FFE566',
  accentDark: '#E5C235',

  // Tertiary - Sky blue
  tertiary: '#00BBF9',
  tertiaryLight: '#33CCFF',
  tertiaryDark: '#0099CC',

  // Warm pink
  pink: '#F15BB5',
  pinkLight: '#FF7CC7',
  pinkDark: '#D13F9A',

  // Neutrals
  white: '#FFFFFF',
  offWhite: '#F8F9FA',
  lightGray: '#E9ECEF',
  gray: '#ADB5BD',
  darkGray: '#495057',
  charcoal: '#2D3436',
  black: '#1A1A1A',

  // Semantic
  error: '#FF6B6B',
  warning: '#FFD93D',
  info: '#00BBF9',

  // Gradients (as arrays for LinearGradient)
  gradients: {
    primary: ['#FF6B6B', '#F15BB5'],
    secondary: ['#9B5DE5', '#00BBF9'],
    sunset: ['#FF6B6B', '#FFD93D'],
    purple: ['#9B5DE5', '#F15BB5'],
    ocean: ['#00BBF9', '#9B5DE5'],
    warm: ['#F15BB5', '#FF6B6B', '#FFD93D'],
  },
} as const;

export const FONTS = {
  heading: 'BarlowSemiCondensed_300Light',
  headingMedium: 'BarlowSemiCondensed_500Medium',
  headingBold: 'BarlowSemiCondensed_600SemiBold',
  body: 'System',
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;
