"use client";

import CartModal from "@/clientSideComponents/cartModal";
import { CustomCarousel } from "@/clientSideComponents/customCarousel";
import ProductModal from "@/clientSideComponents/productModal";
import { Product, mapApiTagToEnum, ProductCategory, Modal, defaultProduct } from "@/utils/interfaces";
import { useState } from "react";

export default function ProductSection() {
  /**
   * Array fittizio con tutti i prodotti, successivamente tocca prenderloda un'api!
   */
  const ProductsArray: Product[] = [
    {
      id: 1,
      name: "Classic White",
      price: 9.99,
      image: "/white.webp",
      tag: mapApiTagToEnum("Vintage"),
    },
    {
      id: 2,
      name: "Retro Controller",
      price: 19.99,
      image: "/controller.webp",
      tag: mapApiTagToEnum("Vintage"),
    },
    {
      id: 3,
      name: "Dark Edition",
      price: 29.99,
      image: "/dark.webp",
      tag: mapApiTagToEnum("Premium"),
    },
    {
      id: 4,
      name: "Light Mode",
      price: 39.99,
      image: "/white.webp",
      tag: mapApiTagToEnum("Standard"),
    },
    {
      id: 5,
      name: "Stealth Black",
      price: 49.99,
      image: "/dark.webp",
      tag: mapApiTagToEnum("Premium"),
    },
    {
      id: 6,
      name: "Classic Gray",
      price: 12.99,
      image: "/controller.webp",
      tag: mapApiTagToEnum("Vintage"),
    },
    {
      id: 7,
      name: "Midnight Edition",
      price: 44.99,
      image: "/dark.webp",
      tag: mapApiTagToEnum("Premium"),
    },
    {
      id: 8,
      name: "Frost White",
      price: 34.99,
      image: "/white.webp",
      tag: mapApiTagToEnum("Standard"),
    },
    {
      id: 9,
      name: "Neon Burst",
      price: 29.99,
      image: "/controller.webp",
      tag: mapApiTagToEnum("Special"),
    },
    {
      id: 10,
      name: "Shadow Edition",
      price: 54.99,
      image: "/dark.webp",
      tag: mapApiTagToEnum("Premium"),
    },
    {
      id: 11,
      name: "Arctic White",
      price: 22.99,
      image: "/white.webp",
      tag: mapApiTagToEnum("Standard"),
    },
    {
      id: 12,
      name: "Fusion Controller",
      price: 39.99,
      image: "/controller.webp",
      tag: mapApiTagToEnum("Special"),
    },
    {
      id: 13,
      name: "Obsidian Black",
      price: 59.99,
      image: "/dark.webp",
      tag: mapApiTagToEnum("Premium"),
    },
    {
      id: 14,
      name: "Snowy White",
      price: 27.99,
      image: "/white.webp",
      tag: mapApiTagToEnum("Standard"),
    },
    {
      id: 15,
      name: "Galaxy Controller",
      price: 33.99,
      image: "/controller.webp",
      tag: mapApiTagToEnum("Special"),
    },
  ];

  /**
   * Questi stati verranno gestiti da una funziona unica per centralizzare la logica!
   */
  const [openCartModal, setOpenCartModal] = useState<boolean>(false);

  /**
   * Qua pure andrebbe fatta una funziona per gestire al meglio il prev e in caso aggiungere
   */
  const [cartContent, setCartContent] = useState<Product[]>([]);
  const [productContent, setProductContent] = useState<Product>(defaultProduct);
  const openProductModal = productContent.id === 999999 ? false : true;

  /**
   * utility function che mi permette di passare un solo parametro come props per interagire con tutte le modals
   */
  function setOpenModals(open: boolean, modal: Modal) {
    switch (modal) {
      case Modal.Cart:
        setOpenCartModal(open);
      default:
        return;
    }
  }

  return (
    <div className="mb-16">
      <div className={"my-3 flex flex-col items-center justify-center"}>
        <h2 className="font-semibold text-3xl">Scorri per il catalogo</h2>
        <button>
          <a href="#Products">D</a>
        </button>
      </div>
      <div
        id="Products"
        className="bg-lightbrown flex flex-col items-center relative opacity-85 gap-7 py-7">
        <img
          src="/texture.webp"
          alt=""
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover object-center"
        />
        {/*
          questa parte andrebbe automatizzata!
        */}
        <CustomCarousel
          setOpenModals={setOpenModals}
          title={ProductCategory.Premium.toString()}
          filteredProducts={ProductsArray.filter((item) => item.tag == ProductCategory.Premium)}
          setProductContent={setProductContent}
        />
        <CustomCarousel
          setOpenModals={setOpenModals}
          title={ProductCategory.Premium.toString()}
          filteredProducts={ProductsArray.filter((item) => item.tag == ProductCategory.Special)}
          setProductContent={setProductContent}
        />
        <CustomCarousel
          setOpenModals={setOpenModals}
          title={ProductCategory.Premium.toString()}
          filteredProducts={ProductsArray.filter((item) => item.tag == ProductCategory.Standard)}
          setProductContent={setProductContent}
        />
        <CustomCarousel
          setOpenModals={setOpenModals}
          title={ProductCategory.Premium.toString()}
          filteredProducts={ProductsArray.filter((item) => item.tag == ProductCategory.Vintage)}
          setProductContent={setProductContent}
        />
        <button className={"bg-orange w-fit p-2 px-6 font-extrabold mb-10 text-2xl"}>
          ORDER NOW
        </button>
      </div>
      <ProductModal
        open={openProductModal}
        setOpenModals={setOpenModals} //per aprire l'altra modale non se stesso
        product={productContent}
        setCart={setCartContent}
        setProduct={setProductContent}
      />
      <CartModal
        open={openCartModal}
        setOpenModals={setOpenModals}
        cart={cartContent}
      />
    </div>
  );
}
