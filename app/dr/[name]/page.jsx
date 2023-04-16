async function getData() {
  const res = await fetch(`https://cil.expensiveee.me/api/users`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData();

  const user = data[params?.name];

  console.log(user);

  return {
    title: `${user?.name} - Clinique Dentaire CIL`,
    description: `Dentiste à Casablanca, ${user?.name} ${user?.job_title}`,
  };
}

export default async function Profile({ params }) {
  const data = await getData();

  const user = data[params?.name];

  return <div>{JSON.stringify(user)}</div>;
}
