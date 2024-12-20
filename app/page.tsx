import Features from "@/components/serverSide/features";
import Hero from "@/components/serverSide/hero";
import ProductSection from "@/components/clientSide/productSection";
import { PrismaClient } from "@prisma/client";
import { mapApiTagToEnum } from "@/utils/interfaces";
import UserGreetText from "@/components/clientSide/UserGreetText";
import LoginButton from "@/components/clientSide/LoginLogoutButton";
import Navbar from "@/components/serverSide/navbar";
import Footer from "@/components/serverSide/footer";

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
      <UserGreetText />
      <LoginButton />
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
