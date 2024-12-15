import Features from "@/components/serverSide/features";
import Hero from "@/components/serverSide/hero";
import ProductSection from "@/components/clientSide/productSection";
import { PrismaClient } from "@prisma/client";
import { mapApiTagToEnum } from "@/utils/interfaces";

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
    <>
      <main>
        <Hero id="Hero" />
        <ProductSection
          id="Catalogo"
          productsArray={productsArray}
        />
        <Features />
      </main>
    </>
  );
}
