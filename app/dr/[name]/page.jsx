"use client";

export default async function Profile({ params }) {
  const users = await fetch("http://localhost:3000/api/users")
    .then((res) => res.json())
    .then((res) => res.data);

  const user = users[params.name];

  if (!user) return <div>Not found</div>;

  return <div>{user.job_title}</div>;
}
