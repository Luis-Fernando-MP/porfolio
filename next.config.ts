import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer'

const nextConfig: NextConfig = {
  turbopack: {},
  allowedDevOrigins: ['http://127.0.0.1'],
  reactStrictMode: true
}

export default withContentlayer(nextConfig)
