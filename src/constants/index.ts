export enum DEV_MODE {
  PROD = 'production',
  DEV = 'development'
}

export const INFO = {
  devName: 'Haui dev',
  devShortName: 'Haui',
  name: 'Luis Fernando',
  fullName: 'Luis Fernando Melgar Pizarro',
  working: {
    state: false,
    enterprise: ''
  },
  mail: 'luigfmp@gmail.com',
  phone: '958978370',
  linked_in: 'https://www.linkedin.com/in/luigfmp/',
  github: 'https://github.com/Luis-Fernando-MP',
  figma: 'https://www.figma.com/@luigfmp',
  cv: 'https://luigfmp.github.io/cv/',
  resumeAbout: 'Desarrollador y diseñador de aplicaciones full stack',
  hobbies: ['Estudiar', 'Leer', 'Entrenar', 'Programar', 'Investigar', 'Gatos', 'Hamsters', 'Músicas', 'Meditar']
} as const

export type JourneysImage = {
  src: string
  caption?: string
  action?: string
  actionText?: string
}

export const personalJourneys = {
  'Mis inicios': {
    id: 'jny-00003',
    text: '<p>Mi camino comenzó en 2021, cuando obtuve el título de <strong>Técnico en Diseño y Programación de Aplicaciones Web</strong>. Desde entonces, he seguido formándome y actualmente curso el séptimo ciclo de la carrera de <strong>Ingeniería de Software</strong> en la Universidad Tecnológica del Perú.</p>',
    date: '2025-01',
    images: [
      {
        src: '/content/projects/20d98397-f7fa-80ed-ae15-d5e783a9ee85/banner.webp',
        caption: 'Ilustración de un camino rosado con árboles, simbolizando el inicio de un viaje formativo'
      },

      {
        src: '/backgrounds/candy/2.webp',
        action: '/about'
      }
    ] as JourneysImage[]
  },
  'Mi desorden': {
    id: 'jny-00002',
    text: '<p>No sé lidiar ni con lo normal ni con lo perfecto. Solo soy, y cada proyecto que toco lo sabe. Si puedo mejorarlo, transformarlo o reinventarlo… lo haré. Para eso están mis manitas.</p>',
    date: '2024-05',
    images: [
      {
        src: '/backgrounds/candy/1.webp',
        caption: '<h5>Así comenzó mi camino en el mundo del desarrollo web, lleno de curiosidad y sueños</h5>',
        action: '/about'
      }
    ]
  },
  'Mi forma de ser': {
    id: 'jny-00001',
    text: `<p>Me encantan las mascotas. <strong>A veces me paso el día admirando los grandes pelos de un gato o el inmenso corazón que puede llegar a tener un hámster.</strong></p>
    <p>Me encuentro en sintonía con el mundo, porque este es mi encargo; es mi constante que permanecerá entre mis particularidades, un bug que no resolveré y un deploy que permanecerá perpetuo… aun si es viernes.</p>
    <p>Te voy a contar un secreto <strong><em><q>Para mi, programar es escribir una carta despedida.</q></em></strong></p>
    <p>Si has llegado hasta aquí… algún día deberíamos tomarnos un café, Yo invito</p>`,
    date: '2022-06-17',
    images: []
  }
} as const
export type PersonalJourney = (typeof personalJourneys)[keyof typeof personalJourneys]
