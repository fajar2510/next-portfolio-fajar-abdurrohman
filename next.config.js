/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  images: {
    domains: ["ik.imagekit.io"], // Tambahkan domain ImageKit
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/fajarblog/**",
      },
    ],
  },
  env: {
    EMAIL_USER: process.env.XT_PUBLIC_EMAIL_USER,
    EMAIL_PASS: process.env.NEXT_PUBLIC_EMAIL_PASS,
    EMAIL_RECEIVER: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
  },
};

module.exports = nextConfig;
