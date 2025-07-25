import { NotionMarksDB } from '@notion/types/marks.type'
import type { MdxContentProps } from '@notion/utils/generateBlock'

import { imageContentStr } from '../imageContentStr'

export const markContent = (book: NotionMarksDB, coverUrl: string | undefined, contentProps: MdxContentProps) => {
  const { id, properties, created_time } = book
  const title = properties.Name.title[0].plain_text
  const lastEditedTime = properties['Última edición'].last_edited_time

  const { imageProps, readingTime, words } = contentProps

  const imagePropsStr = imageContentStr(imageProps, coverUrl ? id : undefined)

  return `---
id: '${id}'
title: '${title}'
reading_time: ${readingTime ?? 30}
words: ${words ?? 0}

folder: '${properties.Folder?.select?.name}'
folder_color: '${properties.Folder?.select?.color}'
status: '${properties.Estado?.status?.name}'
level: '${properties.Nivel?.select?.name}'

sessions:
${properties['Sesión']?.multi_select.map(item => `  - ${item.name}`).join('\n')}
tags:
${properties.Tags?.multi_select.map(item => `  - ${item.name}`).join('\n')}

${imagePropsStr}

created_time: '${created_time}'
last_edited_time: '${lastEditedTime}'
---`
}
