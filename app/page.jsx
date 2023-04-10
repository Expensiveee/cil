import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="px-4 w-full min-h-[32rem] h-full pt-8 lg:pt-12 flex flex-col lg:flex-row items-center justify-evenly py-6">
        <div className="w-full text-black text-left lg:text-left lg:w-2/3 px-4">
          <h1 className="text-6xl font-bold">Clinique Dentaire CIL</h1>
          <h3 className="text-3xl font-light my-6">
            Votre sourire c'est notre gage
          </h3>
          <Link href={"tel:+212522946574"}>
            <button className="flex mx-auto lg:m-0 mb-8 items-center jus bg-cil-200 px-6 py-2 text-white rounded-3xl">
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
            playsInline={true}
            muted={true}
            loop={true}
          >
            <source src="/videos/hero.mp4" />
          </video>
        </div>
      </section>
      <img
        className="shadow-2xl"
        src="/images/wave.svg"
        width={"100%"}
        height={"auto"}
        alt=""
      />
      <section
        id="equipe"
        className="px-12 bg-gradient-to-t from-cil-100 to-cil-300 w-full pt-12 lg:pt-20 flex flex-col items-start justify-evenly py-4"
      >
        <h1 className="text-white text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold border-b-4 pb-2 border-b-white mb-12">
          L'Équipe
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
