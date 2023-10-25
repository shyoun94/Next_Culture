/** @type {import('next').NextConfig} */
module.exports = {
  images:{
    loader: "default",
    domains: ['www.artgy.or.kr', 'www.mmca.go.kr', 'www.mcst.go.kr', 'www.kopis.or.kr'],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://www.kopis.or.kr/:path*",
      },
    ];
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
}