/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/r',
        destination: 'https://youtu.be/dQw4w9WgXcQ',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
