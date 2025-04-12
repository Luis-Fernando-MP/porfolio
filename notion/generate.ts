import { NotionRenderer } from '@notion-render/client'
import { isFullBlock, isFullPageOrDatabase } from '@notionhq/client'

import notion from './api.ts'
import { env } from './constants.ts'

const renderer = new NotionRenderer()

const getPosts = async () => {
  // const response = await notion.databases.query({
  //   database_id: env.BLOG_INDEX_ID,
  //   page_size: 100
  // })

  const blogPage = await notion.pages.retrieve({
    page_id: '1d298397f7fa800fa3dae75b4f5e8a62'
  })

  const rr = await notion.blocks.children.list({ block_id: env.BLOG_INDEX_ID })

  const block = await notion.pages.properties.retrieve({
    page_id: '1d298397f7fa800fa3dae75b4f5e8a62',
    property_id: 'boton'
  })
  console.log(block)
  console.log('-------------------')
  // console.log(blogPage)
  // https://developers.notion.com/reference/retrieve-a-database
  // const databases = rr.results.filter(r => r.type === 'child_database')
  // console.log('-------------------')
  // await databases.forEach(async db => {
  //   const { id } = db
  //   const databaseInfo = await notion.databases.retrieve({
  //     database_id: id
  //   })

  //   console.log(databaseInfo)
  // })
}

const generateData = async () => {
  await getPosts()
}

generateData()
