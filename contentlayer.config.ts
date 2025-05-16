import { makeSource } from 'contentlayer/source-files'

import NotesDocument from './content/notes.config'
import SeriesDocument from './content/series.config'

export default makeSource({
  contentDirPath: 'content',

  documentTypes: [
    NotesDocument
    //  SeriesDocument
  ],
  contentDirExclude: ['**/marks/**', '**/series/**']
})
