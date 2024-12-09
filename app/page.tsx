import Features from "@/components/serverSide/features";
import Hero from "@/components/serverSide/hero";
import ProductSection from "@/components/clientSide/productSection";

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
