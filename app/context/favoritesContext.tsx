"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { FavoriteItem, Product } from "@/lib/utils";
import {
  addToFavorites as serverAddToFavorites,
  removeFromFavorites as serverRemoveFromFavorites,
  getFavorites as serverGetFavorites,
} from "@/app/actions/favorites";
import { useAuth } from "@/app/context/authContext";

interface FavoritesContextType {
  favoriteItems: FavoriteItem[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (product: Product) => void;
  fetchFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);
  const { user } = useAuth();

  const isValidUserId = useCallback((): boolean => {
    if (!user) {
      console.warn("Invalid userId. Operation aborted.");
      return false;
    }
    return true;
  }, [user]);

  // Recuperare i preferiti dal backend
  const fetchFavorites = useCallback(async () => {
    if (!isValidUserId()) return;

    try {
      const serverFavorites = await serverGetFavorites();
      setFavoriteItems(serverFavorites);
    } catch (error) {
      console.error("Errore durante il recupero dei preferiti:", error);
    }
  }, [isValidUserId]);

  // Effetto per eseguire fetchFavorites solo dopo che lo stato user è stato popolato
  useEffect(() => {
    if (user) {
      fetchFavorites();
    }
  }, [user, fetchFavorites]);

  // Aggiungere un prodotto ai preferiti
  const addToFavorites = async (product: Product) => {
    if (!isValidUserId()) return;

    // Aggiornamento ottimistico
    setFavoriteItems((prev) => {
      const existingItem = prev.find((favoriteItem) => favoriteItem.product.id === product.id);
      if (existingItem) {
        return prev;
      }
      return [...prev, { product: product }];
    });

    try {
      await serverAddToFavorites(product.id);
    } catch (error) {
      console.error("Errore durante l'aggiunta ai preferiti:", error);
      fetchFavorites(); // Ripristina lo stato in caso di errore
    }
  };

  // Rimuovere un prodotto dai preferiti
  const removeFromFavorites = async (product: Product) => {
    if (!isValidUserId()) return;

    // Aggiornamento ottimistico
    setFavoriteItems((prev) => prev.filter((item) => item.product.id !== product.id));

    try {
      await serverRemoveFromFavorites(product.id);
    } catch (error) {
      console.error("Errore durante la rimozione dai preferiti:", error);
      fetchFavorites(); // Ripristina lo stato in caso di errore
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        fetchFavorites,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites deve essere utilizzato all'interno di un FavoritesProvider");
  }
  return context;
};
