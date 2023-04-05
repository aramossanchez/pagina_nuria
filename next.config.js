/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: isProduction ? '/pagina_nuria' : '',
};

module.exports = nextConfig;
