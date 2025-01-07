"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { CartItem, ProductCartItem } from "@/utils/utils";
import {
  addToCart as serverAddToCart,
  removeFromCart as serverRemoveFromCart,
  getCart as serverGetCart,
} from "@/app/actions/cart";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    userId: string,
    productId: number,
    product: ProductCartItem,
    quantity: number
  ) => void;
  removeFromCart: (userId: string, productId: number) => void;
  removeSingleItemFromCart: (userId: string, productId: number) => void;
  updateQuantity: (userId: string, productId: number, quantity: number) => void;
  clearCart: (userId: string) => void;
  getTotalPrice: () => number;
  fetchCart: (userId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const isValidUserId = (userId: string | null | undefined): boolean => {
    if (!userId) {
      console.warn("Invalid userId. Operation aborted.");
      return false;
    }
    return true;
  };

  // Recuperare il carrello dal backend
  const fetchCart = async (userId: string) => {
    if (!isValidUserId(userId)) return;

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
    productId: number,
    product: ProductCartItem,
    quantity: number
  ) => {
    if (!isValidUserId(userId)) return;

    // Aggiornamento ottimistico
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.productId === productId);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.productId === productId
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [
        ...prev,
        {
          productId,
          userId,
          quantity,
          product: {
            name: product.name,
            price: product.price,
            description: product.description,
            imageUrl: product.imageUrl,
          },
        },
      ];
    });

    try {
      await serverAddToCart(userId, productId, quantity);
    } catch (error) {
      console.error("Errore durante l'aggiunta al carrello:", error);
      fetchCart(userId); // Ripristina lo stato in caso di errore
    }
  };

  // Rimuovere un prodotto dal carrello
  const removeFromCart = async (userId: string, productId: number) => {
    if (!isValidUserId(userId)) return;

    setCartItems((prev) => prev.filter((item) => item.productId !== productId));

    try {
      await serverRemoveFromCart(userId, productId);
    } catch (error) {
      console.error("Errore durante la rimozione dal carrello:", error);
      fetchCart(userId); // Ripristina lo stato in caso di errore
    }
  };

  // Rimuovere un singolo elemento dal carrello
  const removeSingleItemFromCart = async (userId: string, productId: number) => {
    if (!isValidUserId(userId)) return;

    setCartItems((prev) =>
      prev
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    try {
      await serverRemoveFromCart(userId, productId);
    } catch (error) {
      console.error("Errore durante il decremento del carrello:", error);
      fetchCart(userId);
    }
  };

  // Aggiornare la quantità di un prodotto
  const updateQuantity = async (userId: string, productId: number, quantity: number) => {
    if (!isValidUserId(userId)) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );

    try {
      await serverAddToCart(userId, productId, quantity);
    } catch (error) {
      console.error("Errore durante l'aggiornamento della quantità:", error);
      fetchCart(userId);
    }
  };

  // Svuotare il carrello
  const clearCart = (userId: string) => {
    if (!isValidUserId(userId)) return;

    setCartItems([]);
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
        removeSingleItemFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        fetchCart,
      }}
    >
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
