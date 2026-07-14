/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
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
