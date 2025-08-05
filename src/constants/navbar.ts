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

export const PAGES = {
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
    links: PAGES.pages.filter(page => ['/blog', '/projects', '/shorts', '/about'].includes(page.path)),
    className: 'footer-generalLinks'
  },
  {
    title: 'Extras',
    icon: VenetianMaskIcon,
    links: PAGES.pages.filter(page => ['/stack', '/attribution'].includes(page.path)),
    className: 'footer-extraLinks'
  },
  {
    title: 'Recursos',
    icon: CuboidIcon,
    links: PAGES.pages.filter(page => ['/webs', '/templates'].includes(page.path)),
    className: 'footer-resources'
  }
]
