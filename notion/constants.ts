import { config } from 'dotenv'

config()

export const env = {
  NOTION_TOKEN: process.env.NOTION_TOKEN ?? '',
  SERIES_ID: process.env.SERIES_INDEX_ID ?? '',
  MARKS_ID: process.env.MARKS_INDEX_ID ?? ''
}
