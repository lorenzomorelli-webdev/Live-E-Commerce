import { ProductCategory } from "@prisma/client";

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
