import { useNavigate } from "react-router-dom";

const SidebarMovie = ({ movies }) => {
    const navigate = useNavigate();
  return (
    <div className="bg-white p-2 rounded-lg py-4">
      <h3 className="font-semibold mb-6 border-l-4 border-blue-500 pl-3">
        PHIM ĐANG CHIẾU
      </h3>
      <div className="space-y-6">
        {movies.map((m) => (
          <div key={m.id} className="cursor-pointer">
            {/* Poster container */}
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={m.poster}
                className="w-full h-50 object-cover rounded"
              />
              {/* Rating */}
              <div className="absolute bottom-2 right-0 bg-black/70 text-white 
              text-xl text-bold px-4 py-1 rounded-l-2xl flex items-center gap-2">
                ⭐ {m.rating}
              </div>
              {/* Age badge */}
              <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-sm text-semibold px-2 py-1 rounded">
                T18
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 
                group-hover:opacity-100 transition"></div>

                {/* Buy ticket button */}
                <div className="absolute inset-0 flex items-center justify-center 
                opacity-0 group-hover:opacity-100 transition z-10">
                    <button
                    onClick={() => navigate(`/movie/${m.id}`)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                    Mua Vé
                    </button>
                </div>
            </div>
            {/* Title */}
            <p className="mt-2 text-l font-medium">
              {m.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarMovie;