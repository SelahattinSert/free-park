export const colors = {
  dark:      '#283739',
  teal:      '#2c5d63',
  accent:    '#a9c52f',
  light:     '#f5f5f5',
  white:     '#ffffff',
  textMuted: '#8a9a9b',
} as const;

export type ColorKey = keyof typeof colors;
