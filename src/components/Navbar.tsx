"use client";
import Link from "next/link";

const Navbar = () => (
  <nav className="fixed w-full z-30 bg-white/80 backdrop-blur shadow">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <span className="text-2xl font-bold text-indigo-600 tracking-tight">
        Galeria Expresiva
      </span>
      <nav aria-label="Main navigation" className="space-x-6 hidden md:flex">
        <Link
          href="#gallery"
          className="hover:text-pink-500 transition font-semibold"
          aria-label="Ir a la galería"
        >
          Galeria
        </Link>
        <Link
          href="#about"
          className="hover:text-pink-500 transition font-semibold"
          aria-label="Acerca de la artista"
        >
          Acerca de mi
        </Link>
        <Link
          href="#contact"
          className="hover:text-pink-500 transition font-semibold"
          aria-label="Ir a la sección de contacto"
        >
          Contacto
        </Link>
      </nav>
    </div>
  </nav>
);

export default Navbar;
