"use client";

import { product } from "@/utlis/interfaces";

interface Props {
  fontClassName: string;
  products: product[];
}

/*
function removeItem(products: product[], productId: number) {
  const productsTemp = products.filter((item) => item.id != productId);
  console.log(productsTemp);
}

function test() {
  console.log("A");
}
*/

export default function Products({ fontClassName, products }: Props) {
  return (
    <div className="mb-16">
      <div className={"my-3 flex flex-col items-center justify-center " + fontClassName}>
        <h2 className="font-semibold text-3xl">Scorri per il catalogo</h2>
        <button>
          <a href="#Products">D</a>
        </button>
      </div>
      <div
        id="Products"
        className="bg-lightbrown flex flex-col items-center relative -z-20">
        <img
          src="/texture.webp"
          alt=""
          className="absolute top-0 left-0 opacity-15 -z-10 w-full h-full object-cover object-center"
        />
        <div className="flex gap-32  items-center justify-between px-60 my-10">
          {products?.map((product) => (
            <div
              className="flex-col gap-3"
              key={product.id}>
              <img
                src={product.image.toString()}
                className="w-60 h-60 bg-grayback shadow"></img>
              <p className="text-center text-white">
                <b>€{product.price}</b>
              </p>
              <button onClick={() => console.log("A")}>remove</button>
            </div>
          ))}
        </div>
        <button
          className={"bg-orange w-fit p-2 px-6 font-extrabold mb-10 text-2xl " + fontClassName}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

//tocca modificare l'onClick per farlo funzionare!
