import { Poppins } from "next/font/google";
import Navbar from "@components/Navbar";
import "@styles/globals.css";
import Script from "next/script";
import Footer from "@components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Clinique Dentaire CIL",
  description:
    "Votre sourire c'est notre gage | Clinique Dentaire CIL, Dentiste, Invisalign, Implantologie, Pédodontie, Lumineers, Casablanca CIL Maroc",
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=RFRCCV74E8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'RFRCCV74E8');
        `}
        </Script>
      </body>
    </html>
  );
}
