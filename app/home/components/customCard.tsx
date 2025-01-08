"use client";

import { useModal } from "@/app/context/modalContext";
import { Card, CardTitle, CardContent, CardDescription } from "@/shadcn/ui/card";
import Image from "next/image";
import { Product } from "@/utils/utils";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/cartContext";

type CustomCardVariant = "default" | "sales" | "promo";

export function CustomCard({
  product,
  variant = "default",
}: {
  product: Product;
  variant?: CustomCardVariant;
}) {
  const { openModal } = useModal();
  const { addToCart } = useCart();

  switch (variant) {
    case "default":
      return (
        <Card className="w-[300px] hover:bg-orange hover:transition-colors">
          <CardTitle className="py-2 text-center">{product.name}</CardTitle>
          <CardContent
            className="relative flex flex-col aspect-square items-center justify-center py-2 cursor-pointer"
            onClick={() => {
              openModal("product", product);
            }}>
            <Image
              src={product.imageUrl.toString()}
              className="w-full h-full bg-grayback shadow"
              fill={true}
              alt={product.name}
            />
          </CardContent>
          <CardDescription className="text-center text-2xl font-semibold pb-2">
            <div className="flex flex-row justify-between">
              <p>€{product.price}</p>
              <Heart
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                  openModal("favorites", product);
                }}
              />
              <ShoppingCart
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                  openModal("cart", product);
                  addToCart(product);
                }}
              />
            </div>
          </CardDescription>
        </Card>
      );
    case "sales":
      return <></>;
    case "promo":
      return <></>;
  }
}
