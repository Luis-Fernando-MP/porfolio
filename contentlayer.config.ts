import { makeSource } from 'contentlayer/source-files'

import MarksDocument from './content/marks.config'
import NotesDocument from './content/notes.config'
import SeriesDocument from './content/series.config'

export default makeSource({
  contentDirPath: 'content',

  documentTypes: [NotesDocument, SeriesDocument, MarksDocument]
})
