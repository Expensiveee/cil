"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Turn as Hamburger } from "hamburger-react";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="z-50 sticky top-0 w-full md:max-w-[1600px] h-12 md:h-16 md:flex md:items-center border-b-0 md:border-b-2 md:border-b-blue-800  md:justify-between bg-white/40 shadow-md backdrop-blur-xl md:px-4">
      <div className="z-40 flex border-b-2 border-b-blue-800 md:border-none relative py-4 bg-transparent h-full items-center justify-between px-4 md:px-0">
        <Link href="/">
          <Image
            src={"/logo.png"}
            width={130}
            height={130}
            className={"object-contain"}
          />
        </Link>
        <span onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Hamburger size={20} toggled={isOpen} />
        </span>
      </div>
      <ul
        className={`z-30 gap-4 w-full flex text-gray-900 flex-col md:flex-row md:w-auto md:items-center h-auto absolute md:static px-8 py-8 transition-all duration-500 md:p-0 bg-white md:bg-transparent md:transition-none ${
          isOpen ? "top-12" : "top-[-200%] -translate-y-full md:translate-y-0"
        }`}
      >
        <li
          className={`text-left px-3 py-1 rounded-xl ${
            pathname === "/" ? "bg-blue-700 text-white" : ""
          }`}
        >
          <Link scroll={false} className="text-sm" href="/">
            Accueil
          </Link>
        </li>
        <li
          className={`text-left px-3 py-1 rounded-xl ${
            pathname === "/gallerie" ? "bg-blue-700 text-white" : ""
          }`}
        >
          <Link scroll={false} className="text-sm" href="/gallerie">
            Gallerie
          </Link>
        </li>
        <li
          className={`text-left px-3 py-1 rounded-xl ${
            pathname === "/a-propos" ? "bg-blue-700 text-white" : ""
          }`}
        >
          <Link scroll={false} className="text-sm" href="#a-propos">
            Notre Équipe
          </Link>
        </li>
      </ul>
    </nav>
  );
};
