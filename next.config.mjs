/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "afjrakkbravwzntlkveh.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images/**",
        search: "",
      },
    ],
    domains: ["afjrakkbravwzntlkveh.supabase.co"],
  },
};

export default nextConfig;
