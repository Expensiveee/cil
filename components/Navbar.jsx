"use client";
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Turn as Hamburger } from "hamburger-react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrOpen, setIsDrOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="z-50 sticky top-0 w-full lg:max-w-[2400px] h-12 lg:h-16 lg:flex lg:items-center border-b-0 lg:border-b-2 lg:border-b-cil-100  lg:justify-between bg-white/40 shadow-md backdrop-blur-xl">
      <div className="z-40 flex border-b-2 border-b-cil-100 lg:border-none relative py-4 bg-transparent h-full items-center justify-between px-4">
        <Link href="/">
          <Image
            src={"/logo/logo.png"}
            width={130}
            height={130}
            alt={"Clinic Dentaire CIL Logo"}
            className={"object-contain"}
            priority={true}
          />
        </Link>
        <span onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <Hamburger size={20} toggled={isOpen} />
        </span>
      </div>
      <ul
        className={`z-30 gap-1 w-full h-auto min-h-screen lg:min-h-0 lg:h-full flex text-gray-900 flex-col lg:flex-row lg:w-auto lg:items-center absolute lg:static px-8 py-8 transition-all duration-500 lg:p-0 bg-white lg:bg-transparent lg:transition-none ${
          isOpen ? "top-12" : "top-[-200%] -translate-y-full lg:translate-y-0"
        }`}
      >
        <li
          className={`flex items-center text-left px-4 py-4 rounded-md lg:py-0 lg:rounded-none ${
            pathname === "/" ? "bg-blue-800 text-white" : ""
          }`}
        >
          <Link
            scroll={false}
            className="text-sm h-full flex items-center"
            href="/"
          >
            Accueil
          </Link>
        </li>
        <li
          className={`flex flex-col text-left cursor-pointer items-center px-4 py-4 rounded-md lg:py-0 lg:rounded-none ${
            pathname.split("/")[1] === "dr" ? "bg-blue-800 text-white" : ""
          }`}
        >
          <p
            onClick={() => setIsDrOpen(!isDrOpen)}
            className="text-sm h-full text-left w-full flex items-center justify-between lg:justify-start gap-3"
          >
            Notre Équipe
            <ChevronDownIcon
              className={`w-4 h-4 transition-all duration-200 ease-in-out ${
                isDrOpen ? "rotate-180" : "rotate-0"
              } `}
            />
          </p>
          <ul
            className={`mt-2 lg:right-5 w-full h-auto bg-neutral-100 border border-black/10 px-2 py-2 rounded-lg shadow-md transition-all duration-500 ${
              isDrOpen
                ? "opacity-100 top-full relative lg:absolute"
                : "opacity-0 pointer-events-none top-0 absolute"
            }`}
          >
            <li className="flex items-center text-left h-full hover:bg-black/10 px-4 py-1.5 transition-colors text-gray-800 duration-400 ease-in-out rounded-lg">
              <Link
                onClick={() => {
                  setIsDrOpen(false);
                  setIsOpen(false);
                }}
                scroll={false}
                className="text-sm h-full flex items-center"
                href="/dr/alaoui-bouhamid-ahmed"
              >
                Dr Alaoui Bouhamid Ahmed
              </Link>
            </li>
            <li className="flex items-center text-left h-full hover:bg-black/10 px-4 py-1.5 transition-colors text-gray-800 duration-400 ease-in-out rounded-lg">
              <Link
                onClick={() => setIsDrOpen(false)}
                scroll={false}
                className="text-sm h-full flex items-center"
                href="/dr/chraibi-jalil"
              >
                Dr Jalil Chraibi
              </Link>
            </li>
            <li className="flex items-center text-left h-full hover:bg-black/10 px-4 py-1.5 transition-colors text-gray-800 duration-400 ease-in-out rounded-lg">
              <Link
                onClick={() => setIsDrOpen(false)}
                scroll={false}
                className="text-sm h-full flex items-center"
                href="/dr/khairouni-hind"
              >
                Dr Khairouni Hind
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
