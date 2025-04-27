import { NotionRenderer } from '@notion-render/client'
import { isFullBlock, isFullPageOrDatabase } from '@notionhq/client'

// DB -> import prisma from '../src/lib/prisma/index.ts'
// DB -> const marks = await prisma.mark.findMany()
import notion from './api.ts'
import { env } from './constants.ts'
import type NotionMarkSerie from './types/serie.type.ts'
import { getAllMarks } from './utils/getAllMarks.ts'

const renderer = new NotionRenderer()

const getPosts = async () => {
  try {
    const marksDb = await getAllMarks<NotionMarkSerie>()

    console.log('-------------------')
    const actualMarks = marksDb.filter(e => e.properties.Situación.status.name === 'Cursando')

    // const html = renderer.render(...actualMarks)

    console.log(actualMarks)
    console.log('-------------------')

    // const blogPage = await notion.pages.retrieve({
    //   page_id: '1d298397f7fa800fa3dae75b4f5e8a62'
    // })

    // const rr = await notion.blocks.children.list({ block_id: env.MARKS_ID })

    // const block = await notion.pages.properties.retrieve({
    //   page_id: '1d298397f7fa800fa3dae75b4f5e8a62',
    //   property_id: 'boton'
    // })

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
  } catch (error) {
    console.log('error: ', error)
  }
}

const generateData = async () => {
  await getPosts()
}

generateData()
