import Image from "next/image";

type ArtCardProps = {
  title: string;
  medium: string;
  price: string;
  image: string;
  alt: string;
  available?: boolean;
};

const ArtCard = ({
  title,
  medium,
  price,
  image,
  alt,
  available,
}: ArtCardProps) => (
  <div className="fade-in bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition group">
    <Image
      src={image}
      alt={alt ? alt : "Obra de arte"}
      width={600}
      height={256}
      className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
      style={{ objectFit: "cover" }}
      role="img"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-600 transition flex items-center gap-2">
        {title}
        {available !== undefined && (
          <span
            className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${available ? "bg-green-100 text-green-700 border border-green-300" : "bg-gray-200 text-gray-500 border border-gray-300"}`}
          >
            {available ? "Disponible" : "No disponible"}
          </span>
        )}
      </h3>
      <p className="text-gray-600 mb-4">
        {medium}{" "}
        <span className="block text-lg font-bold text-indigo-600">{price}</span>
      </p>
      <a
        href="#contact"
        className="inline-block px-5 py-2 bg-indigo-500 text-white rounded font-semibold hover:bg-pink-500 transition"
      >
        Comprar
      </a>
    </div>
  </div>
);

export default ArtCard;
