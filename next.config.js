/** @type {import('next').NextConfig} */
const DEFAULT_PAGE = '/harbor'

module.exports = {
  async redirects() {
    return [
      { source: '/', destination: DEFAULT_PAGE, permanent: true }, // a permanent redirect
    ];
  },
  reactStrictMode: true,
}