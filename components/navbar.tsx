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
            src="/lolloinformatica.png"
            className="w-20 shadow"></img>
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
