import { BookOpenIcon, GaugeIcon, RocketIcon, UserIcon } from 'lucide-react'
import path from 'path'

import { DominantKey } from './themes'

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

export type ThemeBackgroundImages = keyof typeof themeBackgroundImages
type BackgroundImage = { path: string; hash: string }

export const themeBackgroundImages: Record<DominantKey, BackgroundImage[]> = {
  ice: [{ path: '/assets/backgrounds/1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }],
  red: [
    { path: '/assets/backgrounds/2.webp', hash: 'LXM#wu9u58bc~CWoRPX8K%e.MykC' },
    { path: '/assets/backgrounds/3.webp', hash: 'LpLol|_$KQS~t6NHS#s,R+X7smnl' }
  ],
  forest: [],
  lavender: [],
  orange: [],
  pink: [],
  rose: [],
  skin: [],
  slate: [],
  'chaotic-forest': [],
  'chaotic-passion': [],
  'chaotic-purple': [],
  'chaotic-purple-yellow': [{ path: '/assets/backgrounds/4.webp', hash: 'LNJZ*d9a}iOtbeIW59Rk#%krV[IU' }],
  'chaotic-turquoise': []
}
