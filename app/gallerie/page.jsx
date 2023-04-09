import Image from "next/image";

export default function About() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={1200}
          height={900}
          className="object-contain"
        />
      </div>
    </main>
  );
}
