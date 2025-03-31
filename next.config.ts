import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote']
}

const withMDX = createMDX({
  options: {
    remarkPlugins: []
  }
})

export default withMDX(nextConfig)
