import React from 'react';
import MovieCard from "../components/home/movie_card.jsx";
import Navbar from "../components/navbar.jsx"
import HeroBanner from "../components/home/hero_banner.jsx"
import movies from "../data/movie.js"
import { useState } from 'react';

const home_page = () => {

  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/*HeroBanner*/}
        <HeroBanner/>
       {/* NOW SHOWING */}
      <section className="px-10 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">Now Showing</h2>

        <div className="flex justify-center gap-8 flex-wrap">

          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}

        </div>

      </section>


        {/* Footer */}
      <footer className="bg-red-800 text-center py-6 text-white-400 shadow-lg">
        © 2026 CinemaX. All rights reserved.
      </footer>
    </div>
      
    
  )
}

export default home_page