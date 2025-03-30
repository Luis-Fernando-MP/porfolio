import { readFile } from 'fs/promises'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'

type GenerateMdxDataProps = {
  mdxPath: string
}

export const generateMdxData = async ({ mdxPath }: GenerateMdxDataProps) => {
  try {
    const content = await readFile(path.join(process.cwd(), mdxPath), 'utf-8')

    const data = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [rehypeCodeTitles, rehypePrism]
        }
      }
    })

    return data
  } catch (error) {
    console.error('Error al generar datos MDX:', error)
    return null
  }
}
