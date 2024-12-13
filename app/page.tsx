'use client'

import Features from "@/components/serverSide/features";
import Hero from "@/components/serverSide/hero";
import ProductSection from "@/components/clientSide/productSection";
import { mapApiTagToEnum, Product } from "@/utils/interfaces";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

const prisma = new PrismaClient();

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Funzione asincrona per recuperare la sessione
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
      } else {
        //router.push("/login");
      }
    };

    fetchSession();
  }, [router]);

  // Chiamata al DB Prisma, che non è asincrona direttamente nel componente
  const [productsArray, setProductsArray] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await prisma.product.findMany({
        orderBy: {
          id: "asc",
        },
      });
      setProductsArray(
        products.map((product) => ({
          ...product,
          tag: mapApiTagToEnum(product.tag), // Adattamento del campo `tag`
        }))
      );
    };

    fetchProducts();
  }, []);

  if (user === null) {
    return <p>Loading...</p>;
  }

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
      <div>
        <h1>Welcome {user.email}</h1>
        <button onClick={async () => await supabase.auth.signOut()}>Logout</button>
      </div>
    </>
  );
}
