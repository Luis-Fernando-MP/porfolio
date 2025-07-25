import { env } from '@notion/constants'
import type { NotionSeriesDB } from '@notion/types/series.type'
import cleanObsoleteFiles from '@notion/utils/cleanObsoleteFiles'
import { createDirectories } from '@notion/utils/fs'
import { generateBlock } from '@notion/utils/generateBlock'
import { getAllMarksDB } from '@notion/utils/getAllMarks'
import clog from '@notion/utils/log'

import { projectContent } from './content'

export const generateProjects = async () => {
  try {
    clog.block('GENERANDO PROYECTOS')
    const startAll = Date.now()

    clog.info('Cargando proyectos desde Notion...')
    const projects = await getAllMarksDB<NotionSeriesDB>({
      query: {
        database_id: env.PROJECTS_ID,
        filter: {
          and: [
            { property: 'Estado', status: { equals: 'Completado' } },
            { property: 'Progreso', number: { greater_than_or_equal_to: 0.8 } }
          ]
        }
      }
    })

    clog.success(`${projects.length} proyectos cargados\n`)

    const [mdxFolderPath, mdxImagesPath] = await createDirectories('content/projects', 'public/content/projects')

    const generatedIds = await Promise.all(
      projects.map(async project => {
        const { id, cover } = project
        const coverUrl = cover?.external.url

        await generateBlock({
          blockId: id,
          coverImage: coverUrl,
          lastEditedTime: project.properties['Última edición'].last_edited_time,
          mdxFolderPath,
          mdxImagesPath,
          title: project.properties.Name.title[0].plain_text,
          mdxContent: imageProps => projectContent(project, coverUrl, imageProps)
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
    clog.error('Error generando los proyectos:')
  }
}
