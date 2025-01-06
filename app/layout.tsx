import type { Metadata } from "next";
import "@/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Handjet } from "next/font/google";
import GlobalModals from "@/app/modal/globalModal";
import ProviderWrapper from "@/app/context/ProviderWrapper";

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
        <ProviderWrapper>
          <GlobalModals />
          {children}
          <SpeedInsights />
        </ProviderWrapper>
      </body>
    </html>
  );
}
