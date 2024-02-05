// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn2.thecatapi.com',
      },
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig
