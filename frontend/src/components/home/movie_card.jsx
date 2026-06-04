import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>

      <div className="min-w-[220px] group relative rounded-xl overflow-hidden">

        <img
          src={movie.poster}
          className="w-full aspect-[2/3] h-100 object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">

          <h4 className="text-lg font-bold text-white">{movie.title}</h4>

          <p className="text-yellow-400">⭐ {movie.rating}</p>

          <button className="btn-primary">
            Mua Vé
          </button>

        </div>

      </div>

    </Link>
  );
};

export default MovieCard;