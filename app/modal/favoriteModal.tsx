"use client";

import React from "react";
import { useModal } from "@/app/context/modalContext";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/shadcn/ui/drawer";
import { Button } from "@/shadcn/ui/button";
import Image from "next/image";

const FavoriteModal = () => {
  const { currentModal, closeModal } = useModal();

  if (currentModal !== "favorites") return null;

  return (
    <Drawer
      open={true}
      onOpenChange={closeModal}
      direction={"left"}>
      <DrawerContent>
        <DrawerHeader className="flex flex-col items-center">
          <DrawerTitle>{"Favorite Modal"}</DrawerTitle>
          <Image
            src={"/placeholder.png"}
            alt="product image"
            width={500}
            height={300}
            fill={false}
          />
          <DrawerDescription>€{"test"}</DrawerDescription>
          <DrawerDescription>{"test"}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>ACQUISTA</Button>
          <Button>CHIUDI</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FavoriteModal;
