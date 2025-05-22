import ArtCard from "./ArtCard";

const artworks = [
  {
    title: "Sunset Dreams",
    medium: "Acrylic on canvas",
    price: "$250",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    alt: "Painting 1",
  },
  {
    title: "Forest Whispers",
    medium: "Oil on canvas",
    price: "$320",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    alt: "Painting 2",
  },
  {
    title: "Urban Harmony",
    medium: "Watercolor",
    price: "$180",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    alt: "Painting 3",
  },
];

const Gallery = () => (
  <section id="gallery" className="py-24 bg-gradient-to-br from-fuchsia-50 via-indigo-50 to-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-800">Gallery</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((art, i) => (
          <ArtCard key={art.title} {...art} />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery; 