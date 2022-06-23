/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['picsum.photos', 'icon.horse', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
