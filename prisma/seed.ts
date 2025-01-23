import { PrismaClient, ProductCategory } from "@prisma/client";

const prisma = new PrismaClient();

// Public URLs per le immagini
const imageUrls = [
  "https://ppdlbmnbepqepsuxzjuh.supabase.co/storage/v1/object/public/images/controller1.webp",
  "https://ppdlbmnbepqepsuxzjuh.supabase.co/storage/v1/object/public/images/controller2.webp",
  "https://ppdlbmnbepqepsuxzjuh.supabase.co/storage/v1/object/public/images/controller3.webp",
  "https://ppdlbmnbepqepsuxzjuh.supabase.co/storage/v1/object/public/images/controller4.webp",
  "https://ppdlbmnbepqepsuxzjuh.supabase.co/storage/v1/object/public/images/controller5.webp",
  "https://ppdlbmnbepqepsuxzjuh.supabase.co/storage/v1/object/public/images/controller6.webp",
];

// Funzione per generare dati casuali
function getRandomCategory(): ProductCategory {
  const categories = [
    ProductCategory.Premium,
    ProductCategory.Special,
    ProductCategory.Standard,
    ProductCategory.Vintage,
  ];
  return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomImageUrl(): string {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}

function generateRandomProducts(count: number) {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      name: `Product ${i + 1}`,
      description: `Description for Product ${i + 1}`,
      price: parseFloat((Math.random() * 200 + 20).toFixed(2)), // Prezzo casuale tra 20 e 220
      imageUrl: getRandomImageUrl(), // URL immagine casuale
      category: getRandomCategory(),
    });
  }
  return products;
}

const products = generateRandomProducts(30);

async function main() {
  console.log("Clearing database...");
  // Pulisce il database prima di inserire i nuovi dati
  await prisma.product.deleteMany();

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
