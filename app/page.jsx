import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="px-4 bg-no-repeat bg-cover bg-[url('/pattern-1.svg')] md:bg-[url('/pattern.svg')] w-full min-h-[32rem] h-full pt-8 lg:pt-12 flex flex-col lg:flex-row items-center justify-evenly py-20">
        <div className="w-full text-white md:text-blue-950 text-left lg:text-left lg:w-2/3 px-4">
          <h1 className="text-6xl font-bold">Clinique Dentaire CIL</h1>
          <h3 className="text-2xl font-light my-6">
            Votre sourire c'est notre gage
          </h3>
          <Link href={"tel:+212522946574"}>
            <button className="flex mx-auto bg-right-bottom lg:m-0 mb-8 items-center jus bg-blue-800 px-6 py-2 text-white rounded-3xl">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <span>Prendre Rendez-Vous</span>
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-2/3">
          <video
            type="video/mp4"
            className="object-contain w-auto h-[450px] mx-auto rounded-md  transition-all duration-300 cursor-pointer"
            autoPlay={true}
            playsInline={true}
            muted={true}
            loop={true}
          >
            <source src="/videos/hero.mp4" />
          </video>
        </div>
      </section>

      <section
        id="equipe"
        className="px-12 w-full pt-12 lg:pt-20 flex flex-col items-start justify-evenly py-20"
      >
        <h1 className="text-blue-950 text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold border-b-4 pb-2 border-b-cil-100 mb-12">
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
      <section
        id="equipe"
        className="px-12 border-t-0 w-full bg-gradient-to-r from-blue-800 to-blue-950 pt-12 lg:pt-20 flex flex-col items-start justify-evenly py-20"
      >
        <h1 className="text-white text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold border-b-4 pb-2 border-b-cil-100 mb-12">
          Nous retrouver
        </h1>
        <div className="flex items-center justify-center w-full h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.1893756426302!2d-7.658092685293807!3d33.57443198073858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3276dc0fb73%3A0x5055c8faa79cacae!2sClinique%20Dentaire%20CIL!5e0!3m2!1sen!2sma!4v1681158273738!5m2!1sen!2sma"
            width="85%"
            height="400px"
            className="border-0"
            allowFullscreen="false"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <img
        className="relative bottom-[2px]"
        src="/wave.svg"
        width={"100%"}
        height={"auto"}
        alt=""
      />
    </main>
  );
}
