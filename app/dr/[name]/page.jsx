async function getData() {
  const res = await fetch(`${process.env.API_URL}/users`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData();

  const user = data[params?.name] ?? data.data[params?.name];

  return {
    title: `${user?.name} - Clinique Dentaire CIL`,
    description: `Dentiste à Casablanca, ${user?.name} ${user?.job_title}`,
  };
}

export default async function Profile({ params }) {
  const data = await getData();

  const user = data[params?.name] ?? data.data[params?.name];

  return (
    <pre className="bg-gray-700 text-white">
      {JSON.stringify(user, null, 2)}
    </pre>
  );
}
