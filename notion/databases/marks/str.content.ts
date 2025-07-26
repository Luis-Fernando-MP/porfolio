import type { MdxContentProps } from '@notion/utils/generateBlock'

import { imageContentStr } from '../imageContentStr'
import { NotionMarksDB } from './marks.type'

export const markContent = (mark: NotionMarksDB, coverUrl: string | undefined, contentProps: MdxContentProps) => {
  const { id, properties, created_time } = mark
  const title = properties.Name.title[0].plain_text
  const lastEditedTime = properties['Última edición'].last_edited_time

  const { imageProps, readingTime, words } = contentProps

  const imagePropsStr = imageContentStr(imageProps, 'marks', coverUrl ? id : undefined)

  return `---
id: '${id}'
title: '${title}'
reading_time: ${readingTime ?? 30}
words: ${words ?? 0}
folder: '${properties.Folder?.select?.name}'
folder_color: '${properties.Folder?.select?.color}'
status: '${properties.Estado?.status?.name}'
level: '${properties.Nivel?.select?.name}'
sessions: [${properties['Sesión']?.multi_select.map(item => `'${item.name}'`).join(', ')}]
${imagePropsStr}
created_time: '${created_time}'
last_edited_time: '${lastEditedTime}'
tags: [${properties.Tags?.multi_select.map(item => `'${item.name}'`).join(', ')}]


---`
}
