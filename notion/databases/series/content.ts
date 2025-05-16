import { NotionSeriesDB } from '@notion/types/series.type'
import type { MdxContentProps } from '@notion/utils/generateBlock'

export const serieContent = (book: NotionSeriesDB, coverUrl: string | undefined, imageProps: MdxContentProps) => {
  const { id, properties, created_time } = book
  const title = properties.Name.title[0].plain_text
  const lastEditedTime = properties['Última edición'].last_edited_time

  const teacher = properties['Profesor(es)']?.rich_text[0]?.text.content ?? ''

  return `---
id: '${id}'
title: '${title}'
folder: '${properties.Folder?.select?.name}'
folder_color: '${properties.Folder?.select?.color}'
profesor(s): '${teacher}'
tags:
${properties.Tags?.multi_select.map(item => `  - ${item.name}`).join('\n')}
banner: ${coverUrl ? `'/blog/series/${id}/banner.webp'` : "''"}
thumb: ${coverUrl ? `'/blog/series/${id}/thumb.webp'` : "''"}
image_width: ${imageProps.width}
image_height: ${imageProps.height}
image_hash: '${imageProps.blurhash}'
image_blur: '${imageProps.placeholder}'
created_time: '${created_time}'
last_edited_time: '${lastEditedTime}'
---`
}
