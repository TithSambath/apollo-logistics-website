const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path',
        destination: `${[process.env.NEXT_PUBLIC_STRAPI_API_URL]}/uploads/:path`
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/'
      }
    ];
  },
}

module.exports = nextConfig