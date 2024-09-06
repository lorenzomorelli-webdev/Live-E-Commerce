import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";

import { Handjet, Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const handjet = Handjet({ subsets: ["latin"] });
export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className={roboto.className}>
        <Navbar />
        <Hero />
        <Products />
        <Features />
        <Footer />
      </main>
    </>
  );
}
