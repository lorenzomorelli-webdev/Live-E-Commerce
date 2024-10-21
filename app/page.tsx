import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";

import { Roboto } from "next/font/google";
import { Handjet } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const handjet = Handjet({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={roboto.className}>
        <Navbar />
        <Hero fontClassName={handjet.className}/>
        <Products fontClassName={handjet.className}/>
        <Features />
        <Footer />
      </main>
    </>
  );
}
