import React from 'react'

const home_page = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/*NavBar*/}
      <nav className="flex items-center justify-between px-8 py-4 bg-black shadow-lg">
        <h1 className="text-2xl font-bold">🎬 CinemaX</h1>
        <div className="space-x-6">
          <button className="hover:text-red-400">Home</button>
          <button className="hover:text-red-400">Movies</button>
          <button className="hover:text-red-400">Showtimes</button>
          <button className="hover:text-red-400">Login</button>
        </div>
      </nav>

      <div className="relative h-[400px] flex items-center justify-center text-center bg-gradient-to-r from-black to-gray-900">
        <div>
          <h2 className="text-4xl font-bold mb-4">Experience Movies Like Never Before</h2>
          <p className="text-gray-300 mb-6">Book your favorite movie tickets instantly</p>
          <button className="bg-red-600 px-6 py-3 rounded-xl hover:bg-red-500 transition">
            Browse Movies
          </button>
        </div>
      </div>

       {/* Movies Section */}
      <section className="px-10 py-12">
        <h3 className="text-3xl font-bold mb-8">Now Showing</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h4 className="text-lg font-semibold">{movie.title}</h4>
                <p className="text-gray-400">⭐ {movie.rating}</p>

                <button className="mt-4 w-full bg-red-600 py-2 rounded-xl hover:bg-red-500">
                  Book Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
        {/* Footer */}
      <footer className="bg-black text-center py-6 text-gray-400">
        © 2026 CinemaX. All rights reserved.
      </footer>
    </div>
      
    
  )
}

export default home_page