import type { MdxContentProps } from '@notion/utils/generateBlock'

import { imageContentStr } from '../imageContentStr'
import { NotionProjectsDB } from './projects.type'

export const projectContent = (project: NotionProjectsDB, coverUrl: string | undefined, contentProps: MdxContentProps) => {
  const { id, properties, created_time } = project
  const title = properties.Name.title[0].plain_text

  const { Prioridad, Equipo, Progreso, Estado } = properties
  const lastEditedTime = properties['Última edición'].last_edited_time

  const { imageProps, readingTime, words } = contentProps
  const imagePropsStr = imageContentStr(imageProps, 'project', coverUrl ? id : undefined)

  return `---
id: '${id}'
title: '${title}'
reading_time: ${readingTime ?? 30}
words: ${words ?? 0}

prioridad: '${Prioridad?.select?.name ?? ''}'
equipo: '${Equipo?.select?.name ?? ''}'
progreso: ${Progreso?.number ?? 0}
estado: '${Estado?.status?.name ?? ''}'

${imagePropsStr}

created_time: '${created_time}'
last_edited_time: '${lastEditedTime}'
---`
}
