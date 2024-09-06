import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Footer />
    </>
  );
}
