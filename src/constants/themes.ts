import { MonitorDotIcon, MoonStarIcon, SunIcon, ZapIcon } from 'lucide-react'

const tmp = [
  { path: '/backgrounds/lavender/1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
  { path: '/backgrounds/lavender/2.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
  { path: '/backgrounds/lavender/3.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
  { path: '/backgrounds/lavender/4.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
]

export const themeBackgroundImages: Record<ThemeColorKeys, BackgroundImage[]> = {
  gris: [
    { path: '/backgrounds/gris/1.webp', hash: 'LHExFS~BEM9b03Io%1-oR+I=niV@' },
    { path: '/backgrounds/gris/2.webp', hash: 'LdGQtVS5E2%1~Ut7M|fi-:xtRkjF' },
    { path: '/backgrounds/gris/3.webp', hash: 'LdGQtVS5E2%1~Ut7M|fi-:xtRkjF' },
    { path: '/backgrounds/gris/4.gif', hash: 'LdGQtVS5E2%1~Ut7M|fi-:xtRkjF' },
    { path: '/backgrounds/gris/5.gif', hash: 'LdGQtVS5E2%1~Ut7M|fi-:xtRkjF' }
  ],
  'haui dark': [
    { path: '/backgrounds/dev-dark/1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/dev-dark/2.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/dev-dark/3.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
  ],
  'haui light': [{ path: '/backgrounds/haui-light/1.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }],
  Candy: [
    { path: '/backgrounds/candy/1.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/candy/2.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/candy/3.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
  ],
  Electric: [{ path: '/backgrounds/electric/1.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }],
  Lavender: [
    { path: '/backgrounds/lavender/1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/lavender/2.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
  ],

  'Synth wave 84': [
    { path: '/backgrounds/synth-wave-84/1.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/synth-wave-84/2.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/synth-wave-84/3.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/synth-wave-84/4.jpg', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
  ]
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
        'fnt-tertiary': '200, 200, 200',
        'fnt-active': '255, 255, 255',
        'tn-primary': '55, 115, 236',
        'tn-secondary': '92, 142, 245'
      },
      'haui light': {
        'bg-primary': '230, 240, 255',
        'bg-secondary': '210, 230, 250',
        'bg-tertiary': '190, 220, 245',
        'fnt-primary': '30, 40, 60',
        'fnt-secondary': '60, 80, 120',
        'fnt-tertiary': '40, 40, 40',
        'fnt-active': '255, 255, 255',
        'tn-primary': '0, 102, 254',
        'tn-secondary': '244, 248, 255',
        'tn-tertiary': '244, 248, 255'
      }
    }
  },
  dark: {
    Icon: MoonStarIcon,
    styles: {
      'haui dark': {
        'bg-primary': '10, 10, 10',
        'bg-secondary': '16, 16, 16',
        'bg-tertiary': '44, 42, 42',
        'fnt-primary': '237, 237, 237',
        'fnt-secondary': '147, 147, 147',
        'fnt-tertiary': '147, 147, 147',
        'fnt-active': '255, 255, 255',
        'tn-primary': '0, 85, 255',
        'tn-secondary': '66, 218, 155'
      }
    }
  },
  light: {
    Icon: SunIcon,
    styles: {
      Candy: {
        'bg-primary': '255, 200, 240',
        'bg-secondary': '255, 180, 220',
        'bg-tertiary': '255, 160, 200',
        'fnt-primary': '50, 30, 50',
        'fnt-secondary': '80, 50, 80',
        'fnt-tertiary': '147, 147, 147',
        'fnt-active': '255, 255, 255',
        'tn-primary': '235, 130, 180',
        'tn-secondary': '225, 120, 170',
        'tn-tertiary': '255, 238, 250'
      },
      // === FAMILIA PÚRPURA/LAVANDA ===
      Lavender: {
        'bg-primary': '240, 230, 255',
        'bg-secondary': '220, 210, 245',
        'bg-tertiary': '200, 190, 235',
        'fnt-primary': '50, 30, 70',
        'fnt-secondary': '100, 80, 120',
        'fnt-tertiary': '147, 147, 147',
        'fnt-active': '255, 255, 255',
        'tn-primary': '150, 100, 200',
        'tn-secondary': '130, 80, 180',
        'tn-tertiary': '233, 211, 255'
      }
    }
  },
  chaotic: {
    Icon: ZapIcon,
    styles: {
      'Synth wave 84': {
        'bg-primary': '5, 0, 20',
        'bg-secondary': '15, 10, 40',
        'bg-tertiary': '25, 20, 60',
        'fnt-primary': '255, 100, 255',
        'fnt-secondary': '100, 255, 255',
        'fnt-tertiary': '255, 230, 100',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 0, 128',
        'tn-secondary': '128, 255, 255',
        'tn-tertiary': '255, 248, 255'
      },
      Electric: {
        'bg-primary': '0, 0, 30',
        'bg-secondary': '20, 0, 50',
        'bg-tertiary': '40, 20, 70',
        'fnt-primary': '255, 255, 0',
        'fnt-secondary': '255, 0, 255',
        'fnt-tertiary': '147, 147, 147',
        'fnt-active': '0, 0, 0',
        'tn-primary': '0, 255, 255',
        'tn-secondary': '255, 100, 255',
        'tn-tertiary': '255, 255, 184'
      }
    }
  }
} as const

export interface ThemeColors {
  'bg-primary': string
  'bg-secondary': string
  'bg-tertiary': string
  'fnt-primary': string
  'fnt-secondary': string
  'fnt-active': string
  'tn-primary': string
  'tn-secondary': string
}

export const DEFAULT_THEME = {
  style: 'gris' as ThemeKeys,
  theme: 'gris' as ThemeColorKeys,
  colors: THEMES.default.styles.gris,
  bgs: themeBackgroundImages['gris'],
  bg: themeBackgroundImages['gris'][0] ?? { path: '/backgrounds/gris/bg1.webp', hash: 'LHExFS~BEM9b03Io%1-oR+I=niV@' }
} as const

export type ThemeParent = (typeof THEMES)['default']

export type ThemeKeys = keyof typeof THEMES
export type ThemeColorKeys =
  | keyof typeof THEMES.default.styles
  | keyof typeof THEMES.dark.styles
  | keyof typeof THEMES.light.styles
  | keyof typeof THEMES.chaotic.styles

export type BackgroundImage = { path: string; hash: string }
