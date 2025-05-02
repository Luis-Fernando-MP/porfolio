import notion from './api'
import { env } from './constants'
import { generateNotes } from './generate/generateNotes'
import type { NotionSeriesDB } from './types/series.type'
import { getAllMarksDB } from './utils/getAllMarks'

// import { generateNotes } from './generate/generateNotes'
// import { generateSerie } from './generate/generateSerie'
// import { getGroupOfMarks } from './groups/marks.groups'
// import { getGroupOfSeries } from './groups/series.groups'

// const processMarks = async () => {
//   const { Series, Apuntes } = await getGroupOfSeries()
//   const marksDB = await getGroupOfMarks()

//   await generateNotes(Apuntes)

//   const groupOfSeries = Series.map(serie => {
//     if (!serie.folder || !(serie.folder in marksDB)) return { ...serie, marks: [] }
//     return {
//       ...serie,
//       marks: marksDB[serie.folder]
//     }
//   })

//   for (const group of groupOfSeries) {
//     await generateSerie(group)
//   }
// }
