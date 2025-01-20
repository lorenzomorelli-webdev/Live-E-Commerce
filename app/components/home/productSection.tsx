import { ProductCategory } from "@prisma/client";
import { Product } from "@/lib/utils";
import { CustomCarousel } from "@/app/components/home/customCarousel";

export default function ProductSection({
  id,
  productsArray,
}: {
  id: string;
  productsArray: Product[];
}) {
  return (
    <div
      id={id}
      className="mb-16">
      <div className={"my-3 flex flex-col items-center justify-center"}>
        <h2 className="font-semibold text-3xl">Scorri per il catalogo</h2>
        <button>
          <a href="#Products">D</a>
        </button>
      </div>
      <div
        id="Products"
        className="bg-grayback flex flex-col items-center relative opacity-85 gap-7 py-7">
        {/**
         * I prodotti sono divisi in 4 categorie, ognuna delle quali ha un carousel
         */}
        <CustomCarousel
          title={ProductCategory.Premium.toString()}
          filteredProducts={productsArray.filter(
            (item) => item.category == ProductCategory.Premium
          )}
        />
        <CustomCarousel
          title={ProductCategory.Special.toString()}
          filteredProducts={productsArray.filter(
            (item) => item.category == ProductCategory.Special
          )}
        />
        <CustomCarousel
          title={ProductCategory.Standard.toString()}
          filteredProducts={productsArray.filter(
            (item) => item.category == ProductCategory.Standard
          )}
        />
        <CustomCarousel
          title={ProductCategory.Vintage.toString()}
          filteredProducts={productsArray.filter(
            (item) => item.category == ProductCategory.Vintage
          )}
        />
        <button className={"bg-orange w-fit p-2 px-6 font-extrabold mb-10 text-2xl"}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
