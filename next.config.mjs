/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.net',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/yandex/:path*',
        destination: 'https://api-maps.yandex.ru/v3/:path*',
      },
    ];
  },
};

export default nextConfig;
