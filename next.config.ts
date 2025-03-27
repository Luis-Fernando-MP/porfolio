import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1', 'local-origin.dev', '*.local-origin.dev']
}

export default nextConfig
