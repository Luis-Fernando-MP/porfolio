import createMDX from '@next/mdx'
import highlight from 'rehype-highlight'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote']
}

const withMDX = createMDX({
  options: {
    rehypePlugins: [highlight],
    remarkPlugins: []
  }
})

export default withMDX(nextConfig)
