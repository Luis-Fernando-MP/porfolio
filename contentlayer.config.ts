import { makeSource } from 'contentlayer/source-files'

import MarksDocument from './notion/databases/marks/marks.content'
import NotesDocument from './notion/databases/notes/notes.content'
import SeriesDocument from './notion/databases/series/series.content'

export default makeSource({
  contentDirPath: 'content',

  documentTypes: [NotesDocument, SeriesDocument, MarksDocument]
})
