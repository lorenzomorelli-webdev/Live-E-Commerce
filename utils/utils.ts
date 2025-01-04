import { CartItem } from "@prisma/client";

export interface CartItemWithProduct extends CartItem {
    product: {
      id: number;
      name: string;
      price: number;
      description?: string; // Campi che ti servono da `Product`
      imageUrl?: string;
    };
  }
  