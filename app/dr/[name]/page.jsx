import { notFound } from "next/navigation";
import Image from "next/legacy/image";

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

  const user = data[params?.name];

  if (!user) return notFound();

  return {
    title: `${user?.name} - Clinique Dentaire CIL`,
    description: `Dentiste à Casablanca, ${user?.name} ${user?.job_title}`,
    alternates: {
      canonical: `https://new.clinicdentairecil.com/dr/${params?.name}`,
    },
  };
}

export default async function Profile({ params }) {
  const data = await getData();

  const user = data[params?.name];

  if (!user) return notFound();

  return (
    <div className="flex flex-col w-full h-auto">
      <section className="flex flex-col lg:flex-row w-full h-fit">
        <div className="flex flex-col items-center text-center lg:text-left justify-start w-full lg:w-2/5 h-auto gap-4 py-8 lg:p-4">
          <div className="flex w-full px-6 lg:px-2 flex-col">
            <h1 className="text-blue-950 h-auto text-5xl mx-auto lg:mx-0 font-semibold">
              {user?.name}
            </h1>
            <h2 className="text-cil-100 text-xl lg:text-2xl mt-2 mx-auto lg:mx-0 font-semibold">
              {user?.job_title}
            </h2>
          </div>
          <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-start gap-4">
            <img
              alt={user?.name ?? "Profile Picture"}
              src={user?.main_image}
              width={"80%"}
              height={"auto"}
              className="aspect-auto rounded-md shadow-xl mx-auto"
            />
          </div>
          {/*           <div className="flex flex-col w-full h-max justify-center mt-4">
            <h2 className="text-blue-900 w-fit border-b-4 border-b-cil-100 text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold mb-12">
              Spécialités
            </h2>
            <ul className="space-y-5 ml-0 lg:ml-4">
              {user?.specialities.map((item, index) => {
                return (
                  <p className="text-blue-900 text-xl font-medium whitespace-pre-line">
                    {item}
                  </p>
                );
              })}
            </ul>
          </div> */}
        </div>
        <div className="flex flex-col items-left text-left justify-start w-full lg:w-3/5 bg-blue-900 gap-4 p-4 py-6 lg:p-16">
          <h2 className="text-white w-fit border-b-4 border-b-cil-100 text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold mb-6">
            Expérience
          </h2>
          <ul className="flex flex-col gap-6">
            {user?.timeline.map((item, index) => {
              return (
                <li key={index}>
                  <div className="flex flex-row items-center justify-start w-full h-auto gap-2 relative">
                    {index !== user?.timeline.length - 1 && (
                      <div className="w-0.5 h-full left-[20px] top-2 translate-y-1/2 absolute bg-cil-100" />
                    )}
                    <div className="flex flex-col items-center relative shadow-2xl justify-center bg-blue-950 rounded-full">
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
      <section className="flex flex-col lg:flex-row w-full h-fit">
        <div className="flex flex-col items-center text-center lg:text-left bg-cil-100 justify-start w-full h-auto gap-4 py-16">
          <h2 className="text-white w-fit border-b-4 text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold mb-12">
            Cas D'Études
          </h2>
          <div className="flex flex-wrap gap-4 items-start justify-center">
            {user?.case_studies.map((item, index) => {
              return <img key={index} src={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
