async function getData() {
  const res = await fetch("https://cil.expensiveee.me/api/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Profile({ params }) {
  const data = await getData();

  console.log(data);

  return <div>{data}</div>;
}
