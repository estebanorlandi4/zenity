/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'picsum.photos',
      'icon.horse',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'github.githubassets.com',
    ],
  },
};

module.exports = nextConfig;
