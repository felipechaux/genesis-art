import Image from "next/image";

type ArtCardProps = {
  title: string;
  medium: string;
  price: string;
  image: string;
  alt: string;
};

const ArtCard = ({ title, medium, price, image, alt }: ArtCardProps) => (
  <div className="fade-in bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition group">
    <Image
      src={image}
      alt={alt}
      width={600}
      height={256}
      className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
      style={{ objectFit: 'cover' }}
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-600 transition">{title}</h3>
      <p className="text-gray-600 mb-4">
        {medium} <span className="block text-lg font-bold text-indigo-600">{price}</span>
      </p>
      <a href="#contact" className="inline-block px-5 py-2 bg-indigo-500 text-white rounded font-semibold hover:bg-pink-500 transition">Comprar</a>
    </div>
  </div>
);

export default ArtCard; 