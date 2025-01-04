import { addToCart } from "@/app/actions/cart";
import { PrismaClient } from "@prisma/client";

// Mock di Prisma
const prisma = new PrismaClient();
jest.mock("@prisma/client", () => ({
  PrismaClient: jest.fn(() => ({
    cartItem: {
      upsert: jest.fn(),
    },
  })),
}));

describe("Cart Actions", () => {
  const userId = "user123";
  const productId = 1;
  const quantity = 2;

  it("should add a product to the cart", async () => {
    const mockUpsert = prisma.cartItem.upsert as jest.Mock;

    mockUpsert.mockResolvedValueOnce({
      userId,
      productId,
      quantity,
    });

    const result = await addToCart(userId, productId, quantity);

    expect(mockUpsert).toHaveBeenCalledWith({
      where: { userId_productId: { userId, productId } },
      update: { quantity: { increment: quantity } },
      create: { userId, productId, quantity },
    });

    expect(result).toEqual({
      userId,
      productId,
      quantity,
    });
  });
});
