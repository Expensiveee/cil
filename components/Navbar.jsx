"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Turn as Hamburger } from "hamburger-react";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="z-50 sticky top-0 w-full md:max-w-[2400px] h-12 md:h-16 md:flex md:items-center border-b-0 md:border-b-2 md:border-b-cil-100  md:justify-between bg-white/40 shadow-md backdrop-blur-xl">
      <div className="z-40 flex border-b-2 border-b-cil-100 md:border-none relative py-4 bg-transparent h-full items-center justify-between px-4">
        <Link href="/">
          <Image
            src={"/logo/logo.png"}
            width={130}
            height={130}
            alt={"Instagram Logo"}
            className={"object-contain"}
          />
        </Link>
        <span onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Hamburger size={20} toggled={isOpen} />
        </span>
      </div>
      <ul
        className={`z-30 gap-1 w-full h-auto lg:h-full flex text-gray-900 flex-col md:flex-row md:w-auto md:items-center absolute md:static px-8 py-8 transition-all duration-500 md:p-0 bg-white md:bg-transparent md:transition-none ${
          isOpen ? "top-12" : "top-[-200%] -translate-y-full md:translate-y-0"
        }`}
      >
        <li
          className={`flex items-center text-left h-full px-4 py-2 rounded-md lg:py-0 lg:rounded-none ${
            pathname === "/" ? "bg-blue-800 text-white" : ""
          }`}
        >
          <Link scroll={false} className="text-sm" href="/">
            Accueil
          </Link>
        </li>
        <li
          className={`flex items-center text-left h-full px-4 py-2 rounded-md lg:py-0 lg:rounded-none ${
            pathname === "/galerie" ? "bg-blue-800 text-white" : ""
          }`}
        >
          <Link scroll={false} className="text-sm" href="/galerie">
            Galerie
          </Link>
        </li>
        <li
          className={`flex items-center text-left h-full px-4 py-2 rounded-md lg:py-0 lg:rounded-none ${
            pathname.split("/")[1] === "dr" ? "bg-blue-800 text-white" : ""
          }`}
        >
          <Link scroll={false} className="text-sm" href="/dr">
            Notre Équipe
          </Link>
        </li>
      </ul>
    </nav>
  );
};
