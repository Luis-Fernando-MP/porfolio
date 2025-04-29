import type { NotionDB, NotionMDVisibility, NotionRichText } from './notion.type'

export type NotionGroupSerie = 'Apuntes' | 'Series' | 'Otros'

interface Properties {
  Grupo: {
    type: 'status'
    status: {
      id: 'dc76b782-b92e-4dfb-9692-5b6ca3af74fd'
      name: NotionGroupSerie
      color: string
    }
  }

  Folder: {
    type: 'select'
    select: { name: string; color: string } | null
  }

  'Profesor(es)': {
    type: 'rich_text'
    rich_text: NotionRichText[]
  }

  Name: {
    type: 'title'
    title: NotionRichText[]
  }

  'Fecha de creación': {
    type: 'created_time'
    created_time: string
  }

  'Última edición': {
    type: 'last_edited_time'
    last_edited_time: string
  }
}

export interface NotionSeriesDB extends NotionDB {
  folder?: string
  content?: string
  properties: Properties & NotionMDVisibility
}
