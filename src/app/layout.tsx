import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galería expresiva - Pinturas Originales en Venta",
  description:
    "Descubre y compra pinturas originales de Genesis Lopez. Galería expresiva ofrece arte único y vibrante para decorar tu hogar u oficina. ¡Apoya el arte original!",
  metadataBase: new URL("https://www.galeriaexpresiva.com/"),
  openGraph: {
    title: "Galería expresiva - Pinturas Originales en Venta",
    description:
      "Descubre y compra pinturas originales de Genesis Lopez. Galería expresiva ofrece arte único y vibrante para decorar tu hogar u oficina. ¡Apoya el arte original!",
    url: "https://www.galeriaexpresiva.com/",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/bucket-genesis-art/genesis.jpeg",
        width: 1200,
        height: 630,
        alt: "Obra de Genesis Lopez",
      },
    ],
    locale: "es_ES",
    siteName: "Galería expresiva",
  },
  alternates: {
    canonical: "https://www.galeriaexpresiva.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galería expresiva - Pinturas Originales en Venta",
    description:
      "Descubre y compra pinturas originales de Genesis Lopez. Galería expresiva ofrece arte único y vibrante para decorar tu hogar u oficina. ¡Apoya el arte original!",
    images: ["https://storage.googleapis.com/bucket-genesis-art/genesis.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-gray-800 font-sans">{children}</body>
    </html>
  );
}
