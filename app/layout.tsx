import type { Metadata } from "next";
import { Kumbh_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh-sans",
  weight: ["300", "400", "600", "700"], // optional
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "FutureTech - Your Gateway to Tomorrow's Technology",
  description: "Discover the latest in future technology with FutureTech. From AI and robotics to space exploration and biotech, we bring you in-depth articles, expert insights, and cutting-edge research to keep you informed about the innovations shaping our world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} ${inter.variable}`}>
        <Navbar/>
        <main>
          {children}
        </main>
      <Footer/>
      </body>
    </html>
  );
}
