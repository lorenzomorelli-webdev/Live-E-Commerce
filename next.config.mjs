/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["afjrakkbravwzntlkveh.supabase.co"], // Consenti immagini dal dominio di Supabase
    remotePatterns: [
      {
        protocol: "https",
        hostname: "afjrakkbravwzntlkveh.supabase.co",
        pathname: "/storage/v1/object/public/images/**", // Matcha tutte le immagini nel bucket pubblico
      },
    ],
    unoptimized: true, // Disabilita l'ottimizzazione automatica delle immagini
  },
};

export default nextConfig;
