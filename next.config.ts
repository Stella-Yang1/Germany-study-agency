import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/de", destination: "/de/home", permanent: true },
      { source: "/en", destination: "/en/home", permanent: true },
    ];
  },
};

export default nextConfig;
