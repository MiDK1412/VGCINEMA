import React, { useRef } from "react";

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    rating: "8.4",
  },
  {
    id: 2,
    title: "The Batman",
    poster: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    rating: "7.9",
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    poster: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
    rating: "8.2",
  },
  {
    id: 4,
    title: "Dune",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    rating: "8.0",
  },
];

export default function MovieCarousel() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative px-10 py-10">

      <h2 className="text-3xl font-bold mb-6">Now Showing</h2>

      {/* LEFT BUTTON */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-black"
      >
        ◀
      </button>

      {/* MOVIE LIST */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-hidden scroll-smooth"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group min-w-[220px] bg-gray-900 rounded-xl overflow-hidden shadow-lg"
          >
            {/* POSTER */}
            <div className="relative">
              <img
                src={movie.poster}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">

                <h3 className="font-bold text-lg mb-2">
                  {movie.title}
                </h3>

                <p className="text-yellow-400 mb-4">
                  ⭐ {movie.rating}
                </p>

                <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-400">
                  Mua Vé
                </button>

              </div>
            </div>

            {/* TITLE */}
            <div className="p-3">
              <h4 className="font-semibold text-sm truncate">
                {movie.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-black"
      >
        ▶
      </button>
    </div>
  );
}