import { PrismaClient, Product } from "@prisma/client";
import { mapApiTagToEnum } from "@/utils/interfaces";
import Features from "@/app/home/components/features";
import Footer from "@/app/home/components/footer";
import Hero from "@/app/home/components/hero";
import Navbar from "@/app/navbar/navbar";
import ProductSection from "@/app/home/components/productSection";
import { AuthProvider } from "@/app/context/authContext";
import { ModalProvider } from "@/app/context/modalContext";
import GlobalModals from "@/app/modal/globalModal";

const prisma = new PrismaClient();

export default async function Home() {
  // Prisma: caricamento prodotti lato server
  const products: Product[] = await prisma.product.findMany({
    orderBy: { id: "asc" },
  });

  const productsArray = products.map((product) => ({
    ...product,
    tag: mapApiTagToEnum(product.tag),
  }));

  return (
    <AuthProvider>
      <ModalProvider>
        <GlobalModals />
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
      </ModalProvider>
    </AuthProvider>
  );
}
