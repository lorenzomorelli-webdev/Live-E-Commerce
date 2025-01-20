"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { CartItem, Product } from "@/lib/utils";
import {
  addToCart as serverAddToCart,
  removeFromCart as serverRemoveFromCart,
  removeSingleItemFromCart as serverRemoveSingleItemFromCart,
  getCart as serverGetCart,
} from "@/app/actions/cart";
import { useAuth } from "@/app/context/authContext";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (product: Product) => void;
  removeSingleItemFromCart: (product: Product, quantity?: number) => void;
  updateQuantity: (product: Product, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  fetchCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useAuth();

  const isValidUserId = useCallback((): boolean => {
    if (!user) {
      console.warn("Invalid userId. Operation aborted.");
      return false;
    }
    return true;
  }, [user]);

  // Recuperare il carrello dal backend
  const fetchCart = useCallback(async () => {
    if (!isValidUserId()) return;

    try {
      const serverCart = await serverGetCart();
      setCartItems(serverCart);
    } catch (error) {
      console.error("Errore durante il recupero del carrello:", error);
    }
  }, [isValidUserId]);

  // Effetto per eseguire fetchCart solo dopo che lo stato user è stato popolato
  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user, fetchCart]);

  // Funzione per creare un oggetto CartItem
  const createCartItem = (product: Product, quantity: number): CartItem => ({
    quantity,
    product: {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
      category: product.category,
    },
  });

  // Aggiungere un prodotto al carrello
  const addToCart = async (product: Product, quantity: number = 1) => {
    if (!isValidUserId()) return;

    // Aggiornamento ottimistico
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.product.id === product.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.product.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prev, createCartItem(product, quantity)];
    });

    try {
      await serverAddToCart(product.id, quantity);
    } catch (error) {
      console.error("Errore durante l'aggiunta al carrello:", error);
      fetchCart(); // Ripristina lo stato in caso di errore
    }
  };

  // Rimuovere un prodotto dal carrello
  const removeFromCart = async (product: Product) => {
    if (!isValidUserId()) return;

    setCartItems((prev) => prev.filter((item) => item.product.id !== product.id));

    try {
      await serverRemoveFromCart(product.id);
    } catch (error) {
      console.error("Errore durante la rimozione dal carrello:", error);
      fetchCart(); // Ripristina lo stato in caso di errore
    }
  };

  // Rimuovere un singolo elemento dal carrello
  const removeSingleItemFromCart = async (product: Product, quantity: number = 1) => {
    if (!isValidUserId()) return;

    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: Math.max(item.quantity - quantity, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    try {
      await serverRemoveSingleItemFromCart(product.id, quantity);
    } catch (error) {
      console.error("Errore durante il decremento del carrello:", error);
      fetchCart();
    }
  };

  // Aggiornare la quantità di un prodotto
  const updateQuantity = async (product: Product, quantity: number) => {
    if (!isValidUserId()) return;

    setCartItems((prev) =>
      prev.map((item) => (item.product.id === product.id ? { ...item, quantity } : item))
    );

    try {
      await serverAddToCart(product.id, quantity);
    } catch (error) {
      console.error("Errore durante l'aggiornamento della quantità nel carrello:", error);
      fetchCart();
    }
  };

  // Svuotare il carrello
  const clearCart = () => {
    if (!isValidUserId()) return;

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
