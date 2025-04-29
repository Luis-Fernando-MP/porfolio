import { env } from '../../notion/constants.ts'
import type { NotionGroupSerie, NotionSeriesDB } from '../types/series.type.ts'
import { getAllMarksDB } from '../utils/getAllMarks.ts'

export const getGroupOfSeries = async () => {
  const seriesDB = await getAllMarksDB<NotionSeriesDB>({ dbID: env.SERIES_ID })

  type GroupOfSeries = Record<NotionGroupSerie, NotionSeriesDB[]>

  const groupOfSeries: GroupOfSeries = seriesDB
    .filter(({ properties: { Visibilidad } }) => Visibilidad.status?.name === 'Portafolio')
    .map(serie => {
      const { properties } = serie
      if (properties.Grupo.status.name !== 'Series') return serie
      return { ...serie, folder: properties.Folder.select?.name }
    })
    .reduce<GroupOfSeries>((acc, mark) => {
      const category = mark.properties.Grupo.status.name
      acc[category] ??= []
      acc[category].push(mark)
      return acc
    }, {} as any)

  return groupOfSeries
}
