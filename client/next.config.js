/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // deviceSizes: [320, 390, 475],
    domains: ['172.20.10.2']
  },
  env: {
    API_URL: process.env.REACT_APP_API_URL,
    MB_KEY: process.env.REACT_APP_MB_KEY,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    return config;
  },
}

module.exports = nextConfig
