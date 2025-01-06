import { addToCart, removeFromCart, getCart } from "@/app/actions/cart";
import { PrismaClient, ProductCategory } from "@prisma/client";

const prisma = new PrismaClient();

const userId = "user123";
const productId = 1;

describe("Cart Actions", () => {
  beforeAll(async () => {
    // Crea un utente di esempio
    await prisma.user.create({
      data: {
        id: userId,
        email: "test@example.com",
        name: "Test User",
      },
    });

    // Crea un prodotto di esempio
    await prisma.product.create({
      data: {
        id: productId,
        name: "Test Product",
        price: 100,
        category: ProductCategory.Premium,
        imageUrl: "http://example.com/image.jpg",
        description: "Test Description",
      },
    });
  });

  afterAll(async () => {
    // Pulisce i dati di esempio
    await prisma.cartItem.delete({ where: { userId_productId: { userId, productId } } });
    await prisma.product.delete({ where: { id: productId } });
    await prisma.user.delete({ where: { id: userId } });
    await prisma.$disconnect();
  });

  it("should add a product to the cart", async () => {
    const userId = "user123";
    const productId = 1;
    const quantity = 2;

    // Aggiungi un prodotto al carrello
    const result = await addToCart(userId, productId, quantity);

    expect(result).toMatchObject({
      userId,
      productId,
      quantity,
    });

    // Verifica che il prodotto sia stato aggiunto al database
    const cartItem = await prisma.cartItem.findFirst({
      where: { userId, productId },
    });

    expect(cartItem).not.toBeNull();
    expect(cartItem?.quantity).toBe(quantity);
  });

  it("should remove a product from the cart", async () => {
    const userId = "user123";
    const productId = 1;

    // Rimuovi il prodotto dal carrello
    await removeFromCart(userId, productId);

    // Verifica che il prodotto sia stato rimosso dal database
    const cartItem = await prisma.cartItem.findFirst({
      where: { userId, productId },
    });

    expect(cartItem).toBeNull();
  });

  it("should return cart items with product details", async () => {
    const userId = "user123";
    const productId = 1;
    const quantity = 2;

    // Aggiungi un prodotto per il test
    await addToCart(userId, productId, quantity);

    // Recupera il contenuto del carrello
    const cart = await getCart(userId);

    expect(cart).toBeInstanceOf(Array);
    expect(cart[0]).toMatchObject({
      userId,
      productId,
      quantity,
      product: {
        id: productId,
        name: "Test Product",
        price: 100,
      },
    });
  });
});
