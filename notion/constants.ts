import { config } from 'dotenv'

config()

export const env = {
  NOTION_TOKEN: process.env.NOTION_TOKEN ?? '',
  MARKS_ID: process.env.MARKS_INDEX_ID ?? ''
}
