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
}

export type ThemeKeys = keyof typeof THEMES
export type ThemeColorKeys =
  | keyof typeof THEMES.default.styles
  | keyof typeof THEMES.dark.styles
  | keyof typeof THEMES.light.styles
  | keyof typeof THEMES.chaotic.styles

export type BackgroundImage = { path: string; hash: string }

export const themeBackgroundImages: Record<ThemeColorKeys, BackgroundImage[]> = {
  gris: [
    { path: '/backgrounds/gris/bg1.webp', hash: 'LHExFS~BEM9b03Io%1-oR+I=niV@' },
    { path: '/backgrounds/gris/bg2.webp', hash: 'LdGQtVS5E2%1~Ut7M|fi-:xtRkjF' }
  ],
  'dev dark': [
    { path: '/backgrounds/dev-dark/1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/dev-dark/2.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/dev-dark/3.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
  ],
  'Cherry Blossom': [],
  Candy: [],
  'Synth wave 84': []
}

export const THEMES = {
  default: {
    Icon: MonitorDotIcon,
    styles: {
      gris: {
        'bg-primary': '25, 26, 27',
        'bg-secondary': '40, 41, 43',
        'bg-tertiary': '50, 51, 53',
        'fnt-primary': '237, 237, 237',
        'fnt-secondary': '169, 171, 173',
        'fnt-active': '255, 255, 255',
        'tn-primary': '55, 115, 236',
        'tn-secondary': '92, 142, 245'
      },
      'dev dark': {
        'bg-primary': '10, 10, 10',
        'bg-secondary': '16, 16, 16',
        'bg-tertiary': '44, 42, 42',
        'fnt-primary': '237, 237, 237',
        'fnt-secondary': '147, 147, 147',
        'fnt-active': '255, 255, 255',
        'tn-primary': '0, 85, 255',
        'tn-secondary': '66, 218, 155'
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
        'tn-secondary': '230, 120, 160'
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
        'tn-secondary': '235, 100, 160'
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
        'tn-secondary': '220, 90, 180'
      }
    }
  }
} as const

export const DEFAULT_THEME = {
  style: 'gris' as ThemeKeys,
  theme: 'gris' as ThemeColorKeys,
  colors: THEMES.default.styles.gris,
  bgs: themeBackgroundImages['gris'],
  bg: themeBackgroundImages['gris'][0] ?? { path: '/backgrounds/gris/bg1.webp', hash: 'LHExFS~BEM9b03Io%1-oR+I=niV@' }
}
