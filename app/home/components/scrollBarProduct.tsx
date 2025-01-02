import { Product } from "@prisma/client";

export default function ScrollBarProduct({
  title,
  filteredProducts,
}: {
  title: string;
  filteredProducts: Product[];
}) {
  return (
    <div className="flex gap-32  items-center justify-between px-60 my-10">
      {filteredProducts?.map((item) => (
        <div
          className="flex flex-col gap-3 items-center"
          key={item.id}>
          <p className="text-center text-darkbrown font-medium text-3xl">
            <b>{title}</b>
          </p>
          <img
            src={item.image_url.toString()}
            className="w-60 h-60 bg-grayback shadow"
            alt="product image"
          />
          <p className="text-center text-darkbrown text-2xl">
            <b>€{item.price}</b>
          </p>
          <button
            className="p-3 bg-darkbrown text-white text-2xl"
            /* onClick={() => setProductsList(removeItem(productsList, item.id))} */
          >
            Open
          </button>
        </div>
      ))}
    </div>
  );
}
