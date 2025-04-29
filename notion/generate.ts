import { generateNotes } from './generate/generateNotes.ts'
import { generateSerie } from './generate/generateSerie.ts'
import { getGroupOfMarks } from './groups/marks.groups.ts'
import { getGroupOfSeries } from './groups/series.groups.ts'

const processMarks = async () => {
  const { Series, Apuntes } = await getGroupOfSeries()
  const marksDB = await getGroupOfMarks()

  await generateNotes(Apuntes)

  const groupOfSeries = Series.map(serie => {
    if (!serie.folder || !(serie.folder in marksDB)) return { ...serie, marks: [] }
    return {
      ...serie,
      marks: marksDB[serie.folder]
    }
  })

  for (const group of groupOfSeries) {
    await generateSerie(group)
  }
}

const generateData = async () => {
  try {
    await processMarks()
  } catch (error) {
    console.error('Error al procesar las marcas:', error)
  }
}

generateData()
