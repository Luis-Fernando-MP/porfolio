import { NotionSeriesDB } from '@notion/types/series.type'
import type { MdxContentProps } from '@notion/utils/generateBlock'

export const bookContent = (book: NotionSeriesDB, coverUrl: string | undefined, imageProps: MdxContentProps) => {
  const { id, properties, created_time } = book
  const title = properties.Name.title[0].plain_text
  const lastEditedTime = properties['Última edición'].last_edited_time
  const author = properties['Profesor(es)']?.rich_text[0]?.text.content ?? ''

  return `---
  id: '${id}'
  title: '${title}'
  banner: ${coverUrl ? `'/blog/books/${id}/banner.webp'` : "''"}
  thumb: ${coverUrl ? `'/blog/books/${id}/thumb.webp'` : "''"}
  image_width: ${imageProps.width}
  image_height: ${imageProps.height}
  image_hash: '${imageProps.blurhash}'
  image_blur: '${imageProps.placeholder}'
  author: '${author}'
  created_time: '${created_time}'
  last_edited_time: '${lastEditedTime}'
  ---`.replaceAll('  ', '')
}
