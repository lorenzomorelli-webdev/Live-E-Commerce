import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const Buttons = [
  {
    name: "Home",
    href: "#Hero",
    icon: ChartPieIcon,
  },
  {
    name: "Catalogo",
    href: "#Catalogo",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Sponsor",
    href: "#Sponsor",
    icon: FingerPrintIcon,
  },
  {
    name: "Traguardi",
    href: "#Traguardi",
    icon: SquaresPlusIcon,
  },
];

export default function Navbar() {
  /* <item.icon className="w-6 h-6"/> */

  return (
    <header id="navbar">
      <nav className="flex items-center justify-between my-3 px-60">
        <div>
          <img
            src="/lolloinformatica.png"
            className="w-20 rounded-full"></img>
        </div>
        <div className="flex items-center justify-center gap-5">
          {Buttons.map((item, index) => (
            <a
              key={index}
              className={
                "w-24 h-10 font-semibold flex items-center justify-center " +
                (item.name === "Home" ? "bg-orange text-darkbrown" : "bg-lightbrown text-orange")
              }
              href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
