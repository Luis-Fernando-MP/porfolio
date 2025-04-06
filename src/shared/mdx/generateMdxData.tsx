// import { Image, ImageProps } from '@unpic/react';
// import { readFile } from 'fs/promises';
// import { compileMDX } from 'next-mdx-remote/rsc'
// import path from 'path';

// import rehypeCodeTitles from 'rehype-code-titles'
// import rehypePrism from 'rehype-prism-plus'
// import remarkGfm from 'remark-gfm'

// import { ArticleFrontmatter } from './frontmatter.type';

type GenerateMdxDataProps = {
  mdxPath: string
}

export const generateMdxData = async ({ mdxPath }: GenerateMdxDataProps) => {
  try {
    console.log(mdxPath)
    //   const content = await readFile(path.join(process.cwd(), mdxPath), 'utf-8')

    //   const data = await compileMDX<ArticleFrontmatter>({
    //     source: content,
    //     components: { Image: (imageProps: ImageProps) => <Image alt='' className='rehype-image' {...imageProps} /> },
    //     options: {
    //       parseFrontmatter: true,
    //       mdxOptions: {
    //         rehypePlugins: [remarkGfm, rehypeCodeTitles, [rehypePrism, { showLineNumbers: true }]]
    //       }
    //     }
    //   })

    return null
  } catch (error) {
    console.error('Error al generar datos MDX:', error)
    return null
  }
}
