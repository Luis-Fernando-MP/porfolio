import { MonitorDotIcon, MoonStarIcon, SunIcon, ZapIcon } from 'lucide-react'

export interface Theme {
  'bg-primary': string
  'bg-secondary': string
  'bg-tertiary': string
  'fnt-primary': string
  'fnt-secondary': string
  'fnt-active': string
  'tn-primary': string
  'tn-secondary': string
  'tn-tertiary': string
}

export type ThemeKeys = keyof typeof THEMES
export type ThemeColorKeys =
  | keyof typeof THEMES.default.styles
  | keyof typeof THEMES.dark.styles
  | keyof typeof THEMES.light.styles
  | keyof typeof THEMES.chaotic.styles

export const THEMES = {
  default: {
    Icon: MonitorDotIcon,
    styles: {
      'dev dark': {
        'bg-primary': '10, 10, 10',
        'bg-secondary': '16, 16, 16',
        'bg-tertiary': '44, 42, 42',
        'fnt-primary': '237, 237, 237',
        'fnt-secondary': '147, 147, 147',
        'fnt-active': '255, 255, 255',
        'tn-primary': '0, 85, 255',
        'tn-secondary': '66, 218, 155',
        'tn-tertiary': '248, 251, 255'
      }
    }
  },
  dark: {
    Icon: MoonStarIcon,
    styles: {
      'Cherry Blossom': {
        'bg-primary': '35, 20, 25',
        'bg-secondary': '50, 30, 40',
        'bg-tertiary': '70, 45, 60',
        'fnt-primary': '255, 230, 240',
        'fnt-secondary': '220, 180, 200',
        'fnt-active': '0, 0, 0',
        'tn-primary': '255, 140, 180',
        'tn-secondary': '230, 120, 160',
        'tn-tertiary': '255, 229, 238'
      }
    }
  },
  light: {
    Icon: SunIcon,
    styles: {
      Candy: {
        'bg-primary': '255, 245, 250',
        'bg-secondary': '255, 225, 240',
        'bg-tertiary': '250, 205, 230',
        'fnt-primary': '50, 25, 40',
        'fnt-secondary': '80, 50, 70',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 120, 180',
        'tn-secondary': '235, 100, 160',
        'tn-tertiary': '255, 250, 253'
      }
    }
  },
  chaotic: {
    Icon: ZapIcon,
    styles: {
      'Synth wave 84': {
        'bg-primary': '8, 8, 25',
        'bg-secondary': '18, 18, 35',
        'bg-tertiary': '28, 28, 45',
        'fnt-primary': '255, 100, 255',
        'fnt-secondary': '100, 240, 255',
        'fnt-active': '255, 255, 255',
        'tn-primary': '172, 9, 255',
        'tn-secondary': '220, 90, 180',
        'tn-tertiary': '255, 228, 255'
      }
    }
  }
} as const

export type BackgroundImage = { path: string; hash: string }

export const themeBackgroundImages: Record<ThemeColorKeys, BackgroundImage[]> = {
  'dev dark': [
    { path: '/backgrounds/dev-dark/1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/dev-dark/2.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/dev-dark/3.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
  ],
  'Cherry Blossom': [],
  Candy: [],
  'Synth wave 84': []
}

export const DEFAULT_THEME = {
  style: 'dark' as ThemeKeys,
  theme: 'dev dark' as ThemeColorKeys,
  bgs: themeBackgroundImages['dev dark'],
  bg: themeBackgroundImages['dev dark'][0] ?? { path: '/backgrounds/dev-dark/2.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
}
