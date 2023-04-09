import { Poppins } from "next/font/google";
import Navbar from "@components/Navbar";
import "@styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Clinique Dentaire CIL",
  description: "Votre sourire c'est notre gage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="max-w-[1600px] mx-auto">
        {/* Navbar */}
        <Navbar />

        {children}
      </body>
    </html>
  );
}
