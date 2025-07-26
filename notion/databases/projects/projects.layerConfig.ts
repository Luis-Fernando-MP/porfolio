import { FieldDefs, defineDocumentType } from 'contentlayer2/source-files'

import { commonLayerConfigFields } from '../commonLayerConfigFields'

const marksFields: FieldDefs = {
  priority: {
    type: 'string',
    required: true
  },
  team: {
    type: 'string',
    required: true
  },
  progress: {
    type: 'number',
    required: true
  },
  tags: {
    type: 'list',
    of: { type: 'string' },
    required: false,
    default: []
  },

  ...commonLayerConfigFields
}

const ProjectsDocument = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: marksFields,
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/projects/${post._raw.flattenedPath}`
    }
  }
}))

export default ProjectsDocument
