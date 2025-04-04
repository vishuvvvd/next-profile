import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  assetPrefix: process.env.ASSET_PRIFIX,
  basePath: process.env.BASE_PATH,
  reactStrictMode: true,
  env: {},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

// BELOW IS INITIAL SETTING
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
