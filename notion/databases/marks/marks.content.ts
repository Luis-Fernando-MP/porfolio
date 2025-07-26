import { FieldDefs, defineDocumentType } from 'contentlayer/source-files'

const marksFields: FieldDefs = {
  id: {
    type: 'string',
    required: true
  },
  title: {
    type: 'string',
    required: true
  },
  folder: {
    type: 'string',
    required: true
  },
  folder_color: {
    type: 'string',
    required: true
  },
  status: {
    type: 'string',
    required: false,
    default: ''
  },
  level: {
    type: 'string',
    required: false,
    default: ''
  },
  sessions: {
    type: 'list',
    of: { type: 'number' },
    required: false,
    default: []
  },
  tags: {
    type: 'list',
    of: { type: 'string' },
    required: false,
    default: []
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

const MarksDocument = defineDocumentType(() => ({
  name: 'Marks',
  filePathPattern: `marks/**/*.mdx`,
  contentType: 'mdx',
  fields: marksFields,
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/marks/${post._raw.flattenedPath}`
    }
  }
}))

export default MarksDocument
