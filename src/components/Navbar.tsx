"use client";
import Link from "next/link";

const Navbar = () => (
  <nav className="fixed w-full z-30 bg-white/80 backdrop-blur shadow" aria-label="Main navigation">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <span className="text-2xl font-bold text-indigo-600 tracking-tight">
        Galeria Expresiva
      </span>
      <ul className="space-x-6 hidden md:flex list-none m-0 p-0">
        <li>
          <Link
            href="#gallery"
            className="hover:text-pink-500 transition font-semibold"
            aria-label="Ir a la galería"
          >
            Galeria
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="hover:text-pink-500 transition font-semibold"
            aria-label="Acerca de la artista"
          >
            Acerca de mi
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="hover:text-pink-500 transition font-semibold"
            aria-label="Ir a la sección de contacto"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
