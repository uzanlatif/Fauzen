/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  // basePath: '/Users/annasadharuqudni/Documents/fauzen/out',
  // assetPrefix: '/Users/annasadharuqudni/Documents/fauzen/out',
};

module.exports = nextConfig;
