import { ProductCategory } from "@prisma/client";

export interface FavoriteItem {
  product: Product;
}

export interface CartItem {
  quantity: number;
  product: Product;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: ProductCategory;
}

export const productSelect = {
  id: true,
  name: true,
  price: true,
  description: true,
  imageUrl: true,
  category: true,
};

export type AuthMode = "login" | "sign up";