import type { Metadata } from "next";
import { Cascadia_Code, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const cascadiaCode = Cascadia_Code({
  variable: "--font-cascadia",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const horizon = localFont({
  src: "../fonts/horizon_1.otf",
  variable: "--font-horizon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaelan Nguyen | UI/UX Portfolio",
  description: "UI/UX and Graphic Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cascadiaCode.variable} ${inter.variable} ${horizon.variable} antialiased bg-black min-h-screen`}>
        <div className="relative">
          <div className="relative z-10">
            <Navbar />
            <main className="container mx-auto px-4 py-8 max-w-7xl">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
