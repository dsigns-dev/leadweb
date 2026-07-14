/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.leadweb.com.au",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/industries/digital-marketing-for-tradie/",
        destination: "/industries/digital-marketing-for-tradies/",
        permanent: true,
      },
      {
        source: "/industries/digital-marketing-for-doctor/",
        destination: "/industries/digital-marketing-for-doctors/",
        permanent: true,
      },
      {
        source: "/industries/digital-marketing-for-fitness/",
        destination: "/industries/digital-marketing-for-fitness-centres/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
