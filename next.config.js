/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   pageExtensions: ['[id].js','js', 'jsx', 'md', 'mdx'],
   images: {
          domains: [configs.STRAPI_DOMAIN],
}

module.exports = nextConfig
