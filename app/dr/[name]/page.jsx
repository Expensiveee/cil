const fetchData = async () => {
  const users = await fetch("https://cil.expensiveee.me/api/users")
    .then((res) => res.json())
    .then((res) => res.data);

  return users;
};

export default async function Profile({ params }) {
  const user = await fetchData();

  if (!user) return <div>Not found</div>;

  return <div>{user.job_title}</div>;
}
