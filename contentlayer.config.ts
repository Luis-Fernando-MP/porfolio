import { FieldDefs, defineDocumentType, makeSource } from 'contentlayer/source-files'

const articleFields: FieldDefs = {
  title: {
    type: 'string',
    required: true
  },
  resume: {
    type: 'string',
    required: true
  },
  image: { type: 'image' },
  author: {
    type: 'string',
    required: true
  },
  tags: {
    type: 'list',
    of: { type: 'string' }
  },
  publishedAt: {
    type: 'date',
    required: true
  }
}

const markFields: FieldDefs = {
  id: {
    type: 'string',
    required: true
  },
  quarter: {
    type: 'string',
    required: true
  },
  schedule: {
    type: 'string',
    required: true
  },
  situation: {
    type: 'string',
    required: true
  },
  credits: {
    type: 'string',
    required: true
  },
  deliverable: {
    type: 'string',
    required: true
  },
  teachers: {
    type: 'string',
    required: true
  },

  icon: {
    type: 'string',
    required: true
  },

  image: {
    type: 'string',
    required: true
  },
  image_width: {
    type: 'number',
    required: true
  },
  image_height: {
    type: 'number',
    required: true
  },
  image_hash: {
    type: 'string',
    required: true
  },
  image_blur: {
    type: 'string',
    required: true
  },
  notion_url: {
    type: 'string',
    required: true
  },
  created_time: {
    type: 'string',
    required: true
  },
  last_edited_time: {
    type: 'string',
    required: true
  }
}

export const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: articleFields,
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/projects/${post._raw.flattenedPath}`
    }
  }
}))

export const Marks = defineDocumentType(() => ({
  name: 'Marks',
  filePathPattern: `marks/**/*.mdx`,
  contentType: 'mdx',
  fields: markFields,
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/marks/${post._raw.flattenedPath}`
    }
  }
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Projects, Marks] })
