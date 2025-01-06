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
import { Product } from "@prisma/client";
import { useCart } from "@/app/context/cartContext";
import { useAuth } from "../context/authContext";
import Image from "next/image";


const ProductModal = () => {
  const { currentModal, modalData, closeModal, openModal } = useModal();
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
          <DrawerDescription>
            <Image
              src={product.imageUrl.toString()}
              alt="product image"
              width={500}
              height={300}
              fill={false}
            />
          </DrawerDescription>
          <p>€{product.price}</p>
        </DrawerHeader>
        <DrawerFooter>
          <Button
            onClick={() => {
              closeModal();
              openModal("cart");
              addToCart(getUserId()!, product, 1);
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
