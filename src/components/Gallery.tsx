import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, get, onValue, off } from "firebase/database";
import ArtCard from "./ArtCard";

// Define the artwork type
interface Artwork {
  url: string;
  title: string;
  description: string;
  price: string;
}

const Gallery = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const galleryRef = ref(db, "gallery");
    setLoading(true);
    setError(null);
    const handleValue = (snapshot: any) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const arts = Object.values(data) as Artwork[];
        setArtworks(arts);
      } else {
        setArtworks([]);
      }
      setLoading(false);
    };
    const handleError = () => {
      setError("Failed to load gallery.");
      setLoading(false);
    };
    onValue(galleryRef, handleValue, handleError);
    return () => {
      off(galleryRef, "value", handleValue);
    };
  }, []);

  if (loading) {
    return <div className="text-center py-24">Loading gallery...</div>;
  }

  if (error) {
    return <div className="text-center py-24 text-red-500">{error}</div>;
  }

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-fuchsia-50 via-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-800">Gallery</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.map((art, i) => (
            <ArtCard
              key={art.title + i}
              image={art.url}
              title={art.title}
              medium={art.description}
              price={art.price}
              alt={art.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 