
export default function Footer() {
  return (
    <footer>
      <div className="bg-darkbrown py-10 flex flex-col items-center">
        <h2 className="text-orange font-semibold text-2xl">TRAGUARDI</h2>
        <div className="flex text-grayback font-medium text-lg pt-6 gap-6 px-60">
          <h3 className="flex items-center gap-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum consectetur
            adipisci!
          </h3>
          <h3 className="flex items-center gap-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, consectetur molestias.
          </h3>
          <h3 className="flex items-center gap-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta minus et quae harum.
          </h3>
        </div>
      </div>
      <div className="bg-lightbrown flex justify-between px-60 py-10 -z-20 relative">
        <img
          src="/texture.webp"
          className="absolute top-0 left-0 w-full h-full opacity-15 -z-10 object-cover object-center"
          alt="background"
        />
        <div>
          <p className="text-orange font-semibold mb-6">NEGOZIO</p>
          <ul className="text-grayback font-normal">
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-orange font-semibold mb-6">ASSISTENZA</p>
          <ul className="text-grayback font-normal">
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-orange font-semibold mb-6">AZIENDA</p>
          <ul className="text-grayback font-normal">
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-orange font-semibold mb-6">ESPORTS</p>
          <ul className="text-grayback font-normal">
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-orange font-semibold mb-6">NEWSLETTER</p>
          <p className="text-grayback font-normal mb-6">
            Iscriviti per non perderti le nostre fantastiche offerte
          </p>
          <form>
            <input
              className="p-2"
              placeholder="Email Andress"></input>
            <button className="rounded bg-darkbrown text-grayback p-2 font-bold">ISCRIVITI</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
