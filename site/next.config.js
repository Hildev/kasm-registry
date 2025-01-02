/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Hildas Kasm Registry',
    description: 'Hildas store for Kasm supported workspaces.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg',
    listUrl: 'https://hildev.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Hildev/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
