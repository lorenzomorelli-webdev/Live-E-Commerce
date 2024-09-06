import { handjet } from "@/app/page";

export default function Hero() {
  return (
    <div className="bg-lightbrown h-[77vh] flex items-center justify-between px-60">
      <div className={"flex flex-col gap-6 " + handjet.className}>
        <h1 className="bg-grayback font-semibold text-8xl w-fit p-4">Passa ad un<br />LIVELLO<br />superiore</h1>
        <h2 className="bg-grayback font-medium text-2xl w-fit p-3">Lorem ipsum dolor sit amet.</h2>
        <button className="bg-orange w-fit p-2 px-6 font-extrabold text-3xl">ORDER NOW</button>
      </div>
      <div className="pr-9">
        <div className="rounded-full bg-grayback w-[400px] h-[400px]">
          <img src="/controller.webp" alt="controller SCUF" />
        </div>
      </div>
    </div>
  );
}
