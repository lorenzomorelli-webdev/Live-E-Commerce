"use client";

import React from "react";
import { useModal } from "@/app/context/modalContext";
import { LoginForm } from "@/app/components/auth/loginForm";
import { SignUpForm } from "@/app/components/auth/signUpForm";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/authContext";
import { AuthMode } from "@/lib/utils";
import { Account } from "@/app/components/auth/profileAccount";

const AuthModal = () => {
  const { currentModal, closeModal } = useModal();
  const { user } = useAuth();
  const [mode, setMode] = React.useState<AuthMode>("login");

  if (currentModal !== "auth") return null;

  if (user) {
    //insert some user information here
    return (
      <Drawer
        open={true}
        onOpenChange={closeModal}
        direction={"right"}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Profilo</DrawerTitle>
            <DrawerDescription>Goditi i tuoi controller personalizzati!</DrawerDescription>
          </DrawerHeader>
          <Account user={user} />
          <DrawerFooter>
            <Button onClick={closeModal}>Chiudi</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  switch (mode) {
    case "login":
      return (
        <Drawer
          open={true}
          onOpenChange={closeModal}
          direction={"right"}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Login</DrawerTitle>
              <DrawerDescription>Accedi per utilizzare tutte le funzionalità!</DrawerDescription>
            </DrawerHeader>
            <LoginForm setMode={setMode} />
            <DrawerFooter>
              <Button onClick={closeModal}>Chiudi</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
    case "sign up":
      return (
        <Drawer
          open={true}
          onOpenChange={closeModal}
          direction={"right"}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Registrati</DrawerTitle>
              <DrawerDescription>
                Registrati per utilizzare tutte le funzionalità!
              </DrawerDescription>
            </DrawerHeader>
            <SignUpForm setMode={setMode} />
            <DrawerFooter>
              <Button onClick={closeModal}>Chiudi</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
  }
};

export default AuthModal;
