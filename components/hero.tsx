export default function Hero() {
  return (
    <div className="bg-lightbrown h-[77vh] flex items-center justify-between px-60">
      <div className="flex flex-col gap-6">
        <h1 className="bg-grayback font-extrabold text-7xl w-fit p-4">Passa ad un<br />LIVELLO<br />superiore</h1>
        <h2 className="bg-grayback font-medium text-lg w-fit p-3">Lorem ipsum dolor sit amet.</h2>
        <button className="bg-orange w-fit p-2 px-6 font-extrabold">ORDER NOW</button>
      </div>
      <div>
        <div className="rounded-full bg-grayback w-[400px] h-[400px]"></div>
      </div>
    </div>
  );
}
