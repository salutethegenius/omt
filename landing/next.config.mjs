/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/maxtax-homepage.html",
        destination: "/",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/maxtax-homepage.html",
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; " +
              "style-src 'self' 'unsafe-inline'; " +
              "frame-src https://challenges.cloudflare.com; " +
              "connect-src 'self' https://challenges.cloudflare.com; " +
              "img-src 'self' data: https:; " +
              "font-src 'self' data:;",
          },
        ],
      },
    ]
  },
}

export default nextConfig
