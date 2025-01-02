import React from "react";
import { useModal } from "@/app/context/modalContext";
import { defaultProduct } from "@/utils/interfaces";
import { Button } from "@/shadcn/ui/button";
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Drawer,
} from "@/shadcn/ui/drawer";
import { Product } from "@prisma/client";

const ProductModal = () => {
  const { currentModal, modalData, closeModal, openModal } = useModal();
  

  if (currentModal !== "product") return null;

  const product: Product = modalData as Product || defaultProduct;

  return (
    <Drawer
      open={true}
      onOpenChange={closeModal}
      direction={"left"}>
      <DrawerContent>
        <DrawerHeader className="flex flex-col items-center">
          <DrawerTitle>{product.name}</DrawerTitle>
          <DrawerDescription>
            <img
              src={product.image_url.toString()}
              alt="product image"
              width="500"
              height="300"
            />
          </DrawerDescription>
          <p>€{product.price}</p>
        </DrawerHeader>
        <DrawerFooter>
          <Button
            onClick={() => {
              closeModal();
              openModal("cart");
            }}>
            ACQUISTA
          </Button>
          <Button
            variant="outline"
            onClick={() => closeModal()}>
            CHIUDI
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductModal;
