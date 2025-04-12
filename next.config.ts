import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  assetPrefix: process.env.ASSET_PRIFIX,
  basePath: process.env.BASE_PATH,
  reactStrictMode: true,
  env: {},
  images: {
    domains: ["media.licdn.com"], // Add the domain here
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
