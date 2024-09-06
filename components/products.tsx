import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function Products() {
  return (
    <div className="mb-16">
      <div className="my-3 flex flex-col items-center justify-center">
        <h2 className="font-semibold text-xl">Scorri per il catalogo</h2>
        <button>
          <ArrowDownCircleIcon className="h-9 w-9 text-darkbrown" />
        </button>
      </div>
      <div className="bg-lightbrown flex flex-col items-center">
        <div className="flex gap-32  items-center justify-between px-60 my-10">
          <div className="rounded-full w-48 h-48 bg-grayback"></div>
          <div className="rounded-full w-80 h-80 bg-grayback"></div>
          <div className="rounded-full w-48 h-48 bg-grayback"></div>
        </div>
        <button className="bg-orange w-fit p-2 px-6 font-extrabold mb-10">ORDER NOW</button>
      </div>
    </div>
  );
}
