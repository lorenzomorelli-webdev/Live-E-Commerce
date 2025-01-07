export interface CartItem {
  userId: string;
  productId: number;
  quantity: number;
  product: ProductCartItem;
}

export interface ProductCartItem {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}
