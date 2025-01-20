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
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useFavorites } from "@/app/context/favoritesContext";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const FavoriteModal = () => {
  const { currentModal, closeModal } = useModal();
  const { favoriteItems, removeFromFavorites } = useFavorites();

  if (currentModal !== "favorites") return null;

  return (
    <Drawer
      open={true}
      onOpenChange={closeModal}
      direction={"right"}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Preferiti</DrawerTitle>
          <DrawerDescription>Accedi per utilizzare tutte le funzionalità!</DrawerDescription>
        </DrawerHeader>
        <Table>
          <TableCaption>Lista dei tuoi prodotti preferiti</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Immagine</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Prezzo</TableHead>
              <TableHead>Azioni</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {favoriteItems.map((item) => (
              <TableRow key={`favorite-${item.product.id}`}>
                <TableCell>
                  <Image
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    width={50}
                    height={50}
                    fill={false}
                  />
                </TableCell>
                <TableCell>{item.product.name}</TableCell>
                <TableCell>€{item.product.price}</TableCell>
                <TableCell>
                  <Button onClick={() => removeFromFavorites(item.product)}>Rimuovi</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <DrawerFooter>
          <Button onClick={closeModal}>Chiudi</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FavoriteModal;
