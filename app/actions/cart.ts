"use server";

import { PrismaClient } from "@prisma/client";
import { CartItem, productSelect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

async function verifyUser(): Promise<string> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    throw new Error("Unauthorized");
  }
  return data.user.id;
}

// Costante per la selezione dei campi del prodotto

/**
 * Add or update a product in the cart.
 * @param productId - The ID of the product to add or update.
 * @param quantity - The quantity of the product to add (default is 1).
 * @returns The updated or created CartItem object.
 */
export async function addToCart(productId: number, quantity: number = 1): Promise<CartItem> {
  const userId = await verifyUser();

  const result = await prisma.cartItem.upsert({
    where: { userId_productId: { userId, productId } },
    update: { quantity: { increment: quantity } },
    create: { userId, productId, quantity },
    select: {
      quantity: true,
      product: {
        select: productSelect,
      },
    },
  });

  console.log("addToCart result:", result);
  return result;
}

/**
 * Decrement the quantity of a single cart item or remove it if the quantity is 1.
 * @param productId - The ID of the product to decrement or remove.
 * @param quantity - The quantity to decrement (default is 1).
 * @returns The updated CartItem object if decremented, or the deleted CartItem object if removed.
 */
export async function removeSingleItemFromCart(
  productId: number,
  quantity: number = 1
): Promise<CartItem> {
  const userId = await verifyUser();

  // Retrieve the cart item to check its current quantity
  const cartItem = await prisma.cartItem.findUnique({
    where: { userId_productId: { userId, productId } },
    select: {
      quantity: true,
      product: {
        select: productSelect,
      },
    },
  });

  if (!cartItem) {
    throw new Error("Cart item not found");
  }

  if (cartItem.quantity > 1) {
    // Decrement the quantity
    const result = await prisma.cartItem.update({
      where: { userId_productId: { userId, productId } },
      data: { quantity: { decrement: quantity } },
      select: {
        quantity: true,
        product: {
          select: productSelect,
        },
      },
    });

    console.log("removeSingleItemFromCart (decrement) result:", result);
    return result;
  } else {
    // Remove the item if quantity is 1
    const result = await prisma.cartItem.delete({
      where: { userId_productId: { userId, productId } },
      select: {
        quantity: true,
        product: {
          select: productSelect,
        },
      },
    });

    console.log("removeSingleItemFromCart (delete) result:", result);
    return result;
  }
}

/**
 * Remove all occurrences of a product from the cart.
 * @param productId - The ID of the product to remove.
 * @returns An object containing the count of deleted items.
 */
export async function removeFromCart(productId: number) {
  const userId = await verifyUser();

  const result = await prisma.cartItem.deleteMany({
    where: { userId, productId },
  });

  console.log("removeFromCart result:", result);
  return result;
}

/**
 * Retrieve the cart with product details.
 * @returns An array of CartItem objects.
 */
export async function getCart(): Promise<CartItem[]> {
  const userId = await verifyUser();

  const result = await prisma.cartItem.findMany({
    where: { userId },
    select: {
      quantity: true,
      product: {
        select: productSelect,
      },
    },
  });

  console.log("getCart result:", result);
  return result;
}