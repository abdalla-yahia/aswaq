import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images :{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'static.vecteezy.com',
        pathname: '/**',
      }
    ]
    
  }
};

export default nextConfig;
