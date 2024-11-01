import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import { product, ProductProps } from "@/utlis/interfaces";
import { Roboto } from "next/font/google";
import { Handjet } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const handjet = Handjet({ subsets: ["latin"] });

export default function Home() {
  const productsList: product[] = [
    { id: 1, name: "product 1", price: 9.99, image: "/white.webp" },
    { id: 2, name: "product 2", price: 19.99, image: "/controller.webp" },
    { id: 3, name: "product 3", price: 29.99, image: "/dark.webp" },
    { id: 4, name: "product 4", price: 39.99, image: "/white.webp" },
  ];

  const productProps: ProductProps = {
    fontClassName: handjet.className,
    products: productsList,
  };

  return (
    <>
      <main className={roboto.className}>
        <Navbar />
        <Hero fontClassName={handjet.className} />
        <Products props={productProps} />
        <Features />
        <Footer />
      </main>
    </>
  );
}
