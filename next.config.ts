import type { NextConfig } from "next";

// Use cwd so this matches Vercel's injected outputFileTracingRoot (/vercel/path0).
// import.meta.url is undefined when Vercel re-evaluates this file in modifyConfig.
const projectRoot = process.cwd();

const nextConfig: NextConfig = {
  serverExternalPackages: ["playwright", "playwright-core"],
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingExcludes: {
    "*": [
      "./node_modules/playwright/**",
      "./node_modules/playwright-core/**",
      "./node_modules/@playwright/**",
    ],
  },
  outputFileTracingIncludes: {
    "/api/user/sites/*/export-nextjs": [
      "./app/editor/layout/src/**/*",
      "./public/fonts/**/*",
    ],
  },
  async redirects() {
    return [
      {
        source: "/editor/dashboard",
        destination: "/user/dashboard",
        permanent: false,
      },
      {
        source: "/editor/dashboard/:tab",
        destination: "/user/:tab",
        permanent: false,
      },
    ];
  },
  experimental: {
    proxyClientMaxBodySize: "50mb",
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d2attmqgyy4lt0.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
