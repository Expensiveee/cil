import { Poppins } from "next/font/google";
import Navbar from "@components/Navbar";
import "@styles/globals.css";
import Script from "next/script";
import Footer from "@components/Footer";
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Clinique Dentaire CIL",
  icons: {
    icon: { url: "/favicon.ico", type: "image/x-icon" },
    shortcut: { url: "/favicon.ico", type: "image/x-icon" },
  },
  keywords: [
    "Dentiste",
    "Invisalign",
    "Implantologie",
    "Pédodontie",
    "Lumineers",
    "Clinique",
    "CIL",
    "Dentaire",
    "Casablanca CIL Maroc",
    "Maroc",
    "Dentiste Casablanca",
    "Dentiste Casablanca CIL",
    "Dentiste Casablanca Maroc",
    "Dentiste Casablanca CIL Maroc",
    "Casablanca",
  ],
  authors: [{ name: "Expensiveee", email: "ghalii176@gmail.com" }],
  description:
    "Votre sourire c'est notre gage | Clinique Dentaire CIL, Dentiste, Invisalign, Implantologie, Pédodontie, Lumineers, Casablanca CIL Maroc",
  alternates: {
    canonical: "https://clinicdentairecil.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="max-w-[2400px] mx-auto">
        {/* Navbar */}
        {/* <MiniNavbar /> */}
        <Navbar />

        <main className="min-h-[calc(100vh-64px)]">
		{children}
		<Analytics />
	</main>

        {/* Footer */}
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RFRCCV74E8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RFRCCV74E8');
        `}
        </Script>
      </body>
    </html>
  );
}
