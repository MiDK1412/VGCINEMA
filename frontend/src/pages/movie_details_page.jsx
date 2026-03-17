import { useParams } from "react-router-dom";
import movies from "../data/movie";
import Navbar from "../components/navbar";
import BannerTrailer from "../components/banner_trailer";
import MovieInfo from "../components/movie_info";
import SidebarMovie from "../components/sidebar_movie";
import ShowtimeSelector from "../components/showtime_selector";
import showtimes from "../data/showtime";

const MovieDetailPage = () =>{
    const { id } = useParams();

    const movie = movies.find((m) => m.id === Number(id));

    const movie_showtimes = showtimes.filter((showtimes) => showtimes.movieId === Number(id));

    return (
        <div className="min-h-screen bg-gray-100 text-black">
            <Navbar/>
            <BannerTrailer movie={movie}/>
            <div className="max-w-7xl mx-auto grid grid-cols-14 gap-4 pb-20">
                <div className="col-span-10 bg-gray-100 rounded-lg ">
                    <MovieInfo movie ={movie}/>
                    {/* CONTENT */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-600 pl-3">
                                Nội Dung Phim
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {movie.description}
                        </p>
                    </div>
                    <ShowtimeSelector showtimes={movie_showtimes}/>
                </div>
                <div className="col-span-4"> 
                    <SidebarMovie movies={movies} />
                </div>
            </div>
            
        </div>        
    );
};


export default MovieDetailPage;