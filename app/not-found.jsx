export const metadata = {
  title: "Page pas trouvé - Clinique Dentaire CIL",
  description: "Page pas trouvé",
};

export default function notFound() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen h-full bg-gradient-to-r from-blue-800 to-blue-950 text-white">
      <h1 className="text-5xl lg:text-7xl font-bold">Page pas trouvé :(</h1>
    </div>
  );
}
