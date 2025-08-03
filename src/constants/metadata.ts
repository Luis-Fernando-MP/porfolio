import { INFO } from '.'

export const metadataByPage = {
  home: {
    title: `👋 Hola, soy ${INFO.devShortName}`,
    description: `Hola soy ${INFO.name} pero dime ${INFO.devShortName}, soy un desarrollador de aplicaciones apasionado por crear soluciones innovadoras, estaré encantado de trabajar contigo`,
    keywords: `Portafolio, Desarrollador Web, Full Stack, ${INFO.fullName}, ${INFO.devName}, dev, programador, lima, Perú`
  },
  about: {
    title: `🙌 Sobre mí - ${INFO.devName}`,
    description: `Hola, soy ${INFO.fullName}, pero dime ${INFO.devShortName}. Soy desarrollador Full Stack y Diseñador UI, fascinado de crear interfaces intuitivas y sistemas útiles para la comunidad de desarrolladores. Conoce más sobre mí...`
  },
  projects: {
    title: `🚀 Mis proyectos - ${INFO.devName}`,
    description:
      'Estos son algunos de los proyectos en los que he trabajado. Desarrollo soluciones web con un enfoque práctico, combinando backend, frontend y diseño UI.'
  },
  blog: {
    title: `✍️ Mi blog - ${INFO.devName}`,
    description:
      'Un espacio donde comparto ideas, experiencias y recursos sobre desarrollo, diseño, productividad y cosas que me interesan del mundo tech.',
    keywords: `blog tech, diseño UI, desarrollo web, productividad, ${INFO.devShortName}, ${INFO.name}, programación, recursos dev`
  }
} as const
