import Image from "next/image";

export default function Hero({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="bg-lightbrown h-[77vh] flex items-center justify-between relative -z-20 px-20">
      <Image
        src="/texture.webp"
        className="absolute top-0 left-0 w-full h-full opacity-15 object-cover object-center"
        fill={true}
        alt="hero background"
      />
      <div className={"flex flex-col gap-6"}>
        <h1 className="bg-grayback font-semibold text-8xl w-fit p-4">
          Passa ad un LIVELLO superiore
        </h1>
        <h2 className="bg-grayback font-medium text-2xl w-fit p-3">Lorem ipsum dolor sit amet.</h2>
        <button className="bg-orange w-fit p-2 px-6 font-extrabold text-3xl">ORDER NOW</button>
      </div>
      <div className="w-fit">
        <Image
          src="https://ppdlbmnbepqepsuxzjuh.supabase.co/storage/v1/object/public/images/controller2.webp"
          alt="controller SCUF"
          width={800}
          height={800}
          fill={false}
          className="z-10"
        />
      </div>
    </div>
  );
}
