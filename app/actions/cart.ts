"use server";

import { PrismaClient } from "@prisma/client";
import { CartItemWithProduct } from "@/utils/utils";

const prisma = new PrismaClient();

export async function addToCart(userId: string, productId: number, quantity: number) {
  return prisma.cartItem.upsert({
    where: { userId_productId: { userId, productId } },
    update: { quantity: { increment: quantity } },
    create: { userId, productId, quantity },
  });
}

export async function removeFromCart(userId: string, productId: number) {
  return prisma.cartItem.deleteMany({
    where: { userId, productId },
  });
}

export async function getCart(userId: string): Promise<CartItemWithProduct[]> {
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
