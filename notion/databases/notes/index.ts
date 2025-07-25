import { env } from '@notion/constants'
import type { NotionGroupVisibility } from '@notion/types/notion.type'
import type { NotionGroup, NotionSeriesDB } from '@notion/types/series.type'
import cleanObsoleteFiles from '@notion/utils/cleanObsoleteFiles'
import { createDirectories } from '@notion/utils/fs'
import { generateBlock } from '@notion/utils/generateBlock'
import { getAllMarksDB } from '@notion/utils/getAllMarks'
import clog from '@notion/utils/log'

import { noteContent } from './content'

export const generateNotes = async () => {
  try {
    clog.block('GENERANDO APUNTES')
    const startAll = Date.now()

    clog.info('Cargando apuntes desde Notion...')
    const books = await getAllMarksDB<NotionSeriesDB>({
      query: {
        database_id: env.SERIES_ID,
        filter: {
          and: [
            { property: 'Grupo', status: { equals: 'Apuntes' as NotionGroup } },
            { property: 'Visibilidad', status: { equals: 'Portafolio' as NotionGroupVisibility } }
          ]
        }
      }
    })

    clog.success(`${books.length} apuntes cargados\n`)

    const [mdxFolderPath, mdxImagesPath] = await createDirectories('content/notes', 'public/content/notes')

    const generatedIds = await Promise.all(
      books.map(async book => {
        const { id, cover } = book
        const coverUrl = cover?.external.url

        await generateBlock({
          blockId: id,
          coverImage: coverUrl,
          lastEditedTime: book.properties['Última edición'].last_edited_time,
          mdxFolderPath,
          mdxImagesPath,
          title: book.properties.Name.title[0].plain_text,
          mdxContent: imageProps => noteContent(book, coverUrl, imageProps)
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
  } catch {
    clog.error('Error generando libros:')
  }
}
