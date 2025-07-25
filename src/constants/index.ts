import {
  BadgeInfoIcon,
  BookOpenIcon,
  CopyIcon,
  CuboidIcon,
  FileBadgeIcon,
  GlobeIcon,
  LayersIcon,
  LayoutIcon,
  RocketIcon,
  UserIcon,
  VenetianMaskIcon
} from 'lucide-react'

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
      path: '/projects',
      label: 'Proyectos',
      image: '/assets/pages/projects.webp',
      Icon: RocketIcon,
      isCompleted: true
    },
    {
      path: '/achievements',
      label: 'Certificados y Títulos',
      image: '/assets/pages/achievements.webp',
      Icon: FileBadgeIcon,
      isCompleted: true
    },
    {
      path: '/webs',
      label: 'Páginas web',
      image: '/assets/pages/webs.webp',
      Icon: GlobeIcon,
      isCompleted: false
    },
    {
      path: '/attribution',
      label: 'Atribuciones',
      image: '/assets/pages/attribution.webp',
      Icon: BadgeInfoIcon,
      isCompleted: false
    },
    {
      path: '/about',
      label: 'Acerca de mí',
      image: '/assets/pages/about.webp',
      Icon: UserIcon,
      isCompleted: true
    },

    {
      path: '/blog',
      label: 'Blog',
      image: '/assets/pages/blog.webp',
      Icon: BookOpenIcon,
      isCompleted: true
    },

    {
      path: '/stack',
      label: 'Stack',
      image: '/assets/pages/stack.webp',
      Icon: LayersIcon,
      isCompleted: false
    },

    {
      path: '/templates',
      label: 'Plantillas',
      image: '/assets/pages/templates.webp',
      Icon: CopyIcon,
      isCompleted: false
    }
  ]
} as const

export const LINK_GROUPS = [
  {
    title: 'General',
    icon: LayoutIcon,
    links: APP.pages.filter(page => ['/', '/blog', '/projects', '/shorts', '/about'].includes(page.path)),
    className: 'footer-generalLinks'
  },
  {
    title: 'Extras',
    icon: VenetianMaskIcon,
    links: APP.pages.filter(page => ['/stack', '/attribution'].includes(page.path)),
    className: 'footer-extraLinks'
  },
  {
    title: 'Recursos',
    icon: CuboidIcon,
    links: APP.pages.filter(page => ['/webs', '/templates'].includes(page.path)),
    className: 'footer-resources'
  }
]
