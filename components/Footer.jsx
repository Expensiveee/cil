"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default () => {
  return (
    <footer className="flex gap-32 px-4 lg:px-20 bg-blue-950 flex-col items-center justify-evenly w-full h-auto py-16">
      <div className="flex w-full gap-20 items-center justify-center lg:justify-evenly flex-col lg:flex-row">
        <div className="flex flex-col w-full text-center lg:text-left lg:w-1/4 h-auto">
          <h5 className="text-2xl font-bold text-white mb-4">Équipe</h5>
          <ul className="text-md text-slate-200 space-y-2">
            <li>Dr Alaoui Bouhamid Ahmed - Implantologiste</li>
            <li>Dr Khairouni Hind - Pédodontiste</li>
            <li>Dr Jalil Chraibi - Orthodonsite</li>
          </ul>
        </div>
        <div className="flex flex-col w-full lg:w-2/4 h-auto">
          <p className="text-3xl font-bold text-center text-white">
            Votre sourire c'est notre gage.
          </p>
          <div className="flex items-col gap-8 justify-center items-center w-full h-auto my-12">
            <Image
              src={"/logo/logo-white.png"}
              width={170}
              height={170}
              className={"object-contain"}
              alt={"Clinique Dentaire Logo White"}
            />
            <Link href={"tel:+212522946574"}>
            <button className="flex mx-auto bg-right-bottom hover:bg-blue-800/60 transition-colors duration-150 ease-in-out lg:m-0 mb-8 items-center jus bg-blue-800 px-6 py-2 text-white rounded-md">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <p>Prendre Rendez-Vous</p>
            </button>
          </Link>
          </div>
          <div className="flex w-full text-center items-center gap-4 flex-col lg:flex-row justify-evenly text-slate-300 text-sm">
            <a target={"_blank"} href={"https://www.instagram.com/dr.alaouii/"}>
              <p className="flex items-center text-sm font-semibold">
                <Image
                  src="/logo/instagram.svg"
                  width={20}
                  height={20}
                  className="object-contain"
                  alt={"Instagram Logo"}
                />
                <span className="ml-2">@dr.alaouii</span>
              </p>
            </a>
            <a target={"_blank"} href={"https://www.instagram.com/dr.chraibi/"}>
              <p className="flex items-center text-sm font-semibold">
                <Image
                  src="/logo/instagram.svg"
                  width={20}
                  height={20}
                  alt={"Instagram Logo"}
                  className="object-contain"
                />
                <span className="ml-2">@dr.chraibi</span>
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col text-center lg:text-left w-full lg:w-1/4 h-auto">
          <h5 className="text-2xl font-bold text-white mb-4">Horaire</h5>
          <ul className="text-sm text-slate-200 space-y-2">
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

      <div className="flex w-full text-center flex-col gap-10 lg:flex-row justify-evenly items-center text-white text-xs">
        <p>© {new Date().getFullYear()} - Clinique Dentaire CIL</p>
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/CliniqueDentaireCIL/"
          >
            <svg
              style={{ color: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                fill="white"
              ></path>{" "}
            </svg>
          </a>
        </div>
        <p className="text-center flex flex-col gap-2">
          <span className="font-bold">Siteweb fait par:</span>
          <span className="flex flex-col lg:flex-row gap-1 text-center">
            <u>
              <Link href={"tel:+212653693657"}>+212653693657</Link>
            </u>
            <u>
              <Link href={"mailto:ghalii176@gmail.com, ghalii12222@gmail.com"}>
                ghalii176@gmail.com
              </Link>
            </u>
          </span>
        </p>
      </div>
    </footer>
  );
};
