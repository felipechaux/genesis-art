import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galería expresiva - Pinturas Originales en Venta",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Galería expresiva - Pinturas Originales en Venta</title>
      </head>
      <body className="bg-white text-gray-800 font-sans">
        {children}
      </body>
    </html>
  );
}
