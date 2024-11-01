"use client";

import { product, ProductProps } from "@/utlis/interfaces";
import { useState } from "react";

interface IProps {
  props: ProductProps;
}

function removeItem(productsList: product[], productId: number): product[] {
  return productsList.filter((item) => item.id != productId);
}

export default function Products({ props }: IProps) {
  const [productsList, setProductsList] = useState<product[]>(props.products);
  return (
    <div className="mb-16">
      <div className={"my-3 flex flex-col items-center justify-center " + props.fontClassName}>
        <h2 className="font-semibold text-3xl">Scorri per il catalogo</h2>
        <button>
          <a href="#Products">D</a>
        </button>
      </div>
      <div
        id="Products"
        className="bg-lightbrown flex flex-col items-center relative opacity-85">
        <img
          src="/texture.webp"
          alt=""
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover object-center"
        />
        <div className="flex gap-32  items-center justify-between px-60 my-10">
          {productsList?.map((item) => (
            <div
              className="flex flex-col gap-3 items-center"
              key={item.id}>
              <img
                src={item.image.toString()}
                className="w-60 h-60 bg-grayback shadow"></img>
              <p className="text-center text-darkbrown">
                <b>€{item.price}</b>
              </p>
              <button
                className="p-2 bg-darkbrown text-white"
                onClick={() => setProductsList(removeItem(productsList, item.id))}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          className={
            "bg-orange w-fit p-2 px-6 font-extrabold mb-10 text-2xl " + props.fontClassName
          }>
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

//tocca modificare l'onClick per farlo funzionare!
