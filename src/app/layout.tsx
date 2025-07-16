import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Galería expresiva - Pinturas Originales en Venta",
  description:
    "Descubre y compra pinturas originales de Genesis Lopez. Galería expresiva ofrece arte único y vibrante para decorar tu hogar u oficina. ¡Apoya el arte original!",
  keywords: [
    "arte",
    "pinturas originales",
    "Genesis Lopez",
    "galería de arte",
    "arte contemporáneo",
    "cuadros en venta",
    "decoración",
    "arte vibrante",
    "comprar arte"
  ],
  authors: [{ name: "Genesis Lopez", url: "https://www.galeriaexpresiva.com/" }],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <Head>
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Galería expresiva",
              "url": "https://www.galeriaexpresiva.com/",
              "logo": "https://storage.googleapis.com/bucket-genesis-art/genesis.jpeg",
              "sameAs": [
                "https://www.instagram.com/galeriaexpresiva/"
              ],
              "description": "Descubre y compra pinturas originales de Genesis Lopez. Galería expresiva ofrece arte único y vibrante para decorar tu hogar u oficina. ¡Apoya el arte original!"
            })
          }}
        />
      </Head>
      <body className="bg-white text-gray-800 font-sans">{children}</body>
    </html>
  );
}
