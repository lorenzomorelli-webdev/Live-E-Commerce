import { PrismaClient } from "@prisma/client";
import Footer from "@/app/components/home/footer";
import Hero from "@/app/components/home/hero";
import { Product } from "@/lib/utils";
import Features from "@/app/components/home/features";
import ProductSection from "@/app/components/home/productSection";
import Navbar from "@/app/components/navbar/navbar";

const prisma = new PrismaClient();

export default async function Home() {
  // Prisma: caricamento prodotti lato server
  const productsArray: Product[] = await prisma.product.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <main>
      <Navbar />
      <Hero id="Hero" />
      <ProductSection
        id="Catalogo"
        productsArray={productsArray}
      />
      <Features />
      <Footer />
    </main>
  );
}
