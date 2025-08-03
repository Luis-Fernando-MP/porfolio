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

export const personalJourneys = {
  'Mis inicios': {
    id: 'jny-00003',
    text: '<p>Mi camino comenzó en 2021, cuando obtuve el título de <b>Técnico en Diseño y Programación de Aplicaciones Web</b>. Desde entonces, he seguido formándome y actualmente curso el séptimo ciclo de la carrera de <b>Ingeniería de Software</b> en la Universidad Tecnológica del Perú.</p>',
    date: '2025-01',
    images: [
      {
        url: '/backgrounds/candy/1.webp',
        alt: 'string',
        caption: 'string',
        blurHash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns'
      }
    ]
  },
  'Mi caos': {
    id: 'jny-00002',
    text: '<p>No sé lidiar ni con lo normal ni con lo perfecto. Solo soy, y cada proyecto que toco lo sabe. Si puedo mejorarlo, transformarlo o reinventarlo… lo haré. Para eso están mis manitas.</p>',
    date: '2024-05',
    images: []
  },
  'Mi forma de ser': {
    id: 'jny-00001',
    text: `<p>Me encantan las mascotas. <b>A veces me paso el día admirando los grandes pelos de un gato o el inmenso corazón que puede llegar a tener un hámster.</b></p>
    <p>Me encuentro en sintonía con el mundo, porque este es un encargo; una constante que permanecerá entre mis particularidades, un bug que no resolveré y un deploy que permanecerá perpetuo… aun si es viernes.</p>
    <p>Te voy a contar un secreto <b><i>“Para mi, programar es lo más cerca que he estado de una carta de despedida que nunca supe cómo escribir”<i></b></p>
    <p>Si has llegado hasta aquí… algún día deberíamos tomarnos un café, Yo invito</p>`,
    date: '2022-06-17',
    images: []
  }
} as const
export type PersonalJourney = (typeof personalJourneys)[keyof typeof personalJourneys]
