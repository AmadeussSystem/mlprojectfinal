import { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during the build process
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
