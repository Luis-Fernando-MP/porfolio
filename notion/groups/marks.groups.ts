import { env } from '../../notion/constants.ts'
import type { NotionMarksDB } from '../types/marks.type.ts'
import { getAllMarksDB } from '../utils/getAllMarks.ts'

export const getGroupOfMarks = async () => {
  const marksDB = await getAllMarksDB<NotionMarksDB>({ dbID: env.MARKS_ID })

  const groupOfSeries = marksDB
    .filter(({ properties: { Visibilidad } }) => Visibilidad.status?.name === 'Portafolio')
    .reduce<Record<string, NotionMarksDB[]>>((acc, mark) => {
      const category = mark.properties.Folder.select?.name
      if (!category) return acc
      acc[category] ??= []
      acc[category].push(mark)
      return acc
    }, {})

  return groupOfSeries
}
