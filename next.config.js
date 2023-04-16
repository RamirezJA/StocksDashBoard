/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  env: {
    NEXT_PUBLIC_Yahoo_ID: process.env.NEXT_PUBLIC_Yahoo_ID,
  },
}
