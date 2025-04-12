import { config } from 'dotenv'

config()

export const env = {
  NOTION_TOKEN: process.env.NOTION_TOKEN ?? '',
  BLOG_INDEX_ID: process.env.BLOG_INDEX_ID ?? ''
}
