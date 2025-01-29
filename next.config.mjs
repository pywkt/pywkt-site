// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: "export",
// };
//
// module.exports = nextConfig;

/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {Array<((config: NextConfig) => NextConfig)>} NextConfigPlugins
 */

/** @type {NextConfig} */
const nextConfig = {
  output: 'export',
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
};

export default () => nextConfig;
