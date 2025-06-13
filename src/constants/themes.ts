import { MonitorDotIcon, MoonStarIcon, SunIcon, ZapIcon } from 'lucide-react'

import { INFO } from '.'

export interface Theme {
  dominantKey: string
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
export const DEFAULT_THEME = {
  style: 'dark' as ThemeKeys,
  theme: 'dev dark' as ThemeColorKeys
}

export type ThemeKeys = keyof typeof THEMES
export type ThemeColorKeys =
  | keyof typeof THEMES.default.styles
  | keyof typeof THEMES.dark.styles
  | keyof typeof THEMES.light.styles
  | keyof typeof THEMES.chaotic.styles

type ThemeStyles = typeof THEMES.default.styles &
  typeof THEMES.dark.styles &
  typeof THEMES.light.styles &
  typeof THEMES.chaotic.styles

export type DominantKey = ThemeStyles[keyof ThemeStyles]['dominantKey']

export const THEMES = {
  default: {
    Icon: MonitorDotIcon,
    styles: {
      'dev dark': {
        dominantKey: 'ice',
        'bg-primary': '10, 10, 10',
        'bg-secondary': '16, 16, 16',
        'bg-tertiary': '44, 42, 42',
        'fnt-primary': '237, 237, 237',
        'fnt-secondary': '147, 147, 147',
        'fnt-active': '255, 255, 255',
        'tn-primary': '0, 85, 255',
        'tn-secondary': '66, 218, 155',
        'tn-tertiary': '248, 251, 255'
      },
      'dev light': {
        dominantKey: 'ice',
        'bg-primary': '230, 240, 255',
        'bg-secondary': '210, 230, 250',
        'bg-tertiary': '190, 220, 245',
        'fnt-primary': '30, 40, 60',
        'fnt-secondary': '60, 80, 120',
        'fnt-active': '255, 255, 255',
        'tn-primary': '0, 102, 254',
        'tn-secondary': '244, 248, 255',
        'tn-tertiary': '244, 248, 255'
      },
      rebeccapurple: {
        dominantKey: 'lavender',
        'bg-primary': '240, 235, 250',
        'bg-secondary': '220, 210, 240',
        'bg-tertiary': '200, 185, 230',
        'fnt-primary': '45, 25, 70',
        'fnt-secondary': '102, 51, 153',
        'fnt-active': '255, 255, 255',
        'tn-primary': '102, 51, 153',
        'tn-secondary': '235, 225, 245',
        'tn-tertiary': '210, 195, 235'
      }
    }
  },
  dark: {
    Icon: MoonStarIcon,
    styles: {
      'Dark Slate': {
        dominantKey: 'slate',
        'bg-primary': '35, 35, 35',
        'bg-secondary': '45, 45, 45',
        'bg-tertiary': '60, 60, 60',
        'fnt-primary': '255, 255, 255',
        'fnt-secondary': '190, 190, 190',
        'fnt-active': '255, 255, 255',
        'tn-primary': '40, 120, 220',
        'tn-secondary': '20, 100, 200',
        'tn-tertiary': '217, 234, 255'
      },
      Midnight: {
        dominantKey: 'ice',
        'bg-primary': '12, 20, 40',
        'bg-secondary': '18, 30, 55',
        'bg-tertiary': '25, 45, 75',
        'fnt-primary': '190, 210, 255',
        'fnt-secondary': '150, 180, 230',
        'fnt-active': '255, 255, 255',
        'tn-primary': '40, 90, 200',
        'tn-secondary': '30, 70, 180',
        'tn-tertiary': '200, 215, 255'
      },
      Carbon: {
        dominantKey: 'forest',
        'bg-primary': '10, 10, 10',
        'bg-secondary': '20, 20, 20',
        'bg-tertiary': '30, 30, 30',
        'fnt-primary': '245, 245, 245',
        'fnt-secondary': '180, 180, 180',
        'fnt-active': '0, 0, 0',
        'tn-primary': '11, 235, 127',
        'tn-secondary': '80, 230, 160',
        'tn-tertiary': '235, 244, 240'
      },
      'Aurora Forest': {
        dominantKey: 'forest',
        'bg-primary': '8, 18, 18',
        'bg-secondary': '18, 28, 28',
        'bg-tertiary': '28, 40, 40',
        'fnt-primary': '150, 255, 200',
        'fnt-secondary': '100, 220, 180',
        'fnt-active': '0, 0, 0',
        'tn-primary': '0, 255, 150',
        'tn-secondary': '0, 220, 130',
        'tn-tertiary': '240, 255, 248'
      },
      Red: {
        dominantKey: 'red',
        'bg-primary': '5, 5, 5',
        'bg-secondary': '15, 15, 15',
        'bg-tertiary': '25, 25, 25',
        'fnt-primary': '235, 235, 235',
        'fnt-secondary': '170, 170, 170',
        'fnt-active': '255, 255, 255',
        'tn-primary': '245, 48, 48',
        'tn-secondary': '230, 150, 60',
        'tn-tertiary': '255, 245, 245'
      },
      StarryNight: {
        dominantKey: 'lavender',
        'bg-primary': '8, 8, 18',
        'bg-secondary': '18, 18, 28',
        'bg-tertiary': '28, 28, 38',
        'fnt-primary': '240, 240, 250',
        'fnt-secondary': '180, 180, 200',
        'fnt-active': '255, 255, 255',
        'tn-primary': '120, 60, 200',
        'tn-secondary': '80, 80, 160',
        'tn-tertiary': '237, 237, 255'
      },
      Nebula: {
        dominantKey: 'lavender',
        'bg-primary': '18, 18, 35',
        'bg-secondary': '28, 28, 55',
        'bg-tertiary': '40, 40, 75',
        'fnt-primary': '255, 220, 255',
        'fnt-secondary': '200, 150, 255',
        'fnt-active': '255, 238, 255',
        'tn-primary': '168, 53, 202',
        'tn-secondary': '200, 80, 230',
        'tn-tertiary': '244, 228, 250'
      },
      Velvet: {
        dominantKey: 'lavender',
        'bg-primary': '18, 8, 28',
        'bg-secondary': '28, 18, 38',
        'bg-tertiary': '40, 28, 50',
        'fnt-primary': '230, 190, 255',
        'fnt-secondary': '190, 150, 230',
        'fnt-active': '242, 212, 255',
        'tn-primary': '123, 55, 152',
        'tn-secondary': '200, 120, 230',
        'tn-tertiary': '242, 212, 255'
      },
      'Royal Purple': {
        dominantKey: 'lavender',
        'bg-primary': '25, 15, 40',
        'bg-secondary': '40, 25, 60',
        'bg-tertiary': '60, 40, 85',
        'fnt-primary': '220, 200, 255',
        'fnt-secondary': '180, 160, 220',
        'fnt-active': '255, 255, 255',
        'tn-primary': '140, 80, 220',
        'tn-secondary': '120, 60, 200',
        'tn-tertiary': '230, 215, 252'
      },
      'Twilight Pink': {
        dominantKey: 'pink',
        'bg-primary': '45, 8, 28',
        'bg-secondary': '65, 18, 38',
        'bg-tertiary': '85, 28, 48',
        'fnt-primary': '255, 235, 245',
        'fnt-secondary': '220, 180, 200',
        'fnt-active': '255, 255, 255',
        'tn-primary': '220, 60, 120',
        'tn-secondary': '200, 40, 100',
        'tn-tertiary': '255, 230, 244'
      },
      'Volcanic Magma': {
        dominantKey: 'red',
        'bg-primary': '50, 12, 12',
        'bg-secondary': '70, 22, 22',
        'bg-tertiary': '90, 32, 32',
        'fnt-primary': '255, 200, 120',
        'fnt-secondary': '220, 160, 80',
        'fnt-active': '255, 255, 255',
        'tn-primary': '219, 79, 79',
        'tn-secondary': '230, 100, 40',
        'tn-tertiary': '255, 216, 223'
      },
      'Cherry Blossom': {
        dominantKey: 'pink',
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
      'Passionate Red': {
        dominantKey: 'rose',
        'bg-primary': '255, 105, 180',
        'bg-secondary': '255, 85, 160',
        'bg-tertiary': '255, 65, 140',
        'fnt-primary': '50, 30, 50',
        'fnt-secondary': '80, 50, 80',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 50, 100',
        'tn-secondary': '245, 201, 223',
        'tn-tertiary': '255, 211, 233'
      },
      'Candy Bright': {
        dominantKey: 'rose',
        'bg-primary': '255, 200, 200',
        'bg-secondary': '255, 180, 220',
        'bg-tertiary': '240, 160, 210',
        'fnt-primary': '50, 20, 50',
        'fnt-secondary': '100, 40, 100',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 90, 90',
        'tn-secondary': '235, 70, 70',
        'tn-tertiary': '253, 224, 239'
      },
      'Rose Pure': {
        dominantKey: 'rose',
        'bg-primary': '255, 192, 203',
        'bg-secondary': '255, 160, 180',
        'bg-tertiary': '255, 128, 150',
        'fnt-primary': '50, 30, 40',
        'fnt-secondary': '100, 60, 80',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 100, 120',
        'tn-secondary': '245, 90, 110',
        'tn-tertiary': '255, 213, 226'
      },
      'Cotton Candy': {
        dominantKey: 'rose',
        'bg-primary': '255, 200, 240',
        'bg-secondary': '255, 180, 220',
        'bg-tertiary': '255, 160, 200',
        'fnt-primary': '50, 30, 50',
        'fnt-secondary': '80, 50, 80',
        'fnt-active': '255, 255, 255',
        'tn-primary': '235, 130, 180',
        'tn-secondary': '225, 120, 170',
        'tn-tertiary': '255, 238, 250'
      },
      'Pastel Pink': {
        dominantKey: 'rose',
        'bg-primary': '255, 200, 200',
        'bg-secondary': '255, 180, 180',
        'bg-tertiary': '255, 160, 160',
        'fnt-primary': '50, 30, 30',
        'fnt-secondary': '80, 50, 50',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 150, 150',
        'tn-secondary': '245, 140, 140',
        'tn-tertiary': '255, 224, 234'
      },
      'Rose Quartz': {
        dominantKey: 'rose',
        'bg-primary': '255, 248, 250',
        'bg-secondary': '255, 228, 235',
        'bg-tertiary': '255, 208, 220',
        'fnt-primary': '45, 25, 35',
        'fnt-secondary': '85, 45, 65',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 105, 135',
        'tn-secondary': '255, 85, 115',
        'tn-tertiary': '255, 228, 236'
      },
      Candy: {
        dominantKey: 'rose',
        'bg-primary': '255, 245, 250',
        'bg-secondary': '255, 225, 240',
        'bg-tertiary': '250, 205, 230',
        'fnt-primary': '50, 25, 40',
        'fnt-secondary': '80, 50, 70',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 120, 180',
        'tn-secondary': '235, 100, 160',
        'tn-tertiary': '255, 250, 253'
      },
      'Aurora Day': {
        dominantKey: 'rose',
        'bg-primary': '245, 245, 250',
        'bg-secondary': '230, 235, 250',
        'bg-tertiary': '210, 220, 240',
        'fnt-primary': '20, 20, 40',
        'fnt-secondary': '60, 90, 130',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 100, 150',
        'tn-secondary': '200, 150, 180',
        'tn-tertiary': '255, 236, 249'
      },

      // === FAMILIA PÚRPURA/LAVANDA ===
      Lavender: {
        dominantKey: 'lavender',
        'bg-primary': '240, 230, 255',
        'bg-secondary': '220, 210, 245',
        'bg-tertiary': '200, 190, 235',
        'fnt-primary': '50, 30, 70',
        'fnt-secondary': '100, 80, 120',
        'fnt-active': '255, 255, 255',
        'tn-primary': '150, 100, 200',
        'tn-secondary': '130, 80, 180',
        'tn-tertiary': '233, 211, 255'
      },
      'Lilac Breeze': {
        dominantKey: 'lavender',
        'bg-primary': '245, 235, 255',
        'bg-secondary': '235, 215, 250',
        'bg-tertiary': '225, 195, 245',
        'fnt-primary': '50, 30, 70',
        'fnt-secondary': '80, 50, 110',
        'fnt-active': '255, 255, 255',
        'tn-primary': '180, 120, 230',
        'tn-secondary': '160, 100, 210',
        'tn-tertiary': '230, 212, 243'
      },
      // === FAMILIA AZUL ===
      'Icy Blue': {
        dominantKey: 'ice',
        'bg-primary': '180, 220, 255',
        'bg-secondary': '160, 200, 245',
        'bg-tertiary': '140, 180, 235',
        'fnt-primary': '20, 30, 50',
        'fnt-secondary': '40, 50, 70',
        'fnt-active': '255, 255, 255',
        'tn-primary': '0, 120, 240',
        'tn-secondary': '0, 100, 220',
        'tn-tertiary': '208, 231, 255'
      },
      // === FAMILIA VERDE ===
      Emerald: {
        dominantKey: 'forest',
        'bg-primary': '150, 220, 180',
        'bg-secondary': '120, 190, 150',
        'bg-tertiary': '90, 160, 120',
        'fnt-primary': '20, 50, 30',
        'fnt-secondary': '40, 80, 60',
        'fnt-active': '234, 255, 243',
        'tn-primary': '0, 150, 80',
        'tn-secondary': '0, 140, 70',
        'tn-tertiary': '200, 255, 229'
      },
      'Mint Fresh': {
        dominantKey: 'forest',
        'bg-primary': '240, 255, 245',
        'bg-secondary': '215, 245, 225',
        'bg-tertiary': '190, 235, 205',
        'fnt-primary': '15, 45, 25',
        'fnt-secondary': '35, 75, 50',
        'fnt-active': '20, 43, 29',
        'tn-primary': '81, 199, 127',
        'tn-secondary': '30, 160, 80',
        'tn-tertiary': '233, 255, 240'
      },
      'Tropical Breeze': {
        dominantKey: 'forest',
        'bg-primary': '230, 250, 245',
        'bg-secondary': '210, 240, 235',
        'bg-tertiary': '190, 230, 225',
        'fnt-primary': '20, 60, 50',
        'fnt-secondary': '40, 100, 80',
        'fnt-active': '11, 27, 22',
        'tn-primary': '80, 200, 160',
        'tn-secondary': '70, 190, 150',
        'tn-tertiary': '228, 255, 236'
      },
      // === FAMILIA NARANJA/DURAZNO ===
      'Sunrise Glow': {
        dominantKey: 'orange',
        'bg-primary': '255, 200, 150',
        'bg-secondary': '255, 180, 120',
        'bg-tertiary': '255, 160, 90',
        'fnt-primary': '50, 30, 10',
        'fnt-secondary': '80, 50, 20',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 100, 50',
        'tn-secondary': '255, 205, 205',
        'tn-tertiary': '255, 238, 238'
      },
      Citrus: {
        dominantKey: 'orange',
        'bg-primary': '250, 250, 200',
        'bg-secondary': '255, 200, 150',
        'bg-tertiary': '240, 150, 100',
        'fnt-primary': '50, 50, 50',
        'fnt-secondary': '100, 50, 0',
        'fnt-active': '255, 255, 255',
        'tn-primary': '200, 100, 0',
        'tn-secondary': '255, 165, 0',
        'tn-tertiary': '255, 239, 209'
      },
      'Sunny Meadow': {
        dominantKey: 'orange',
        'bg-primary': '245, 255, 240',
        'bg-secondary': '230, 245, 220',
        'bg-tertiary': '210, 235, 200',
        'fnt-primary': '30, 40, 30',
        'fnt-secondary': '80, 100, 60',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 153, 10',
        'tn-secondary': '180, 220, 90',
        'tn-tertiary': '247, 255, 230'
      },
      'Golden Hour': {
        dominantKey: 'orange',
        'bg-primary': '255, 250, 240',
        'bg-secondary': '255, 235, 200',
        'bg-tertiary': '250, 220, 160',
        'fnt-primary': '55, 45, 25',
        'fnt-secondary': '85, 70, 45',
        'fnt-active': '30, 28, 25',
        'tn-primary': '255, 180, 60',
        'tn-secondary': '235, 160, 40',
        'tn-tertiary': '255, 253, 248'
      },
      Almond: {
        dominantKey: 'skin',
        'bg-primary': '255, 235, 205',
        'bg-secondary': '245, 225, 195',
        'bg-tertiary': '235, 215, 185',
        'fnt-primary': '80, 60, 40',
        'fnt-secondary': '120, 80, 60',
        'fnt-active': '255, 255, 255',
        'tn-primary': '210, 150, 100',
        'tn-secondary': '190, 140, 90',
        'tn-tertiary': '255, 226, 202'
      }
    }
  },
  chaotic: {
    Icon: ZapIcon,
    styles: {
      'Synth wave 84': {
        dominantKey: 'chaotic-purple',
        'bg-primary': '8, 8, 25',
        'bg-secondary': '18, 18, 35',
        'bg-tertiary': '28, 28, 45',
        'fnt-primary': '255, 100, 255',
        'fnt-secondary': '100, 240, 255',
        'fnt-active': '255, 255, 255',
        'tn-primary': '172, 9, 255',
        'tn-secondary': '220, 90, 180',
        'tn-tertiary': '255, 228, 255'
      },
      Neon: {
        dominantKey: 'chaotic-forest',
        'bg-primary': '8, 8, 8',
        'bg-secondary': '18, 18, 18',
        'bg-tertiary': '28, 28, 28',
        'fnt-primary': '0, 255, 100',
        'fnt-secondary': '0, 200, 255',
        'fnt-active': '255, 255, 255',
        'tn-primary': '227, 64, 184',
        'tn-secondary': '0, 255, 255',
        'tn-tertiary': '255, 217, 245'
      },
      Electric: {
        dominantKey: 'chaotic-turquoise',
        'bg-primary': '5, 5, 15',
        'bg-secondary': '15, 15, 25',
        'bg-tertiary': '25, 25, 35',
        'fnt-primary': '0, 255, 255',
        'fnt-secondary': '255, 0, 255',
        'fnt-active': '0, 0, 0',
        'tn-primary': '255, 255, 0',
        'tn-secondary': '0, 255, 128',
        'tn-tertiary': '202, 255, 255'
      },
      // === NUEVOS TEMAS CAÓTICOS ===
      'Laser Grid': {
        dominantKey: 'chaotic-passion',
        'bg-primary': '12, 5, 20',
        'bg-secondary': '22, 15, 30',
        'bg-tertiary': '35, 25, 45',
        'fnt-primary': '255, 0, 128',
        'fnt-secondary': '0, 255, 255',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 20, 147',
        'tn-secondary': '0, 255, 200',
        'tn-tertiary': '255, 199, 229'
      },
      Hologram: {
        dominantKey: 'chaotic-forest',
        'bg-primary': '10, 15, 10',
        'bg-secondary': '20, 25, 20',
        'bg-tertiary': '30, 40, 30',
        'fnt-primary': '0, 255, 150',
        'fnt-secondary': '100, 255, 255',
        'fnt-active': '0, 0, 0',
        'tn-primary': '50, 255, 50',
        'tn-secondary': '0, 200, 200',
        'tn-tertiary': '240, 255, 250'
      },
      'Rave Night': {
        dominantKey: 'chaotic-purple-yellow',
        'bg-primary': '0, 0, 30',
        'bg-secondary': '20, 0, 50',
        'bg-tertiary': '40, 20, 70',
        'fnt-primary': '255, 255, 0',
        'fnt-secondary': '255, 0, 255',
        'fnt-active': '0, 0, 0',
        'tn-primary': '0, 255, 255',
        'tn-secondary': '255, 100, 255',
        'tn-tertiary': '255, 255, 184'
      },
      'Cosmic Storm': {
        dominantKey: 'chaotic-purple',
        'bg-primary': '5, 0, 20',
        'bg-secondary': '15, 10, 40',
        'bg-tertiary': '25, 20, 60',
        'fnt-primary': '255, 100, 255',
        'fnt-secondary': '100, 255, 255',
        'fnt-active': '255, 255, 255',
        'tn-primary': '255, 0, 128',
        'tn-secondary': '128, 255, 255',
        'tn-tertiary': '255, 248, 255'
      },
      Vaporwave: {
        dominantKey: 'chaotic-purple',
        'bg-primary': '30, 15, 45',
        'bg-secondary': '50, 25, 65',
        'bg-tertiary': '70, 35, 85',
        'fnt-primary': '255, 255, 0',
        'fnt-secondary': '255, 0, 200',
        'fnt-active': '255, 255, 255',
        'tn-primary': '0, 255, 255',
        'tn-secondary': '255, 100, 255',
        'tn-tertiary': '255, 255, 245'
      },
      'Electric Sunset': {
        dominantKey: 'chaotic-purple-yellow',
        'bg-primary': '40, 0, 20',
        'bg-secondary': '60, 10, 30',
        'bg-tertiary': '80, 20, 45',
        'fnt-primary': '255, 255, 0',
        'fnt-secondary': '255, 0, 255',
        'fnt-active': '0, 0, 0',
        'tn-primary': '227, 227, 55',
        'tn-secondary': '0, 255, 200',
        'tn-tertiary': '255, 255, 240'
      }
    }
  }
} as const
