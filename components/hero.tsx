export default function Hero({ fontClassName }: { fontClassName: string }) {

  return (
    <div className="bg-lightbrown h-[77vh] flex items-center justify-between px-60 relative -z-20">
      <img
        src="/texture.webp"
        className="absolute top-0 left-0 w-full h-full opacity-15 object-cover object-center"
      />
      <div className={"flex flex-col gap-6 " + fontClassName}>
        <h1 className="bg-grayback font-semibold text-8xl w-fit p-4">
          Passa ad un
          <br />
          LIVELLO
          <br />
          superiore
        </h1>
        <h2 className="bg-grayback font-medium text-2xl w-fit p-3">Lorem ipsum dolor sit amet.</h2>
        <button className="bg-orange w-fit p-2 px-6 font-extrabold text-3xl" onClick={test(5)}>ORDER NOW</button>
      </div>
      <div className="relative">
        <img
          src="/white.webp"
          className="absolute left-[-160px] bottom-1/4 w-[300px] h-[300px] -z-10"
        />
        <img
          src="/dark.webp"
          className="absolute right-[-160px] bottom-1/4 w-[300px] h-[300px] -z-10"
        />
        <img
          src="/controller.webp"
          alt="controller SCUF"
          className="w-[600px] h-[600px] z-10"
        />
      </div>
    </div>
  );
}


//stavo cercando di fare un test per capire come rendere interattivo il componente!
function test(x:number):undefined{
  console.log(x+1);
}
