"use client";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="px-4 bg-no-repeat bg-cover bg-[url('/bg/pattern-1.svg')] md:bg-[url('/bg/pattern.svg')] w-full min-h-[32rem] h-full pt-8 lg:pt-12 flex flex-col lg:flex-row items-center justify-evenly py-20">
        <div className="w-full text-white md:text-blue-950 text-left lg:text-left lg:w-2/3 px-4">
          <h1 className="text-6xl font-bold">Clinique Dentaire CIL</h1>
          <p className="text-2xl font-semibold my-6">
            Votre sourire c'est notre gage
          </p>
          <Link href={"tel:+212522946574"}>
            <button className="flex mx-auto bg-right-bottom lg:m-0 mb-8 items-center jus bg-blue-800 px-6 py-2 text-white rounded-md">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <p>Prendre Rendez-Vous</p>
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-2/3">
          <video
            type="video/mp4"
            className="object-contain shadow-2xl w-auto h-[550px] mx-auto rounded-md  transition-all duration-300 cursor-pointer"
            autoPlay={true}
            playsInline={true}
            muted={true}
            loop={true}
          >
            <source src="/hero.mp4" />
          </video>
        </div>
      </section>
      <section className="flex w-full h-auto items-center justify-center my-20 py-12 bg-gradient-to-r from-blue-800 to-blue-950 items">
        <p className="text-lg text-white font-light w-full px-4 h-auto lg:w-4/5">
          La Clinique Dentaire CIL est une institution qui rassemble différentes
          spécialités de la médecine dentaire, permettant ainsi de répondre à
          vos besoins. Que vous soyez enfant ou adulte, vous n'aurez pas à vous
          déplacer d'un cabinet dentaire à un autre. Située dans un quartier
          résidentiel de la ville de Casablanca, la clinique est facile d'accès
          et proche de tous les points à besoins fonctionnels de la ville.
        </p>
      </section>

      <section className="px-6 lg:px-12 w-full pt-12 lg:pt-20 flex flex-col items-start justify-evenly py-20">
        <h2 className="text-blue-950 text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold border-b-4 pb-2 border-b-cil-100 mb-12">
          L'Équipe
        </h2>

        <div className="w-full gap-6 flex flex-col lg:flex-row items-center justify-center py-4">
          <div className="w-full lg:w-2/4 lg:h-auto relative text-white shadow flex flex-col items-center justify-end">
            <Link
              className="z-10 h-auto w-full rounded-xl shadow-xl"
              href={"/dr/chraibi-jalil"}
            >
              <Image
                alt="Dr Jalil Chraibi"
                src={"/equipe/chraibi-jalil.jpg"}
                width={400}
                height={500}
                className="z-10 h-auto w-full rounded-xl shadow-xl"
              />
            </Link>
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
            <Link
              className="z-10 h-auto w-full rounded-xl shadow-xl"
              href={"/dr/alaoui-bouhamid-ahmed"}
            >
              <Image
                alt="Dr Alaoui Bouhamid Ahmed"
                className="z-10 h-auto w-full rounded-xl shadow-xl"
                width={400}
                height={500}
                src={"/equipe/alaoui-bouhamid-ahmed.jpg"}
              />
            </Link>
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
            <Link
              className="z-10 h-auto w-full rounded-xl shadow-xl"
              href={"/dr/khairouni-hind"}
            >
              <Image
                alt="Dr Khairouni Hind"
                src={"/equipe/khairouni-hind.jpg"}
                width={400}
                height={500}
                className="z-10 h-auto w-full rounded-xl shadow-xl"
              />
            </Link>

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

      <section className="px-6 lg:px-12 border-t-0 w-full bg-gradient-to-r from-blue-800 to-blue-950 lg:pt-20 flex flex-col items-start justify-evenly py-12 ">
        <h2 className="text-white text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold border-b-4 pb-2 border-b-cil-100 mb-12">
          Les Services
        </h2>
        <div className="flex items-center flex-wrap lg:flex-row gap-12 justify-center w-full h-auto">
          <div className="flex flex-col items-center gap-5 w-1/3 lg:w-auto h-auto px-4 py-2">
            <div className="flex items-center justify-center w-20 h-20 rounded-full p-3 bg-white">
              <Image
                alt="Tooth"
                src={"/icons/teeth-whitening.svg"}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h4 className="text-lg font-medium text-white">Blanchiment</h4>
          </div>
          <div className="flex flex-col items-center gap-5  w-1/3 lg:w-auto h-auto px-4 py-2">
            <div className="flex items-center justify-center w-20 h-20 rounded-full p-3 bg-white">
              <Image
                alt="Dental Implant"
                src={"/icons/dental-implant.svg"}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h4 className="text-lg font-medium text-white">Implant</h4>
          </div>
          <div className="flex flex-col items-center gap-5 w-1/3 lg:w-auto h-auto px-4 py-2">
            <div className="flex items-center justify-center w-20 h-20 rounded-full p-3 bg-white">
              <Image
                alt="Invisalign"
                src={"/icons/invisalign.svg"}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h4 className="text-lg font-medium text-white">Invisalign</h4>
          </div>
          <div className="flex flex-col items-center gap-5  w-1/3 lg:w-auto h-auto px-4 py-2">
            <div className="flex items-center justify-center w-20 h-20 rounded-full p-3 bg-white">
              <Image
                alt="Dental Care"
                src={"/icons/dental-care.svg"}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h4 className="text-lg font-medium text-white">Chirurgie</h4>
          </div>
          <div className="flex flex-col items-center gap-5  w-1/3 lg:w-auto h-auto px-4 py-2">
            <div className="flex items-center justify-center w-20 h-20 rounded-full p-3 bg-white">
              <Image
                alt="Kid"
                src={"/icons/kid.svg"}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h4 className="text-lg font-medium text-white">Pédodontie</h4>
          </div>
          <div className="flex flex-col items-center gap-5  w-1/3 lg:w-auto h-auto px-4 py-2">
            <div className="flex items-center justify-center w-20 h-20 rounded-full p-3 bg-white">
              <Image
                alt="Prothese"
                src={"/icons/prothese.svg"}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h4 className="text-lg font-medium text-white">Prothèse</h4>
          </div>
        </div>
      </section>

      <Image
        className="relative w-full h-auto bottom-[2px]"
        src="/bg/wave.svg"
        width={1920}
        height={400}
        alt="Wave"
      />

      <section className="px-6 lg:px-12 border-t-0 w-full pt-12 lg:pt-20 flex flex-col items-start justify-evenly py-20">
        <h2 className="text-blue-950 text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold border-b-4 pb-2 border-b-cil-100 mb-12">
          La Direction
        </h2>
        <div className="flex items-center justify-center w-full h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.1893756426302!2d-7.658092685293807!3d33.57443198073858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3276dc0fb73%3A0x5055c8faa79cacae!2sClinique%20Dentaire%20CIL!5e0!3m2!1sen!2sma!4v1681158273738!5m2!1sen!2sma"
            width="85%"
            height="400px"
            className="border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
