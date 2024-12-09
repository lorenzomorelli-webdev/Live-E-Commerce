export default function Hero() {
  return (
    <div className="bg-lightbrown h-[77vh] flex items-center justify-between px-60 relative -z-20">
      <img
        src="/texture.webp"
        className="absolute top-0 left-0 w-full h-full opacity-15 object-cover object-center"
      />
      <div className={"flex flex-col gap-6"}>
        <h1 className="bg-grayback font-semibold text-8xl w-fit p-4">
          Passa ad un LIVELLO superiore
        </h1>
        <h2 className="bg-grayback font-medium text-2xl w-fit p-3">Lorem ipsum dolor sit amet.</h2>
        <button className="bg-orange w-fit p-2 px-6 font-extrabold text-3xl">ORDER NOW</button>
      </div>
      <div>
        <img
          src="/controller.webp"
          alt="controller SCUF"
          className="w-[600px] h-[600px] z-10"
        />
      </div>
    </div>
  );
}
