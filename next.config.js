/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**/*",
      },
    ],
  },
  async rewrites() {
    return [
      // Rewrite to prevent adblocks blocking PostHog
      {
        source: "/ingest/:path*",
        destination: "https://app.posthog.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
