import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section
        id="#"
        className="px-8 w-full bg-[url('/images/pattern.svg')] bg-cil-200 from-cil-300 to-cil-100 min-h-[32rem] h-full pt-12 lg:pt-20 flex flex-col lg:flex-row items-start justify-evenly py-12"
      >
        <div className="w-full text-white text-left lg:text-left lg:w-2/3 px-4">
          <h1 className="text-6xl font-bold">Clinique Dentaire CIL</h1>
          <h3 className="text-3xl font-light my-6">
            Votre sourire c'est notre gage
          </h3>
          <Link href={"tel:+212522946574"}>
            <button className="flex mx-auto lg:m-0 mb-8 items-center jus bg-white px-6 py-2 text-cil-100 rounded-3xl">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <span>Prendre Rendez-Vous</span>
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-2/3">
          <video
            type="video/mp4"
            className="object-contain w-auto h-[450px] mx-auto rounded-md shadow-2xl transition-all duration-300 cursor-pointer"
            autoPlay={true}
            playsinline={true}
            muted={true}
            loop={true}
          >
            <source src="/videos/hero.mp4" />
          </video>
        </div>
      </section>
      <section
        id="equipe"
        className="px-12 w-full pt-12 lg:pt-20 flex flex-col items-start justify-evenly py-4"
      >
        <h1 className="text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold border-b-4 pb-2 border-b-cil-100 mb-12">
          Notre Équipe
        </h1>

        <div className="w-full gap-6 flex flex-col lg:flex-row items-center justify-center py-4">
          <div className="w-full lg:w-2/4 lg:h-auto relative text-white shadow flex flex-col items-center justify-end">
            <img
              src={"/images/equipe/1.jpg"}
              className="z-10 h-auto w-full rounded-xl shadow-xl"
            />
            <div className="absolute bottom-0 left-0 z-20 ">
              <h3 className="text-xl pl-5 text-white font-bold text-left w-full">
                Dr Jalil Chraibi
              </h3>
              <p className="text-white pl-5 pb-2 text-lg z-20 font-light text-left w-full">
                Orthodonsite
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/4 h-auto relative text-white shadow flex flex-col items-center justify-end">
            <img
              src={"/images/equipe/2.jpg"}
              className="z-10 h-auto w-full rounded-xl shadow-xl"
            />
            <div className="absolute bottom-0 left-0 z-20 ">
              <h3 className="text-xl pl-5 text-white font-bold text-left w-full">
                Dr Alaoui Bouhamid Ahmed
              </h3>
              <p className="text-white pl-5 pb-2 text-lg z-20 font-light text-left w-full">
                Implantologiste
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/4 h-auto relative text-white shadow flex flex-col items-center justify-end">
            <img
              src={"/images/equipe/3.jpg"}
              className="z-10 h-auto w-full rounded-xl shadow-xl"
            />
            <div className="absolute bottom-0 left-0 z-20 ">
              <h3 className="text-xl pl-5 text-white font-bold text-left w-full">
                Dr Khairouni Hind
              </h3>
              <p className="text-white pl-5 pb-2 text-lg z-20 font-light text-left w-full">
                Pédodontiste
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
