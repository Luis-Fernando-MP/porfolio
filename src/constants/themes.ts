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
    { path: '/backgrounds/candy/1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/candy/2.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/candy/3.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/candy/4.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/candy/5.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/candy/6.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
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
  ],
  neonCyber: [{ path: '/backgrounds/neon-cyber/1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }],
  Forest: [
    { path: '/backgrounds/forest/1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/forest/2.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/forest/3.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
    { path: '/backgrounds/forest/4.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
  ]
}

export const THEMES = {
  default: {
    Icon: MonitorDotIcon,
    styles: {
      gris: {
        'bg-primary': '25, 26, 27',
        'bg-secondary': '38, 39, 41',
        'bg-tertiary': '58, 59, 61',
        'fnt-primary': '235, 235, 235',
        'fnt-secondary': '170, 172, 174',
        'fnt-tertiary': '195, 195, 195',
        'fnt-active': '255, 255, 255',
        'tn-primary': '32, 108, 255',
        'tn-secondary': '88, 101, 242'
      },
      'haui dark': {
        'bg-primary': '10, 10, 10',
        'bg-secondary': '17, 17, 17',
        'bg-tertiary': '24, 24, 24',
        'fnt-primary': '250, 250, 250',
        'fnt-secondary': '161, 161, 170',
        'fnt-tertiary': '197, 197, 200',
        'fnt-active': '255, 255, 255',
        'tn-primary': '0, 112, 243',
        'tn-secondary': '99, 102, 241'
      },
      'haui light': {
        'bg-primary': '235, 243, 255',
        'bg-secondary': '215, 235, 250',
        'bg-tertiary': '195, 225, 245',
        'fnt-primary': '25, 35, 55',
        'fnt-secondary': '70, 90, 125',
        'fnt-tertiary': '64, 93, 135',
        'fnt-active': '255, 255, 255',
        'tn-primary': '55, 115, 255',
        'tn-secondary': '88, 101, 242'
      }
    }
  },
  dark: {
    Icon: MoonStarIcon,
    styles: {
      Forest: {
        'bg-primary': '12, 18, 15',
        'bg-secondary': '20, 28, 25',
        'bg-tertiary': '28, 38, 32',
        'fnt-primary': '220, 255, 240',
        'fnt-secondary': '160, 200, 180',
        'fnt-tertiary': '120, 160, 140',
        'fnt-active': '12, 18, 15',
        'tn-primary': '45, 212, 191',
        'tn-secondary': '16, 185, 129'
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
        'fnt-tertiary': '110, 70, 100',
        'fnt-active': '255, 255, 255',
        'tn-primary': '235, 130, 180',
        'tn-secondary': '225, 120, 170'
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
        'tn-secondary': '130, 80, 180'
      }
    }
  },
  chaotic: {
    Icon: ZapIcon,
    styles: {
      'Synth wave 84': {
        'bg-primary': '10, 0, 30',
        'bg-secondary': '30, 15, 60',
        'bg-tertiary': '50, 30, 90',
        'fnt-primary': '255, 120, 255',
        'fnt-secondary': '100, 255, 255',
        'fnt-tertiary': '255, 210, 100',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 0, 150',
        'tn-secondary': '0, 150, 150'
      },
      neonCyber: {
        'bg-primary': '5, 0, 25',
        'bg-secondary': '25, 0, 60',
        'bg-tertiary': '45, 20, 90',
        'fnt-primary': '255, 255, 255',
        'fnt-secondary': '80, 220, 255',
        'fnt-tertiary': '255, 80, 200',
        'fnt-active': '255, 255, 255',
        'tn-primary': '3, 160, 180',
        'tn-secondary': '200, 0, 200'
      },
      Electric: {
        'bg-primary': '0, 0, 30',
        'bg-secondary': '20, 0, 50',
        'bg-tertiary': '40, 20, 70',
        'fnt-primary': '255, 255, 0',
        'fnt-secondary': '255, 0, 255',
        'fnt-tertiary': '0, 255, 255',
        'fnt-active': '0, 0, 0',
        'tn-primary': '0, 255, 255',
        'tn-secondary': '180, 100, 220'
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
