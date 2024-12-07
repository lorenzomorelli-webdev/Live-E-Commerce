"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Modal, Product } from "@/utils/interfaces";

export default function ProductModal({
  open,
  setOpenModals,
  product,
  setCart,
}: {
  open: boolean;
  setOpenModals: (value: boolean, modal: Modal) => void;
  product: Product;
  setCart: (value: Product[]) => void;
}) {
  return (
    <Drawer open={open}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{product.name}</DrawerTitle>
          <DrawerDescription>
            <img
              src={product.image.toString()}
              alt="imagine prodotto"
              width="500"
              height="300"
            />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button
            onClick={() => {
              setOpenModals(false, Modal.Product);
              setCart([product]);
              setOpenModals(true, Modal.Cart);
            }}>
            ACQUISTA
          </Button>
          <Button
            variant="outline"
            onClick={() => setOpenModals(false, Modal.Product)}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
