import Image from "next/image";
import { Button } from "./ui/button";
import { HTMLAttributes } from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 flex w-screen py-4 px-6 items-center justify-center md:justify-between z-50 bg-black/70 text-white/80">
      <div className="relative h-16 md:h-20 aspect-[53/13] ">
        <Image src="/M6.png" alt="header" fill />
      </div>

      <section className=" gap-2 hidden md:flex">
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Equipe</NavbarItem>
        <NavbarItem>Contato</NavbarItem>
      </section>
    </nav>
  );
}

function NavbarItem(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      variant={"ghost"}
      size="lg"
      className="text-white/80 text text-xl"
      {...props}
    />
  );
}
