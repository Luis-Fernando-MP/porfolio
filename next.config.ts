import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer2'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1', '*.127.0.0.1', 'localhost'],
  reactStrictMode: true,
  experimental: {
    viewTransition: true
  }
}

export default withContentlayer(nextConfig)
