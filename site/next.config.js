/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Hildas Kasm Registry',
    description: 'Hildas store for Kasm supported workspaces.',
    icon: 'https://www.flaticon.com/free-icon/ubuntu_888879',
    listUrl: 'https://hildev.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Hildev/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
