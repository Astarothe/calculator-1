import { getColorfulTheme, getDarkTheme, getLightTheme } from '@/store/actions'

export const values = [
  {
    id: 0,
    value: 'light',
    content: 'Light Theme',
    action: getLightTheme,
  },
  {
    id: 1,
    value: 'colorful',
    content: 'Colorful Theme',
    action: getColorfulTheme,
  },
  {
    id: 2,
    value: 'dark',
    content: 'Dark Theme',
    action: getDarkTheme,
  },
]
