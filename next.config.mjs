/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
