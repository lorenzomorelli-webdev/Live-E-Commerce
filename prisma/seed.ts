import { PrismaClient, ProductCategory } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    name: "Controller Xbox Series X",
    description:
      "Controller ergonomico con design ottimizzato per la console Xbox Series X e Series S.",
    price: 59.99,
    imageUrl: "https://example.com/images/xbox-controller.jpg",
    category: ProductCategory.Premium,
  },
  {
    name: "Controller PS5 DualSense",
    description: "Innovativo controller DualSense con feedback aptico e trigger adattivi per PS5.",
    price: 69.99,
    imageUrl: "https://example.com/images/ps5-controller.jpg",
    category: ProductCategory.Special,
  },
  {
    name: "Controller Nintendo Switch Pro",
    description:
      "Controller di alta qualità per Nintendo Switch, ideale per sessioni di gioco lunghe e confortevoli.",
    price: 59.99,
    imageUrl: "https://example.com/images/switch-controller.jpg",
    category: ProductCategory.Standard,
  },
  {
    name: "Controller Retro NES",
    description:
      "Replica perfetta del classico controller NES, perfetto per gli amanti del retrogaming.",
    price: 39.99,
    imageUrl: "https://example.com/images/nes-controller.jpg",
    category: ProductCategory.Vintage,
  },
  {
    name: "Controller Arcade FightStick",
    description:
      "Controller arcade professionale con pulsanti di alta qualità e joystick per giochi di combattimento.",
    price: 129.99,
    imageUrl: "https://example.com/images/arcade-stick.jpg",
    category: ProductCategory.Special,
  },
  {
    name: "Controller Xbox Elite Series 2",
    description:
      "Controller premium personalizzabile con stick intercambiabili e trigger regolabili.",
    price: 179.99,
    imageUrl: "https://example.com/images/xbox-elite.jpg",
    category: ProductCategory.Premium,
  },
  {
    name: "Controller Steam Deck",
    description: "Controller ufficiale per Steam Deck, compatibile con PC e SteamOS.",
    price: 89.99,
    imageUrl: "https://example.com/images/steam-controller.jpg",
    category: ProductCategory.Standard,
  },
  {
    name: "Controller Logitech F310",
    description: "Controller economico e versatile per PC, compatibile con Windows e macOS.",
    price: 29.99,
    imageUrl: "https://example.com/images/logitech-controller.jpg",
    category: ProductCategory.Standard,
  },
];

async function main() {
  console.log("Seeding database...");

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
