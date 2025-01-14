// https://github.com/vercel/geist-font/issues/13
/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.externals.push('pino-pretty')
    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['geist'],
}
