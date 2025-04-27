interface ExternalURL {
  url: string
}

interface Cover {
  type: 'external'
  external: ExternalURL
}

interface Icon {
  type: 'external'
  external: ExternalURL
}

interface CommonProperty {
  id: string
}

interface Text {
  type: string
  text: { content: string; link: string | null }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: string | null
}

interface Properties {
  Cuatrimestre: CommonProperty & {
    type: 'select'
    select: CommonProperty & { name: null | 'Examen' | 'Proyecto' | 'Taller' | 'YT'; color: string }
  }
  Horario: CommonProperty & {
    type: 'rich_text'
    rich_text: Text[]
  }

  Situación: CommonProperty & {
    type: 'status'
    status: {
      id: 'dc76b782-b92e-4dfb-9692-5b6ca3af74fd'
      name: 'Apuntes' | 'Iutu' | 'Cursando' | 'Culminado'
      color: string
    }
  }

  Créditos: CommonProperty & {
    type: 'number'
    number: number | null
  }

  Entregable: CommonProperty & {
    type: 'select'
    select: CommonProperty & { name: null | 'Examen' | 'Proyecto' | 'Taller' | 'YT'; color: string }
  }

  'Profesor(es)': CommonProperty & {
    type: 'rich_text'
    rich_text: Text[]
  }

  Name: CommonProperty & {
    type: 'title'
    title: Text[]
  }

  'Fecha de creación': CommonProperty & {
    type: 'created_time'
    created_time: string
  }

  'Última edición': CommonProperty & {
    type: 'last_edited_time'
    last_edited_time: '2025-04-25T11:33:00.000Z'
  }
}

type NotionObject = 'page' | 'database'

export default interface NotionMarkSerie {
  object: NotionObject
  id: string
  created_time: string
  last_edited_time: string

  cover: Cover
  icon: Icon
  archived: boolean
  in_trash: boolean
  properties: Properties
  url: string
  public_url: string | null
}
