export interface CartItemWithProduct {
  userId: string;
  productId: number;
  quantity: number;
  product: {
    name: string;
    price: number;
    description: string; // Campi che ti servono da `Product`
    imageUrl: string;
  };
}
