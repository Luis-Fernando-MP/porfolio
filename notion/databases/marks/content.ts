import { NotionMarksDB } from '@notion/types/marks.type'
import type { MdxContentProps } from '@notion/utils/generateBlock'

export const markContent = (book: NotionMarksDB, coverUrl: string | undefined, imageProps: MdxContentProps) => {
  const { id, properties, created_time } = book
  const title = properties.Name.title[0].plain_text
  const lastEditedTime = properties['Última edición'].last_edited_time

  return `---
id: '${id}'
title: '${title}'
folder: '${properties.Folder?.select?.name}'
folder_color: '${properties.Folder?.select?.color}'
status: '${properties.Estado?.status?.name}'
level: '${properties.Nivel?.select?.name}'
sessions:
${properties['Sesión']?.multi_select.map(item => `  - ${item.name}`).join('\n')}
tags:
${properties.Tags?.multi_select.map(item => `  - ${item.name}`).join('\n')}
banner: ${coverUrl ? `'/blog/marks/${id}/banner.webp'` : "''"}
thumb: ${coverUrl ? `'/blog/marks/${id}/thumb.webp'` : "''"}
image_width: ${imageProps.width}
image_height: ${imageProps.height}
image_hash: '${imageProps.blurhash}'
image_blur: '${imageProps.placeholder}'
created_time: '${created_time}'
last_edited_time: '${lastEditedTime}'
---`
}
