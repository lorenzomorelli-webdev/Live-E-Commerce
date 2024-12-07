import * as React from "react";

import { Modal, Product } from "@/utils/interfaces";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CustomCarousel({
  title,
  filteredProducts,
  setOpenModals,
  setProductContent,
}: {
  title: String;
  filteredProducts: Product[];
  setOpenModals: (value: boolean, modal: Modal) => void;
  setProductContent: (value: Product) => void;
}) {
  return (
    <>
      <h2 className="text-3xl pb-4 font-semibold underline">{title}</h2>

      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[80%]">
        <CarouselContent>
          {filteredProducts?.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/3 flex flex-row justify-center">
              <Card
                className="w-[300px] hover:bg-orange hover:transition-colors cursor-pointer"
                onClick={() => {
                  setProductContent(product);
                  setOpenModals(true, Modal.Product);
                }}>
                <CardTitle className="py-2 text-center">{product.name}</CardTitle>
                <CardContent className="flex flex-col aspect-square items-center justify-center py-2">
                  <img
                    src={product.image.toString()}
                    className="w-full h-full bg-grayback shadow"></img>
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
