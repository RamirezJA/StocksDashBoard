/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_Yahoo_ID: process.env.NEXT_PUBLIC_Yahoo_ID,
  },
  images: {
    domains: ["s.yimg.com", "fastly.picsum.photos"],
  },
}

module.exports = nextConfig
