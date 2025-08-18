import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images :{
    remotePatterns:[
      // {
      //   protocol:'https',
      //   hostname:'static.vecteezy.com',
      //   pathname: '/**',
      // },
      // {
      //   protocol:'https',
      //   hostname:'res.cloudinary.com',
      //   pathname: '/**',
      // }
        {
        protocol: "https",
        hostname: "**", // معناه أي دومين
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ]
    
  }
};

export default nextConfig;
