import { PrismaClient } from "@prisma/client";
import { mapApiTagToEnum } from "@/utils/interfaces";
import Features from "@/app/(home)/components/features";
import Footer from "@/app/(home)/components/footer";
import Hero from "@/app/(home)/components/hero";
import Navbar from "@/app/(navbar)/navbar";
import ProductSection from "@/app/(home)/components/productSection";

const prisma = new PrismaClient();

export default async function Home() {
  // Prisma: caricamento prodotti lato server
  const products = await prisma.product.findMany({
    orderBy: { id: "asc" },
  });

  const productsArray = products.map((product) => ({
    ...product,
    tag: mapApiTagToEnum(product.tag),
  }));

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
