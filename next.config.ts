import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable transpiling for React Flow
  transpilePackages: ["@xyflow/react"],
};

export default nextConfig;
