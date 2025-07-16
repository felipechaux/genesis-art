import Image from "next/image";
import { SplashCursor } from "@/components/ui/splash-cursor";

const Hero = () => (
  <section className="hero-bg min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
    <SplashCursor />
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 relative z-10">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow">
          Genesis Art
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto md:mx-0 animate-fadeIn">
          Descubre obras maestras pintadas a mano que aportan color, emoción e
          inspiración a tus espacios. Cada pieza cuenta una historia única.
        </p>
        <a
          href="#gallery"
          className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition animate-bounce"
        >
          Explora la Galeria
        </a>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="relative group">
          <Image
            src="https://storage.googleapis.com/bucket-genesis-art/genesis-logo.png"
            alt="Logo de Genesis Art, pintura destacada"
            width={320}
            height={384}
            className="w-80 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white transition-transform duration-700 group-hover:rotate-3 group-hover:scale-105"
            style={{ objectFit: "cover" }}
            role="img"
          />
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition"
            aria-hidden="true"
            tabIndex={-1}
          ></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
