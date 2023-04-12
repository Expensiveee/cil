import { Poppins } from "next/font/google";
import Navbar from "@components/Navbar";
import "@styles/globals.css";
import MiniNavbar from "@components/MiniNavbar";
import Footer from "@components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Clinique Dentaire CIL",
  description: "Votre sourire c'est notre gage",
  color: "#1e40af",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="max-w-[2400px] mx-auto">
        {/* Navbar */}
        {/* <MiniNavbar /> */}
        <Navbar />

        <main className="min-h-[calc(100vh-64px)]">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
