import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { defaultProduct, Modal, Product } from "@/utils/interfaces";
import Image from "next/image";

export default function ProductModal({
  open,
  setOpenModals,
  product,
  setCart,
  setProduct,
}: {
  open: boolean;
  setOpenModals: (value: boolean, modal: Modal) => void;
  product: Product;
  setCart: (value: Product[]) => void;
  setProduct: (value: Product) => void;
}) {
  const handleClose = () => {
    // Ritarda lo smontaggio per permettere l'animazione di chiusura
    setProduct(defaultProduct); // 300ms corrisponde alla durata dell'animazione
  };

  return (
    <Drawer open={open}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{product.name}</DrawerTitle>
          <DrawerDescription>
            {product.image_url === "placeholder" ? (
              <></>
            ) : (
              <Image
                src={product.image_url.toString()}
                alt="product image"
                width="500"
                height="300"
              />
            )}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button
            onClick={() => {
              handleClose();
              setCart([product!]);
              setOpenModals(true, Modal.Cart);
            }}>
            ACQUISTA
          </Button>
          <Button
            variant="outline"
            onClick={() => handleClose()}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
