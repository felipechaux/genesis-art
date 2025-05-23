import Image from "next/image";

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <Image
          src="https://storage.googleapis.com/bucket-genesis-art/genesis.jpeg"
          alt="Artist"
          width={256}
          height={256}
          className="w-90 mx-auto rounded-full border-4 border-indigo-200 shadow-xl"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800">Conoce a la Artista</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hola, soy Genesis Lopez, una pintora apasionada inspirada por los vibrantes colores y emociones del mundo. Creo arte que conecta profundamente con las personas, iluminando hogares y corazones. Cada pintura es única, creada con amor y visión.
        </p>
        <p className="text-gray-600">
        Gracias por apoyar el arte original. <span className="text-pink-500 font-bold">¡Hagamos que tu espacio sea inolvidable!</span>
        </p>
      </div>
    </div>
  </section>
);

export default About; 