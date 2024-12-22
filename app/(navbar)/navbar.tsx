import Image from "next/image";
import UserIcons from "./userIcon";

export default function Navbar() {

  return (
    <header id="navbar">
      <nav className="flex items-center justify-between my-3 px-20">
        <div>
          <Image
            src="/lolloinformatica.webp"
            className="rounded-full"
            width={60}
            height={60}
            alt="logo"
          />
        </div>
      <UserIcons />
      </nav>
    </header>
  );
}
