import ScrollBarProduct from "@/clientSideComponents/scrollBarProduct";
import { AllProduct, mapApiTagToEnum, ProductCategory } from "@/utils/interfaces";

export default function ProductSection() {
  const responseAllProducts: AllProduct[] = [
    {
      id: 1,
      name: "Classic White",
      price: 9.99,
      image: "/white.webp",
      tag: mapApiTagToEnum("Vintage"),
    },
    {
      id: 2,
      name: "Retro Controller",
      price: 19.99,
      image: "/controller.webp",
      tag: mapApiTagToEnum("Vintage"),
    },
    {
      id: 3,
      name: "Dark Edition",
      price: 29.99,
      image: "/dark.webp",
      tag: mapApiTagToEnum("Premium"),
    },
    {
      id: 4,
      name: "Light Mode",
      price: 39.99,
      image: "/white.webp",
      tag: mapApiTagToEnum("Standard"),
    },
    {
      id: 5,
      name: "Stealth Black",
      price: 49.99,
      image: "/dark.webp",
      tag: mapApiTagToEnum("Premium"),
    },
    {
      id: 6,
      name: "Classic Gray",
      price: 12.99,
      image: "/controller.webp",
      tag: mapApiTagToEnum("Vintage"),
    },
    {
      id: 7,
      name: "Midnight Edition",
      price: 44.99,
      image: "/dark.webp",
      tag: mapApiTagToEnum("Premium"),
    },
    {
      id: 8,
      name: "Frost White",
      price: 34.99,
      image: "/white.webp",
      tag: mapApiTagToEnum("Standard"),
    },
    {
      id: 9,
      name: "Neon Burst",
      price: 29.99,
      image: "/controller.webp",
      tag: mapApiTagToEnum("Special"),
    },
    {
      id: 10,
      name: "Shadow Edition",
      price: 54.99,
      image: "/dark.webp",
      tag: mapApiTagToEnum("Premium"),
    },
    {
      id: 11,
      name: "Arctic White",
      price: 22.99,
      image: "/white.webp",
      tag: mapApiTagToEnum("Standard"),
    },
    {
      id: 12,
      name: "Fusion Controller",
      price: 39.99,
      image: "/controller.webp",
      tag: mapApiTagToEnum("Special"),
    },
    {
      id: 13,
      name: "Obsidian Black",
      price: 59.99,
      image: "/dark.webp",
      tag: mapApiTagToEnum("Premium"),
    },
    {
      id: 14,
      name: "Snowy White",
      price: 27.99,
      image: "/white.webp",
      tag: mapApiTagToEnum("Standard"),
    },
    {
      id: 15,
      name: "Galaxy Controller",
      price: 33.99,
      image: "/controller.webp",
      tag: mapApiTagToEnum("Special"),
    },
  ];

  //tocca capire come dividere questi in base alla categoria e poi passarli alla componente scrollBarProduct

  return (
    <div className="mb-16">
      <div className={"my-3 flex flex-col items-center justify-center"}>
        <h2 className="font-semibold text-3xl">Scorri per il catalogo</h2>
        <button>
          <a href="#Products">D</a>
        </button>
      </div>
      <div
        id="Products"
        className="bg-lightbrown flex flex-col items-center relative opacity-85">
        <img
          src="/texture.webp"
          alt=""
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover object-center"
        />
        <ScrollBarProduct title={ProductCategory.Premium.toString()} filteredProducts={responseAllProducts.filter(item => item.tag == ProductCategory.Premium)} />
        <ScrollBarProduct title={ProductCategory.Special.toString()} filteredProducts={responseAllProducts.filter(item => item.tag == ProductCategory.Special)} />
        <ScrollBarProduct title={ProductCategory.Standard.toString()} filteredProducts={responseAllProducts.filter(item => item.tag == ProductCategory.Standard)} />
        <ScrollBarProduct title={ProductCategory.Vintage.toString()} filteredProducts={responseAllProducts.filter(item => item.tag == ProductCategory.Vintage)} />
        <button className={"bg-orange w-fit p-2 px-6 font-extrabold mb-10 text-2xl"}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
