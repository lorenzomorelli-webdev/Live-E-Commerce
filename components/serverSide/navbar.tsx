import { Button } from "../ui/button";

const Buttons = [
  {
    name: "Home",
    href: "#Hero",
  },
  {
    name: "Catalogo",
    href: "#Catalogo",
  },
  {
    name: "Sponsor",
    href: "#Sponsor",
  },
  {
    name: "Traguardi",
    href: "#Traguardi",
  },
];

export default function Navbar() {
  /* <item.icon className="w-6 h-6"/> */

  return (
    <header id="navbar">
      <nav className="flex items-center justify-between my-3 px-60">
        <div>
          <img
            src="/lolloinformatica.webp"
            className="shadow"
            width="80"
            height="80"
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-center gap-5">
          {Buttons.map((item, index) => (
            <a href={item.href} key={index}>
              <Button
                key={index}
                className={
                  "w-[100px] h-[46px] text-lg font-semibold flex items-center justify-center bg-lightbrown text-orange hover:bg-orange hover:text-darkbrown active:bg-orange active:text-darkbrown rounded-none"
                }>
                {item.name}
              </Button>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
