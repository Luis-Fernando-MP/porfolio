import { env } from '@notion/constants'
import { generateBlock } from '@notion/generateBlock'
import clog from '@notion/helpers/log'
import { NotionSeriesDB } from '@notion/types/series.type'
import cleanObsoleteFiles from '@notion/utils/cleanObsoleteFiles'
import { getAllMarksDB } from '@notion/utils/getAllMarks'
import fs from 'fs'
import path from 'path'

export const generateNotes = async () => {
  clog.block('GENERACIÓN DE APUNTES')

  const startAll = Date.now()
  const startNotes = Date.now()
  clog.info('Cargando apuntes desde Notion...')

  const notes = await getAllMarksDB<NotionSeriesDB>({
    query: {
      database_id: env.SERIES_ID,
      filter: {
        and: [
          { property: 'Grupo', status: { equals: 'Apuntes' } },
          { property: 'Visibilidad', status: { equals: 'Portafolio' } }
        ]
      }
    }
  })

  clog.timer('Tiempo de carga de apuntes', Date.now() - startNotes, '\n')
  clog.success(`${notes.length} apuntes cargados\n`)

  const cwd = process.cwd()
  const mdxFolderPath = path.join(cwd, 'content/notes')
  const mdxImagesPath = path.join(cwd, 'public/marks/notes')

  await Promise.all([
    fs.promises.mkdir(mdxFolderPath, { recursive: true }),
    fs.promises.mkdir(mdxImagesPath, { recursive: true })
  ])

  const generatedIds: string[] = []

  for (const note of notes) {
    const { properties, id, cover } = note
    const title = note.properties.Name.title[0].plain_text
    const lastEditedTime = properties['Última edición'].last_edited_time

    await generateBlock({
      blockId: id,
      coverImage: cover?.external.url,
      lastEditedTime,
      mdxFolderPath,
      mdxImagesPath,
      title,

      // Resultado
      mdxContent: ({ blurhash, placeholder, width, height }) => {
        return `---
        id: '${note.id}'
        title: '${title}'

        banner: ${cover ? `'/marks/notes/${id}/banner.webp'` : "''"}
        thumb: ${cover ? `'/marks/notes/${id}/thumb.webp'` : "''"}
        image_width: ${width}
        image_height: ${height}
        image_hash: '${blurhash}'
        image_blur: '${placeholder}'
        
        created_time: '${note.created_time}'
        last_edited_time: '${lastEditedTime}'
        ---`.replaceAll('  ', '')
      }
    })
    generatedIds.push(id)
  }

  clog.block('LIMPIEZA DE ARCHIVOS OBSOLETOS')
  await cleanObsoleteFiles(generatedIds, mdxFolderPath, '.mdx')
  await cleanObsoleteFiles(generatedIds, mdxImagesPath)

  clog.timer('Tiempo total de limpieza', Date.now() - startAll)
}
