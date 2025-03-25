import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
experimental:{
  serverActions:{
    bodySizeLimit:"5mb"
  }
},
  images: {
    domains: ["res.cloudinary.com"], // Ensure Cloudinary domain is correct
  },
};
export default nextConfig;
