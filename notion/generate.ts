import notion from './api';
import { env } from './constants';
import { generateNotes } from './generate/generateNotes';
import { getAllMarksDB } from './utils/getAllMarks';





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

export const getAllNotes = async () => {
  const seriesDB = await getAllMarksDB<NotionSeriesDB>({ dbID: env.SERIES_ID })
  console.time('<<< Cargando apuntes')
  const response = await notion.databases.query({
    database_id: env.SERIES_ID,
    filter: {
      and: [
        {
          property: 'Grupo',
          status: {
            equals: 'Apuntes'
          }
        },
        {
          property: 'Visibilidad',
          status: {
            equals: 'Portafolio'
          }
        }
      ]
    }
  })

  // await generateNotes(response.results)

  console.timeEnd('<<< Apuntes cargados')
  console.log(response)
}