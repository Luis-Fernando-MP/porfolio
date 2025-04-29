import type { NotionDB, NotionMDVisibility, NotionRichText } from './notion.type'

interface Properties {
  Folder: {
    type: 'select'
    select: { name: string; color: string } | null
  }

  Estado: {
    type: 'status'
    status: {
      name: 'Sin empezar' | 'Editando' | 'Completado'
      color: string
    } | null
  }

  Nivel: {
    type: 'select'
    select: { name: string; color: string } | null
  }

  'Semana(s)': {
    type: 'multi_select'
    multi_select: { name: string; color: string }[]
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

export interface NotionMarksDB extends NotionDB {
  properties: Properties & NotionMDVisibility
}
