import React from 'react';
import MovieCard from "../components/movie_card.jsx";
import Navbar from "../components/navbar.jsx"
import HeroBanner from "../components/hero_banner.jsx"
import movies from "../data/movie.js"

const home_page = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/*NavBar*/}
        <Navbar/>

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