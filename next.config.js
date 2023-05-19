/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shoes-shop-strapi.herokuapp.com',
        port: '',
        pathname: '/uploads/**',
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
