import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent MIME-sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Prevent clickjacking & framing attacks
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Cross-Site Scripting protection filter
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Referrer policy: send origin only on cross-origin requests
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Permissions policy: disable unwanted device capabilities
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Strict Transport Security (HSTS): force HTTPS for 2 years with preloading
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Cross-Origin policies to prevent untrusted resource leaks
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  // Content Security Policy: enforce HTTPS and prevent script/content injection
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https: https://images.unsplash.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https: wss: https://*.vercel-insights.com",
      "media-src 'self' data: blob:",
      "worker-src 'self' blob:",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "base-uri 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false, // Hide 'X-Powered-By: Next.js' to prevent fingerprinting
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
