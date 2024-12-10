import { NextResponse, NextRequest } from "next/server";
import { PrismaClient, Product } from "@prisma/client";
import Error from "next/error";

const prisma = new PrismaClient();

export async function GET() {
  try {
    debugger;
    const products = await prisma.product.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products");
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: NextRequest) {
  try {
    debugger;
    const body = await req.json();
    const { name, price, image_url, tag } = body;

    if (!name || !price) {
      return NextResponse.json({ error: "Name and price are required" }, { status: 400 });
    }

    const newProduct = await prisma.product.create({
      data: { name, price, image_url, tag },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product");
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest) {
  try {
    debugger;
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const deletedProduct = await prisma.product.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(deletedProduct, { status: 200 });
  } catch (error: any) {
    console.error("Error deleting product");
    if (error.code === "P2025") {
      // Gestisce il caso in cui l'elemento non esista
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
