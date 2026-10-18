/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@khulnasoft/blob',
    '@khulnasoft/edge-config',
    '@khulnasoft/postgres',
    '@khulnasoft/postgres-kysely',
  ],
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    });
    return config;
  },
};

module.exports = nextConfig;
