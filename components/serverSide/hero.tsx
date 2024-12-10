
export default function Hero() {
  return (
    <div className="bg-lightbrown h-[77vh] flex items-center justify-between px-60 relative -z-20">
      <img
        src="/texture.webp"
        className="absolute top-0 left-0 w-full h-full opacity-15 object-cover object-center"
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
        <img
          src="https://afjrakkbravwzntlkveh.supabase.co/storage/v1/object/sign/images/controller_2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY29udHJvbGxlcl8yLndlYnAiLCJpYXQiOjE3MzM3NjA0MjcsImV4cCI6MTc2NTI5NjQyN30.J5JqU9-36nak7haOqa3nkbOsinA9veLwboHZV1POdJM&t=2024-12-09T16%3A07%3A07.011Z"
          alt="controller SCUF"
          width="800"
          height="800"
          className="z-10"
        />
      </div>
    </div>
  );
}
