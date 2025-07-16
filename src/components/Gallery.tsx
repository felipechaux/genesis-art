import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, get, onValue, off } from "firebase/database";
import ArtCard from "./ArtCard";
import type { DataSnapshot } from "firebase/database";

// Define the artwork type
interface Artwork {
  url: string;
  title: string;
  description: string;
  price: string;
  category?: string; // Added category as optional
  available?: boolean; // Added available as optional boolean
}

const Gallery = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [categories, setCategories] = useState<string[]>(["Todos"]); // New state for categories

  // Fetch categories from Firebase Realtime Database
  useEffect(() => {
    const categoryRef = ref(db, "category");
    get(categoryRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const categoryNames = Object.values(data).map((cat: any) => cat.name);
          setCategories(["Todos", ...categoryNames]);
        } else {
          setCategories(["Todos"]);
        }
      })
      .catch(() => setCategories(["Todos"]));
  }, []);

  useEffect(() => {
    const galleryRef = ref(db, "gallery");
    setLoading(true);
    setError(null);
    const handleValue = (snapshot: unknown) => {
      const snap = snapshot as DataSnapshot;
      if (snap.exists()) {
        const data = snap.val();
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

  // Filter artworks by selected category
  const filteredArtworks =
    selectedCategory === "Todos"
      ? artworks
      : artworks.filter((a) => a.category === selectedCategory);

  if (loading) {
    return <div className="text-center py-24">Loading gallery...</div>;
  }

  if (error) {
    return <div className="text-center py-24 text-red-500">{error}</div>;
  }

  return (
    <>
      {/* Category Filter Dropdown */}
      <section className="pt-8 pb-12 bg-gradient-to-br from-white via-indigo-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">
            Filtrar por Categoría
          </h2>
          <div className="mb-8 flex justify-center">
            <label htmlFor="category-select" className="sr-only">
              Seleccionar categoría
            </label>
            <select
              id="category-select"
              className="border border-indigo-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Main Gallery (filtered by category) */}
      <section
        id="gallery"
        className="pt-16 pb-24 bg-gradient-to-br from-fuchsia-50 via-indigo-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-800">
            Gallery
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArtworks.length > 0 ? (
              filteredArtworks.map((art, i) => (
                <ArtCard
                  key={art.title + i}
                  image={art.url}
                  title={art.title}
                  medium={art.description}
                  price={art.price}
                  alt={art.title}
                  available={art.available}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 text-xl">
                No hay obras para esta categoría :(
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
