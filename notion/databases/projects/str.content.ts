import type { MdxContentProps } from '@notion/utils/generateBlock'

import { additionalImagesStr, imageContentStr } from '../imageContentStr'
import { NotionProjectsDB } from './projects.type'

export const projectContent = (project: NotionProjectsDB, coverUrl: string | undefined, contentProps: MdxContentProps) => {
  const { id, properties, created_time } = project
  const title = properties.Name.title[0].plain_text

  const { Prioridad, Equipo, Progreso, Tags, Logo, Estado, Github, Notion, Website, Figma, Relevancia, Resumen } = properties
  const lastEditedTime = properties['Última edición'].last_edited_time

  const { imageProps, readingTime, words, additionalImages = [] } = contentProps
  const imagePropsStr = imageContentStr(imageProps, 'projects', coverUrl ? id : undefined)
  const additionalImgsStr = additionalImagesStr(additionalImages)

  return `---
id: '${id}'
title: '${title}'
reading_time: ${readingTime ?? 30}
words: ${words ?? 0}
relevance: ${Math.max(1, (Relevancia?.status?.name?.length ?? 1) / 2)}
priority: '${Prioridad?.select?.name ?? ''}'
team: '${Equipo?.select?.name ?? ''}'
progress: ${Progreso?.number ?? 0}
status: '${Estado?.status?.name}'
github: '${Github?.url ?? ''}'
website: '${Website?.url ?? ''}'
figma: '${Figma?.url ?? ''}'
notion: '${Notion?.url ?? ''}'
logo: '${Logo?.url ?? ''}'
summary: '${
    Resumen?.rich_text
      ?.map(rt => rt?.plain_text)
      .join('')
      .replace(/[\n\r]/g, '') ?? ''
  }'
created_time: '${created_time}'
last_edited_time: '${lastEditedTime}'
${imagePropsStr}
tags: [${Tags?.multi_select.map(item => `'${item.name}'`).join(', ')}]
${additionalImgsStr}


---`
}
