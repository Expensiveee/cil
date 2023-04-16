import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/users`);

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

  return (
    <div className="flex flex-col w-full h-auto">
      <section className="flex w-full min-h-screen">
        <div className="flex flex-row items-center justify-center w-full h-full">
          <h1 className="text-blue-950 text-4xl lg:text-5xl mx-auto lg:mx-0 font-semibold border-b-4 pb-2 border-b-cil-100 mb-12">
            {user?.name}
          </h1>
          <img src={user.main_image} alt="" />
        </div>
      </section>
    </div>
  );
}
