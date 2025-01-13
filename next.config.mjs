/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tools-api.webcrumbs.org",
        port: "",

        search: "",
      },
    ],
  },
};

export default nextConfig;
