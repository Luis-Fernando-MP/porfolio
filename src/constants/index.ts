import { BookOpenIcon, GaugeIcon, RocketIcon, UserIcon } from 'lucide-react'

export enum DEV_MODE {
  PROD = 'production',
  DEV = 'development'
}
export const DEV_ENV = process.env.NODE_ENV ?? DEV_MODE.DEV

export const INFO = {
  devName: 'Haui dev',
  devShortName: 'Haui',
  name: 'Luis Fernando Melgar Pizarro',
  working: {
    state: false,
    enterprise: ''
  },
  mail: 'mailto:luigfmp@gmail.com',
  phone: '958978370',
  linked_in: 'https://www.linkedin.com/in/luigfmp/',
  github: 'https://github.com/Luis-Fernando-MP',
  figma: 'https://www.figma.com/@luigfmp',
  cv: 'https://luigfmp.github.io/cv/'
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
      label: 'Acerca de mi',
      image: '/assets/pages/about.webp',
      Icon: UserIcon
    }
  ]
}

export const backgroundImages = [
  { path: '/assets/backgrounds/1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' },
  { path: '/assets/backgrounds/2.webp', hash: 'LQJl4#Nyo~t-_MEQogXUx,EkjDWU' }
]
