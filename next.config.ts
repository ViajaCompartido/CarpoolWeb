import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CarpoolWeb",
  images: { unoptimized: true },
};

export default nextConfig;
