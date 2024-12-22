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

export default function CartModal({
  open,
  setOpenModals,
  cart,
}: {
  open: boolean;
  setOpenModals: (value: boolean, modal: Modal) => void;
  cart: Product[];
}) {
  return (
    <Drawer
      open={open}
      direction="right">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>CARRELLO</DrawerTitle>
          <DrawerDescription>
            Totale: {cart.map((product) => product.price).reduce((tot, curr) => tot + curr, 0)}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>ACQUISTA</Button>
          <Button
            variant="outline"
            onClick={() => setOpenModals(false, Modal.Cart)}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
