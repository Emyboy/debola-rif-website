/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["images.prismic.io"]
  },
  eslint: {
    ignoreDuringBuilds:true
  }
}

module.exports = nextConfig
