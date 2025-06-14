import { BookOpenIcon, GaugeIcon, RocketIcon, UserIcon } from 'lucide-react'

import { ThemeColorKeys } from './themes'

export enum DEV_MODE {
  PROD = 'production',
  DEV = 'development'
}
export const DEV_ENV = process.env.NODE_ENV ?? DEV_MODE.DEV

export const INFO = {
  devName: 'Haui dev',
  devShortName: 'Haui',
  name: 'Luis Fernando',
  fullName: 'Luis Fernando Melgar Pizarro',
  working: {
    state: false,
    enterprise: ''
  },
  mail: 'mailto:luigfmp@gmail.com',
  phone: '958978370',
  linked_in: 'https://www.linkedin.com/in/luigfmp/',
  github: 'https://github.com/Luis-Fernando-MP',
  figma: 'https://www.figma.com/@luigfmp',
  cv: 'https://luigfmp.github.io/cv/',
  resumeAbout: 'Desarrollador y diseñador de aplicaciones full stack',
  hobbies: ['Estudiar', 'Leer', 'Entrenar', 'Programar', 'Investigar', 'Gatos', 'Hamsters', 'Músicas', 'Meditar']
}

export const APP = {
  pages: [
    {
      path: '/blog',
      label: 'Blog',
      image: '/assets/pages/blog.webp',
      Icon: BookOpenIcon
    },
    {
      path: '/shorts',
      label: 'Shorts',
      image: '/assets/pages/shorts.webp',
      Icon: GaugeIcon
    },
    {
      path: '/projects',
      label: 'Proyectos',
      image: '/assets/pages/projects.webp',
      Icon: RocketIcon
    },
    {
      path: '/about',
      label: 'Sobre mi',
      image: '/assets/pages/about.webp',
      Icon: UserIcon
    }
  ]
} as const

type BackgroundImage = { path: string; hash: string }

export const themeBackgroundImages: Record<ThemeColorKeys, BackgroundImage[]> = {
  // Default theme
  'dev dark': [
    // { path: '/assets/backgrounds/ice1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
  ],
  'dev light': [],
  rebeccapurple: [],

  // Dark themes
  'Dark Slate': [],
  Midnight: [],
  Carbon: [],
  'Aurora Forest': [],
  Red: [],
  StarryNight: [],
  Nebula: [],
  Velvet: [],
  'Royal Purple': [],
  'Twilight Pink': [],
  'Volcanic Magma': [],
  'Cherry Blossom': [],

  // Light themes
  'Passionate Red': [],
  'Candy Bright': [],
  'Rose Pure': [],
  'Cotton Candy': [],
  'Pastel Pink': [],
  'Rose Quartz': [],
  Candy: [],
  'Aurora Day': [],
  Lavender: [],
  'Lilac Breeze': [],
  'Icy Blue': [],
  Emerald: [],
  'Mint Fresh': [],
  'Tropical Breeze': [],
  'Sunrise Glow': [],
  Citrus: [],
  'Sunny Meadow': [],
  'Golden Hour': [],
  Almond: [],

  // Chaotic themes
  'Synth wave 84': [],
  Neon: [],
  Electric: [],
  'Laser Grid': [],
  Hologram: [],
  'Rave Night': [],
  'Cosmic Storm': [],
  Vaporwave: [],
  'Electric Sunset': []
}
