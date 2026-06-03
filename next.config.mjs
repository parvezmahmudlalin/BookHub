/** @type {import('next').Next} */
const nextConfig = {
 experimental: {
serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],
},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
  },
};

export default nextConfig;

//  npm install better-auth@1.6.11 @better-auth/mongo-adapter@1.6.11 --force
