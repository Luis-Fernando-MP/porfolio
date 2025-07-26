import { makeSource } from 'contentlayer/source-files'

import MarksDocument from './notion/databases/marks/marks.layerConfig'
import ProjectsDocument from './notion/databases/projects/projects.layerConfig'
import SeriesDocument from './notion/databases/series/series.layerConfig'

export default makeSource({
  contentDirPath: 'content',

  documentTypes: [ProjectsDocument, SeriesDocument, MarksDocument]
})
