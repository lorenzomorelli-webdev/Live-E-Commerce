import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/ui/carousel";
import { Product } from "@/utils/utils";
import { CustomCard } from "./customCard";

export function CustomCarousel({
  title,
  filteredProducts,
}: {
  title: string;
  filteredProducts: Product[];
}) {
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
              <CustomCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
