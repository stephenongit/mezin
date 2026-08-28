import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MFP Food Product — Healthy and Tasty",
    template: "%s | MFP Food Product",
  },
  description:
    "Discover quality Tamil food products from MFP Food Product. Healthy and Tasty.",
  keywords: [
    "MFP Food Product",
    "premium spices",
    "Indian spices",
    "pickles",
    "food products",
    "organic food",
    "masala",
    "natural food",
    "FSSAI certified",
  ],
  authors: [{ name: "MFP Food Product" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MFP Food Product",
    title: "MFP Food Product — Healthy and Tasty",
    description:
      "Authentic, hygienically packed food essentials from premium spices to traditional pickles. Trusted by families across India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#2E7D32" />
      </head>
      <body className="font-body antialiased">
        <ScrollProgress />
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
