"use client";

import CartModal from "@/components/serverSide/cartModal";
import { CustomCarousel } from "@/components/serverSide/customCarousel";
import ProductModal from "@/components/serverSide/productModal";
import { Product, ProductCategory, Modal, defaultProduct } from "@/utils/interfaces";
import { useState } from "react";

export default function ProductSection({ productsArray }: { productsArray: Product[] }) {
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
        className="bg-grayback flex flex-col items-center relative opacity-85 gap-7 py-7">
        {/*
        <img
          src="/texture.webp"
          alt=""
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover object-center"
        /> 
        */}
        <CustomCarousel
          setOpenModals={setOpenModals}
          title={ProductCategory.Premium.toString()}
          filteredProducts={productsArray.filter((item) => item.tag == ProductCategory.Premium)}
          setProductContent={setProductContent}
        />
        <CustomCarousel
          setOpenModals={setOpenModals}
          title={ProductCategory.Premium.toString()}
          filteredProducts={productsArray.filter((item) => item.tag == ProductCategory.Special)}
          setProductContent={setProductContent}
        />
        <CustomCarousel
          setOpenModals={setOpenModals}
          title={ProductCategory.Premium.toString()}
          filteredProducts={productsArray.filter((item) => item.tag == ProductCategory.Standard)}
          setProductContent={setProductContent}
        />
        <CustomCarousel
          setOpenModals={setOpenModals}
          title={ProductCategory.Premium.toString()}
          filteredProducts={productsArray.filter((item) => item.tag == ProductCategory.Vintage)}
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
