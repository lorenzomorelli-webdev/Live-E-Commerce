import { PrismaClient, Product } from "@prisma/client";
import Features from "@/app/home/components/features";
import Footer from "@/app/home/components/footer";
import Hero from "@/app/home/components/hero";
import Navbar from "@/app/navbar/navbar";
import ProductSection from "@/app/home/components/productSection";

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
