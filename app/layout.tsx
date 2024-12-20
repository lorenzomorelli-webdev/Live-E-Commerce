import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Handjet } from "next/font/google";

const handjet = Handjet({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Ecommerce App",
  description: "A live ecommerce app built with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${handjet.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
