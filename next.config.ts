import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Static export: images are pre-optimised to WebP in public/images
  images: { unoptimized: true },
};

export default nextConfig;
