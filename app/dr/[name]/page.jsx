import { notFound } from "next/navigation";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/users`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData();

  const user = data[params?.name] ?? data.data[params?.name];

  if (!user) return notFound();

  return {
    title: `${user?.name} - Clinique Dentaire CIL`,
    description: `Dentiste à Casablanca, ${user?.name} ${user?.job_title}`,
  };
}

export default async function Profile({ params }) {
  const data = await getData();

  const user = data[params?.name] ?? data.data[params?.name];

  if (!user) return notFound();

  console.log(user);

  return (
    <div className="flex flex-col w-full h-auto">
      <section className="flex flex-col lg:flex-row w-full h-auto">
        <div className="flex flex-col items-left text-center lg:text-left justify-start w-full lg:w-2/5 h-auto gap-4 p-4 py-6 lg:p-16">
          <div className="flex flex-col w-full h-auto gap-2">
            <h1 className="text-blue-950 text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold">
              {user?.name}
            </h1>
            <h2 className="text-cil-100 text-xl lg:text-2xl mx-auto lg:mx-0 font-semibold">
              {user?.job_title}
            </h2>
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <Image
              alt={user?.name}
              src={user?.main_image}
              width={300}
              height={200}
              className="object-contain rounded-xl shadow-xl mx-auto lg:mx-0"
            />
          </div>
        </div>
        <div className="flex flex-col items-left text-left justify-start w-full lg:w-3/5 bg-blue-900 gap-4 p-4 py-6 lg:p-16">
          <h2 className="text-white w-fit border-b-4 border-b-cil-100 text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold mb-12">
            Expérience
          </h2>
          <ul className="flex flex-col gap-6">
            {user?.timeline.map((item, index) => {
              return (
                <li key={index}>
                  <div className="flex flex-row items-center justify-start w-full h-auto gap-2">
                    <div className="flex flex-col items-center shadow-2xl justify-center bg-blue-950 rounded-full">
                      <p className="flex items-center justify-center p-5 text-cil-100 w-6 h-6 text-base font-semibold">
                        {index + 1}
                      </p>
                    </div>
                    <div className="flex flex-col ml-2 items-start justify-start w-full h-auto">
                      <h3 className="text-cil-100 text-xl font-semibold">
                        {item?.key}
                      </h3>
                      <p className="text-white text-base font-medium whitespace-pre-line">
                        {item?.value}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
