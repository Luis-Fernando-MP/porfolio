import type { MdxContentProps } from '@notion/utils/generateBlock'

import { imageContentStr } from '../imageContentStr'
import { NotionSeriesDB } from '../series/series.type'

export const projectContent = (book: NotionSeriesDB, coverUrl: string | undefined, contentProps: MdxContentProps) => {
  const { id, properties, created_time } = book
  const title = properties.Name.title[0].plain_text
  const lastEditedTime = properties['Última edición'].last_edited_time
  const author = properties['Profesor(es)']?.rich_text[0]?.text.content ?? ''

  const { imageProps, readingTime, words } = contentProps

  const imagePropsStr = imageContentStr(imageProps, 'project', coverUrl ? id : undefined)

  return `---
id: '${id}'
title: '${title}'
author: '${author}'
reading_time: ${readingTime ?? 30}
words: ${words ?? 0}

${imagePropsStr}

created_time: '${created_time}'
last_edited_time: '${lastEditedTime}'
---`
}
