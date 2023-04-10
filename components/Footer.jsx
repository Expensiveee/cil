"use client";
import Image from "next/image";

export default () => {
  return (
    <footer className="flex gap-32 mt-20 px-4 lg:px-20 bg-blue-950 flex-col items-center justify-evenly w-full h-auto py-16">
      <div className="flex w-full gap-20 items-center justify-center md:justify-evenly flex-col lg:flex-row">
        <div className="flex flex-col w-full text-center md:text-left md:w-1/4 h-auto">
          <h3 className="text-xl font-bold text-slate-200 mb-4">L'Équipe</h3>
          <ul className="text-md text-slate-100">
            <li>Dr Alaoui Bouhamid Ahmed - Implantologiste</li>
            <li>Dr Khairouni Hind - Pédodontiste</li>
            <li>Dr Jalil Chraibi - Orthodonsite</li>
          </ul>
        </div>
        <div className="flex flex-col w-full md:w-2/4 h-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            Votre sourire c'est notre gage.
          </h3>
          <div className="flex justify-center items-center w-full h-auto">
            <Image
              src={"/logo-white.png"}
              width={170}
              height={170}
              className={"object-contain"}
            />
          </div>
        </div>
        <div className="flex flex-col text-center md:text-left w-full md:w-1/4 h-auto">
          <h3 className="text-xl font-bold text-slate-200 mb-4">Horaire</h3>
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
      <div className="flex w-full text-center flex-col md:flex-row justify-evenly text-white text-xs">
        <p>© {new Date().getFullYear()} - Clinique Dentaire CIL</p>
        <p>
          Siteweb fait par <u>ghalii176@gmail.com</u>
        </p>
      </div>
    </footer>
  );
};
