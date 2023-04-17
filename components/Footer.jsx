"use client";
import Image from "next/image";
import Link from "next/link";

export default () => {
  return (
    <footer className="flex gap-32 px-4 lg:px-20 bg-blue-950 flex-col items-center justify-evenly w-full h-auto py-16">
      <div className="flex w-full gap-20 items-center justify-center lg:justify-evenly flex-col lg:flex-row">
        <div className="flex flex-col w-full text-center lg:text-left lg:w-1/4 h-auto">
          <h5 className="text-xl font-bold text-slate-200 mb-4">L'Équipe</h5>
          <ul className="text-md text-slate-100">
            <li>Dr Alaoui Bouhamid Ahmed - Implantologiste</li>
            <li>Dr Khairouni Hind - Pédodontiste</li>
            <li>Dr Jalil Chraibi - Orthodonsite</li>
          </ul>
        </div>
        <div className="flex flex-col w-full lg:w-2/4 h-auto">
          <p className="text-3xl font-bold text-center text-white">
            Votre sourire c'est notre gage.
          </p>
          <div className="flex justify-center items-center w-full h-auto my-12">
            <Image
              src={"/logo/logo-white.png"}
              width={170}
              height={170}
              className={"object-contain"}
              alt={"Clinique Dentaire Logo White"}
            />
          </div>
          <div className="flex w-full text-center items-center gap-4 flex-col lg:flex-row justify-evenly text-slate-300 text-sm">
            <a target={"_blank"} href={"https://www.instagram.com/dr.alaouii/"}>
              <p className="flex items-center text-sm font-semibold">
                <Image
                  src="/logo/instagram.svg"
                  width={20}
                  height={20}
                  className="object-contain mr-2"
                  alt={"Instagram Logo"}
                />
                @dr.alaouii
              </p>
            </a>
            <a target={"_blank"} href={"https://www.instagram.com/dr.chraibi/"}>
              <p className="flex items-center text-sm font-semibold">
                <Image
                  src="/logo/instagram.svg"
                  width={20}
                  height={20}
                  alt={"Instagram Logo"}
                  className="object-contain mr-2"
                />
                @dr.chraibi
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col text-center lg:text-left w-full lg:w-1/4 h-auto">
          <h5 className="text-xl font-bold text-slate-200 mb-4">Horaire</h5>
          <ul className="text-sm text-slate-100">
            <li>
              <b>Lundi</b>: 8:30 - 19:30
            </li>
            <li>
              <b>Mardi</b>: 8:30 - 19:30
            </li>
            <li>
              <b>Mercredi</b>: 8:30 - 19:30
            </li>
            <li>
              <b>Jeudi</b>: 8:30 - 19:30
            </li>
            <li>
              <b>Vendredi</b>: 8:30 - 19:30
            </li>
            <li>
              <b>Samedi</b>: 9:00 - 13:00
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-full text-center flex-col lg:flex-row justify-evenly text-white text-xs">
        <p>© {new Date().getFullYear()} - Clinique Dentaire CIL</p>
        <p>
          Siteweb fait par <u>ghalii176@gmail.com</u>
        </p>
      </div>
    </footer>
  );
};
