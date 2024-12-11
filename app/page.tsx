import Features from "@/components/serverSide/features";
import Hero from "@/components/serverSide/hero";
import ProductSection from "@/components/clientSide/productSection";
import { mapApiTagToEnum, Product } from "@/utils/interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const productsArray: Product[] = (
    await prisma.product.findMany({
      orderBy: {
        id: "asc",
      },
    })
  ).map((product) => ({
    ...product,
    tag: mapApiTagToEnum(product.tag), // Adattamento del campo `tag`
  }));

  return (
    <>
      <main>
        <Hero />
        <ProductSection productsArray={productsArray} />
        <Features />
      </main>
    </>
  );
}
