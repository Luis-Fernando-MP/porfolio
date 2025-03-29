import { readFile } from 'fs/promises'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import rehypeHighlight from 'rehype-highlight'

import './vs-dark.css'
import './vs-light.css'

type GenerateMdxDataProps = {
  mdxPath: string
  extraLanguages?: string[]
}

export const generateMdxData = async ({ mdxPath, extraLanguages = [] }: GenerateMdxDataProps) => {
  try {
    const content = await readFile(path.join(process.cwd(), mdxPath), 'utf-8')
    const languages = {
      javascript,
      bash,
      ...Object.fromEntries(extraLanguages.map(lang => [lang, require(`highlight.js/lib/languages/${lang}`)]))
    }

    const data = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [[rehypeHighlight, { languages }]]
        }
      }
    })

    return data
  } catch (error) {
    console.error('Error al generar datos MDX:', error)
    return null
  }
}
