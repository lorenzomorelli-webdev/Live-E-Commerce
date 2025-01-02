import { Product, ProductCategory } from "@prisma/client";

export const defaultProduct: Product = {
  id: 999999,
  name: "placeholder",
  price: 999999,
  imageUrl: "/placeholder.webp",
  category: ProductCategory.Premium,
  createdAt: new Date(),
  updatedAt: new Date(),
};
