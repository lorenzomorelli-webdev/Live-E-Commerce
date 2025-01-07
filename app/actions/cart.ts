"use server";

import { PrismaClient } from "@prisma/client";
import { CartItem } from "@/utils/utils";

const prisma = new PrismaClient();

/**
 * Add or update a product in the cart.
 */
export async function addToCart(userId: string, productId: number, quantity: number) {
  return prisma.cartItem.upsert({
    where: { userId_productId: { userId, productId } },
    update: { quantity: { increment: quantity } },
    create: { userId, productId, quantity },
  });
}

/**
 * Decrement the quantity of a single cart item or remove it if the quantity is 1.
 */
export async function removeSingleItemFromCart(userId: string, productId: number) {
  // Retrieve the cart item to check its current quantity
  const cartItem = await prisma.cartItem.findUnique({
    where: { userId_productId: { userId, productId } },
  });

  if (!cartItem) {
    throw new Error("Cart item not found");
  }

  if (cartItem.quantity > 1) {
    // Decrement the quantity
    return prisma.cartItem.update({
      where: { userId_productId: { userId, productId } },
      data: { quantity: { decrement: 1 } },
    });
  } else {
    // Remove the item if quantity is 1
    return prisma.cartItem.delete({
      where: { userId_productId: { userId, productId } },
    });
  }
}

/**
 * Remove all occurrences of a product from the cart.
 */
export async function removeFromCart(userId: string, productId: number) {
  return prisma.cartItem.deleteMany({
    where: { userId, productId },
  });
}

/**
 * Retrieve the cart with product details.
 */
export async function getCart(userId: string): Promise<CartItem[]> {
  return prisma.cartItem.findMany({
    where: { userId },
    select: {
      userId: true,
      productId: true,
      quantity: true,
      product: {
        select: {
          name: true,
          price: true,
          description: true,
          imageUrl: true,
        },
      },
    },
  });
}
