import { getCart } from "@/app/actions/cart";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Cart Integration", () => {
  beforeAll(async () => {
    // Crea dati di esempio nel database
    await prisma.cartItem.create({
      data: {
        userId: "user123",
        productId: 1,
        quantity: 2,
      },
    });
  });

  afterAll(async () => {
    // Pulisce i dati di esempio
    await prisma.cartItem.deleteMany();
    await prisma.$disconnect();
  });

  it("should return cart items with product details", async () => {
    const result = await getCart("user123");

    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toHaveProperty("product");
    expect(result[0].product).toHaveProperty("name", "Test Product");
  });
});
