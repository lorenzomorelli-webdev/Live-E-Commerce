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
  //implementing a better way to retrieve userId, a lot of context calls
  const { currentModal, closeModal } = useModal();
  const { cartItems, getTotalPrice, addToCart, removeFromCart, removeSingleItemFromCart } =
    useCart();

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
              <TableRow key={`cart-${item.product.id}`}>
                <TableCell>
                  <Image
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </TableCell>
                <TableCell className="font-medium">{item.product.name}</TableCell>
                {/**
                 * REMEMBER:
                 * thinking about the security implications of using this calls without server-side validation/checking about users
                 * it can be used another user's id to manipulation other carts?
                 */}
                <TableCell>
                  <Button onClick={() => removeSingleItemFromCart(item.product)}>-</Button>
                  {item.quantity}
                  <Button onClick={() => addToCart(item.product)}>+</Button>{" "}
                  <Button onClick={() => removeFromCart(item.product)}>x</Button>{" "}
                </TableCell>
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
