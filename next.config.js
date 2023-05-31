/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
        port: '',
        pathname: '/devc11z9p/image/upload/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/catalog/search',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
