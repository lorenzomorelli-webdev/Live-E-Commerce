"use server";

import { PrismaClient } from "@prisma/client";
import { createClient } from "@/utils/supabase/server";
import { FavoriteItem, productSelect } from "@/utils/utils";

const prisma = new PrismaClient();

async function verifyUser(): Promise<string> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    throw new Error("Unauthorized");
  }
  return data.user.id;
}

/**
 * Add a product to the favorites.
 */
export async function addToFavorites(productId: number): Promise<FavoriteItem> {
  const userId = await verifyUser();

  // Check if the product is already in the favorites
  const existingFavorite = await prisma.favoriteItem.findUnique({
    where: { userId_productId: { userId, productId } },
    select: { product: { select: productSelect } },
  });

  if (!existingFavorite) {
    // Add the product to the favorites if it's not already present
    return prisma.favoriteItem.create({
      data: { userId, productId },
      select: { product: { select: productSelect } },
    });
  }

  // If the product is already in the favorites, do nothing
  return existingFavorite;
}

/**
 * Remove a product from the favorites.
 */
export async function removeFromFavorites(productId: number) {
  const userId = await verifyUser();

  return prisma.favoriteItem.deleteMany({
    where: { userId, productId },
  });
}

/**
 * Retrieve the favorites with product details.
 */
export async function getFavorites() {
  const userId = await verifyUser();

  return prisma.favoriteItem.findMany({
    where: { userId },
    select: {
      product: { select: productSelect },
    },
  });
}
