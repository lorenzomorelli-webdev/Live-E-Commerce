import Features from "@/serverSideComponents/features";
import Hero from "@/serverSideComponents/hero";
import ProductSection from "@/serverSideComponents/productSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductSection />
        <Features />
      </main>
    </>
  );
}
