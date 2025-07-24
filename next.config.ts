import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1', '*.127.0.0.1', 'localhost'],
  reactStrictMode: true
}

export default withContentlayer(nextConfig)
