import { env } from '@notion/constants'
import type { NotionGroupVisibility } from '@notion/types/notion.type'
import cleanObsoleteFiles from '@notion/utils/cleanObsoleteFiles'
import { createDirectories } from '@notion/utils/fs'
import { generateBlock } from '@notion/utils/generateBlock'
import { getAllMarksDB } from '@notion/utils/getAllMarks'
import clog from '@notion/utils/log'

import { NotionSeriesDB } from './series.type'
import { serieContent } from './str.content'

export const generateSeries = async () => {
  try {
    clog.block('GENERANDO SERIES')
    const startAll = Date.now()

    clog.info('Cargando series desde Notion...')
    const series = await getAllMarksDB<NotionSeriesDB>({
      query: {
        database_id: env.SERIES_ID,
        filter: {
          property: 'Visibilidad',
          status: { equals: 'Portafolio' as NotionGroupVisibility }
        }
      }
    })

    clog.success(`${series.length} series cargadas\n`)

    const [mdxFolderPath, mdxImagesPath] = await createDirectories('content/series', 'public/content/series')

    const generatedIds = await Promise.all(
      series.map(async serie => {
        const { id, cover } = serie
        const coverUrl = cover?.external.url

        await generateBlock({
          blockId: id,
          coverImage: coverUrl,
          lastEditedTime: serie.properties['Última edición'].last_edited_time,
          mdxFolderPath,
          mdxImagesPath,
          title: serie.properties.Name.title[0].plain_text,
          generateContent: false,
          mdxContent: imageProps => serieContent(serie, coverUrl, imageProps)
        })

        return id
      })
    )

    clog.block('LIMPIEZA DE ARCHIVOS OBSOLETOS')
    await Promise.all([
      // Elimina los mdx que no existen en notion
      cleanObsoleteFiles(generatedIds, mdxFolderPath, '.mdx'),
      // Elimina los carpetas de imágenes que no existen
      cleanObsoleteFiles(generatedIds, mdxImagesPath)
    ])
    clog.timer('Tiempo total de limpieza', Date.now() - startAll)
  } catch (e: any) {
    clog.error('Error generando libros:')
    console.log(e?.message ?? e)
  }
}
