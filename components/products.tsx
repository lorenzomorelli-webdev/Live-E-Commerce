import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { handjet } from "@/app/page";

export default function Products() {
  return (
    <div className="mb-16">
      <div className={"my-3 flex flex-col items-center justify-center " + handjet.className}>
        <h2 className="font-semibold text-3xl">Scorri per il catalogo</h2>
        <button>
          <a href="#Products">
            <ArrowDownCircleIcon className="h-9 w-9 text-darkbrown" />
          </a>
        </button>
      </div>
      <div
        id="Products"
        className="bg-lightbrown flex flex-col items-center relative -z-20">
          <img src="/texture.webp" alt="" className="absolute top-0 left-0 opacity-15 -z-10 w-full h-full object-cover object-center" />
        <div className="flex gap-32  items-center justify-between px-60 my-10">
          <img
            src="/white.webp"
            className="rounded-md w-48 h-48 bg-grayback"></img>
          <img
            src="/controller.webp"
            className="rounded-md w-80 h-80 bg-grayback"></img>
          <img
            src="/dark.webp"
            className="rounded-md w-48 h-48 bg-grayback"></img>
        </div>
        <button className="bg-orange w-fit p-2 px-6 font-extrabold mb-10">ORDER NOW</button>
      </div>
    </div>
  );
}
