import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body
        className={`${inter.variable} ${horizon.variable} antialiased`}
      >
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
