'use client'

import { Card, CardContent, CardTitle, CardDescription } from "@/shadcn/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/ui/carousel";
import { useModal } from "@/app/context/modalContext";
import { Product } from "@prisma/client";

export function CustomCarousel({
  title,
  filteredProducts,
}: {
  title: string;
  filteredProducts: Product[];
}) {
  const { openModal } = useModal();

  return (
    <>
      <h2 className="text-3xl pb-4 font-semibold underline">{title}</h2>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[88%]">
        <CarouselContent>
          {filteredProducts?.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/3 flex flex-row justify-center">
              <Card
                className="w-[300px] hover:bg-orange hover:transition-colors cursor-pointer"
                onClick={() => {
                  openModal("product", product);
                }}>
                <CardTitle className="py-2 text-center">{product.name}</CardTitle>
                <CardContent className="flex flex-col aspect-square items-center justify-center py-2">
                  <img
                    src={product.imageUrl.toString()}
                    className="w-full h-full bg-grayback shadow"
                    alt="controller product"
                  />
                </CardContent>
                <CardDescription className="text-center text-2xl font-semibold pb-2">
                  <div>
                    <p>€{product.price}</p>
                  </div>
                </CardDescription>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
