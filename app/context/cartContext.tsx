"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { CartItemWithProduct } from "@/utils/utils";
import {
  addToCart as serverAddToCart,
  removeFromCart as serverRemoveFromCart,
  getCart as serverGetCart,
} from "@/app/actions/cart";

interface CartContextType {
  cartItems: CartItemWithProduct[];
  addToCart: (userId: string, item: { productId: number; quantity: number; price: number }) => void;
  removeFromCart: (userId: string, productId: number) => void;
  updateQuantity: (userId: string, productId: number, quantity: number) => void;
  clearCart: (userId: string) => void;
  getTotalPrice: () => number;
  fetchCart: (userId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemWithProduct[]>([]);

  // Recuperare il carrello dal backend
  const fetchCart = async (userId: string) => {
    try {
      const serverCart = await serverGetCart(userId);
      setCartItems(serverCart);
    } catch (error) {
      console.error("Errore durante il recupero del carrello:", error);
    }
  };

  // Aggiungere un prodotto al carrello
  const addToCart = async (
    userId: string,
    item: { productId: number; quantity: number; price: number }
  ) => {
    // Aggiornamento ottimistico
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.productId === item.productId);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [
        ...prev,
        {
          id: Date.now(),
          productId: item.productId,
          userId,
          quantity: item.quantity,
          product: {
            id: item.productId,
            name: "Nome prodotto temporaneo", // Placeholder fino a sincronizzazione
            price: item.price,
          },
        },
      ];
    });

    try {
      // Sincronizza con il server
      await serverAddToCart(userId, item.productId, item.quantity);
    } catch (error) {
      console.error("Errore durante l'aggiunta al carrello:", error);
      fetchCart(userId); // Ripristina lo stato in caso di errore
    }
  };

  // Rimuovere un prodotto dal carrello
  const removeFromCart = async (userId: string, productId: number) => {
    // Aggiornamento ottimistico
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));

    try {
      // Sincronizza con il server
      await serverRemoveFromCart(userId, productId);
    } catch (error) {
      console.error("Errore durante la rimozione dal carrello:", error);
      fetchCart(userId); // Ripristina lo stato in caso di errore
    }
  };

  // Aggiornare la quantità di un prodotto
  const updateQuantity = async (userId: string, productId: number, quantity: number) => {
    // Aggiornamento ottimistico
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );

    try {
      // Sincronizza con il server
      await serverAddToCart(userId, productId, quantity);
    } catch (error) {
      console.error("Errore durante l'aggiornamento della quantità:", error);
      fetchCart(userId); // Ripristina lo stato in caso di errore
    }
  };

  // Svuotare il carrello
  const clearCart = (userId: string) => {
    setCartItems([]); // Aggiornamento ottimistico
    console.warn("Server-side clearing del carrello non implementato.");
  };

  // Calcolare il prezzo totale
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        fetchCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve essere utilizzato all'interno di un CartProvider");
  }
  return context;
};
