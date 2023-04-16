"use client";

export default async function Profile({ params }) {
  const data = await fetch("https://cil.expensiveee.me/api/users");

  const users = data.then((res) => res.json()).then((res) => res.data);
  console.log(users);

  const user = users[params?.name];
  console.log(user);

  if (!user) return <div>Not found</div>;

  return <div>{user.job_title}</div>;
}
