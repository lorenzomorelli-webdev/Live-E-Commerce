"use client";

import { AllProduct } from "@/utils/interfaces";

export default function ScrollBarProduct({
  title,
  filteredProducts,
}: {
  title: String;
  filteredProducts: AllProduct[];
}) {
  return (
    <div className="flex gap-32  items-center justify-between px-60 my-10">
      {filteredProducts?.map((item) => (
        <div
          className="flex flex-col gap-3 items-center"
          key={item.id}>
          <p className="text-center text-darkbrown">
            <b>€{title}</b>
          </p>
          <img
            src={item.image.toString()}
            className="w-60 h-60 bg-grayback shadow"></img>
          <p className="text-center text-darkbrown">
            <b>€{item.price}</b>
          </p>
          <button
            className="p-2 bg-darkbrown text-white"
            /* onClick={() => setProductsList(removeItem(productsList, item.id))} */
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
