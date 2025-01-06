"use client";

import React from "react";
import { useModal } from "@/app/context/modalContext";
import { LoginForm } from "@/app/(auth)/login/components/LoginForm";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/shadcn/ui/drawer";
import { Button } from "@/shadcn/ui/button";

const AuthModal = () => {
  const { currentModal, closeModal } = useModal();

  if (currentModal !== "auth") return null;

  return (
    <Drawer
      open={true}
      onOpenChange={closeModal}
      direction={"right"}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Login o Registrati</DrawerTitle>
          <DrawerDescription>Accedi per utilizzare tutte le funzionalità!</DrawerDescription>
        </DrawerHeader>
        <LoginForm />
        <DrawerFooter>
          <Button onClick={closeModal}>Chiudi</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AuthModal;
