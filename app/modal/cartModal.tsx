"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/app/context/modalContext";
import { Button } from "@/shadcn/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/shadcn/ui/drawer";

import { useCart } from "../context/cartContext";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "@/shadcn/ui/table";

const CartModal = () => {
  const { currentModal, closeModal } = useModal();
  const { cartItems, addToCart, getTotalPrice } = useCart();

  if (currentModal !== "cart") return null;
  //qua tocca poi implementare il cartItem su supabase che avrà ache l'amount!
  //const total = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <Drawer
      open={true}
      onOpenChange={closeModal}
      direction={"right"}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Carrello</DrawerTitle>
          <DrawerDescription>Accedi per utilizzare tutte le funzionalità!</DrawerDescription>
        </DrawerHeader>
        <Table>
          <TableCaption>Your shopping cart</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.productId + item.userId}>
                <TableCell>
                  <Image
                    src={item.product.imageUrl || "/placeholder.png"}
                    alt="product image"
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </TableCell>
                <TableCell className="font-medium">{item.product.name}</TableCell>
                <TableCell>{item.product.description}</TableCell>
                <TableCell className="text-right">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">${getTotalPrice().toFixed(2)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <DrawerFooter>
          <Button onClick={closeModal}>Chiudi</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartModal;
