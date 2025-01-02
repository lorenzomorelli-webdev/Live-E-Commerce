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
import { Table } from "lucide-react";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "@/shadcn/ui/table";
import { useCart } from "../context/cartContext";

const CartModal = () => {
  const { currentModal, closeModal } = useModal();

  if (currentModal !== "cart") return null;
  const { cartItems, addToCart, getTotalPrice } = useCart();
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
              <TableRow key={item.id}>
                <TableCell>
                  <Image
                    src={item.image_url}
                    alt="product image"
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{1}</TableCell>
                <TableCell className="text-right">${(item.price * 1).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">${total.toFixed(2)}</TableCell>
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
