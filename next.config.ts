import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'spgltd.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1year
  },
};

export default nextConfig;
