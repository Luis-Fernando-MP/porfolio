import { DocumentType, FieldDefs, defineDocumentType, makeSource } from 'contentlayer/source-files'

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

export const Posts = defineDocumentType(() => ({
  name: 'Posts',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: articleFields,
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/Posts/${post._raw.flattenedPath}`
    }
  }
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Projects, Posts] })
