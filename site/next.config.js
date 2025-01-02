/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Hildas Kasm Registry',
    description: 'Hildas store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://hildev.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Hildev/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
