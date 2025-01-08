import React from "react";
import { useModal } from "@/app/context/modalContext";
import { Button } from "@/shadcn/ui/button";
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Drawer,
} from "@/shadcn/ui/drawer";
import { useCart } from "@/app/context/cartContext";
import { useAuth } from "../context/authContext";
import Image from "next/image";
import { Product } from "@/utils/utils";

const ProductModal = () => {
  const { currentModal, modalData, closeModal, switchModal } = useModal();
  const { addToCart } = useCart();
  const { getUserId } = useAuth();

  if (currentModal !== "product") return null;

  const product: Product = modalData as Product;

  return (
    <Drawer
      open={true}
      onOpenChange={closeModal}
      direction={"left"}>
      <DrawerContent>
        <DrawerHeader className="flex flex-col items-center">
          <DrawerTitle>{product.name}</DrawerTitle>
          <Image
            src={product.imageUrl.toString()}
            alt="product image"
            width={500}
            height={300}
            fill={false}
          />
          <DrawerDescription>€{product.price}</DrawerDescription>
          <DrawerDescription>{product.description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button
            onClick={() => {
              if (getUserId()) {
                switchModal("cart");
                addToCart(product);
              } else {
                switchModal("auth");
              }
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
