import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import Navbar from "@/common/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pedro's Pokedex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
