import dayjs from 'dayjs'

export const certificates = [
  {
    grade: 'Certificado de Ingeniero de software',
    medium: 'Universidad Tecnológica del Perú - Huancayo, Perú',
    date: '2026',
    image: '/certificates/utp-ing.png',
    priority: 'high',
    blurHash: 'MBF~dT0K~q4nIUkV?bt7%g%M_39FD%t7M{',
    tags: ['Título', 'Desarrollo web', 'Software']
  },
  {
    grade: 'Técnico en Diseño y Programación Web',
    medium: 'Instituto tecnológico de Cajas - Lima, Perú',
    date: '2021',
    image: '/certificates/dpw.png',
    blurHash: 'MBF~dT0K~q4nIUkV?bt7%g%M_39FD%t7M{',
    priority: 'high',
    tags: ['Título', 'Desarrollo web']
  },
  {
    grade: 'Certificado estudio en base de datos',
    medium: 'Udemy - Marcos Salazar',
    date: '2025',
    image: '/certificates/udemy-salazar.png',
    blurHash: 'MBF~dT0K~q4nIUkV?bt7%g%M_39FD%t7M{',
    priority: 'medium',
    tags: ['Udemy', 'Certificado', 'Base de datos']
  }
]

export const relevantCertificates = certificates
  .filter(c => c.priority === 'high')
  .toSorted((a, b) => {
    const aD = dayjs(a.date)
    const bD = dayjs(b.date)

    // a es más reciente que b
    if (aD.isAfter(bD)) {
      return -1
    }

    // a es más antigua que b
    if (aD.isBefore(bD)) {
      return 1
    }

    // son iguales
    return 0
  })

