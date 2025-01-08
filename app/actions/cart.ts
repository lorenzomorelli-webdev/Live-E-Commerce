"use server";

import { PrismaClient } from "@prisma/client";
import { CartItem } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";

/**
 * these functions are used to interact with the cart in the database and
 * they are used only in the cart context! 
 * all the client side interactions with the cart are done in the cart context
 */

const prisma = new PrismaClient();
/**
 * Add or update a product in the cart.
 */
export async function addToCart(productId: number, quantity: number = 1) {
  const userId = await verifyUser();

  return prisma.cartItem.upsert({
    where: { userId_productId: { userId, productId } },
    update: { quantity: { increment: quantity } },
    create: { userId, productId, quantity },
  });
}

/**
 * Decrement the quantity of a single cart item or remove it if the quantity is 1.
 */
export async function removeSingleItemFromCart(productId: number, quantity: number = 1) {
  const userId = await verifyUser();

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
      data: { quantity: { decrement: quantity } },
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
export async function removeFromCart(productId: number) {
  const userId = await verifyUser();

  return prisma.cartItem.deleteMany({
    where: { userId, productId },
  });
}

/**
 * Retrieve the cart with product details.
 */
export async function getCart(): Promise<CartItem[]> {
  const userId = await verifyUser();

  return prisma.cartItem.findMany({
    where: { userId },
    select: {
      quantity: true,
      product: {
        select: {
          id: true,
          name: true,
          price: true,
          description: true,
          imageUrl: true,
          category: true,
        },
      },
    },
  });
}

async function verifyUser(): Promise<string> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    throw new Error("Unauthorized");
  }
  return data.user.id;
}
