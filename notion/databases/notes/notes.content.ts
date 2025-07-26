import { FieldDefs, defineDocumentType } from 'contentlayer/source-files'

const notesFields: FieldDefs = {
  id: {
    type: 'string',
    required: true
  },
  title: {
    type: 'string',
    required: true
  },
  // banner
  banner: {
    type: 'string',
    default: '/images/default-banner.png'
  },
  thumb: {
    type: 'string',
    default: '/images/default-thumb.png'
  },
  image_width: {
    type: 'number',
    default: 0,
    required: false
  },
  image_height: {
    type: 'number',
    default: 0,
    required: false
  },
  image_hash: {
    type: 'string',
    default: '/images/default-banner.png',
    required: false
  },
  image_blur: {
    type: 'string',
    default: '/images/default-banner.png',
    required: false
  },

  created_time: {
    type: 'date',
    required: false
  },
  last_edited_time: {
    type: 'date',
    required: false
  }
}

const NotesDocument = defineDocumentType(() => ({
  name: 'Notes',
  filePathPattern: `notes/**/*.mdx`,
  contentType: 'mdx',
  fields: notesFields,

  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/notes/${post._raw.flattenedPath}`
    }
  }
}))

export default NotesDocument
