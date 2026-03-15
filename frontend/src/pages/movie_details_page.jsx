import { useParams, Link } from "react-router-dom";
import movies from "../data/movie";
import Navbar from "../components/navbar";

const MovieDetailPage = () =>{
    const { id } = useParams();

    const movie = movies.find((m) => m.id === Number(id));

    return (
        <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-3 gap-10">
            {/* LEFT CONTENT */}
            <div className="col-span-2">
                <div className="flex gap-8">
                    {/* Poster */}
                    <img
                        src={movie.poster}
                        className="w-64 rounded-xl shadow-lg"
                    />
                    {/* Movie Info */}
                    <div>
                        <h1 className="text-3xl font-bold mb-3">
                        {movie.title}
                        </h1>
                        <p className="text-orange-500 mb-2">
                        ⭐ {movie.rating} (88 votes)
                        </p>
                        <p className="text-gray-600">Quốc gia: Mỹ</p>
                        <p className="text-gray-600">Nhà sản xuất: PIXAR</p>
                        {/* Genres */}
                        <div className="flex gap-2 mt-3">
                        <span className="px-3 py-1 border rounded-lg text-sm">
                            Hoạt Hình
                        </span>
                        <span className="px-3 py-1 border rounded-lg text-sm">
                            Phiêu Lưu
                        </span>
                        <span className="px-3 py-1 border rounded-lg text-sm">
                            Hài
                        </span>
                        </div>

                        {/* Director */}
                        <p className="mt-4 text-gray-600">
                        Đạo diễn: Daniel Chong
                        </p>

                        {/* Actors */}
                        <div className="flex gap-2 mt-2 flex-wrap">
                            <span className="px-3 py-1 border rounded-lg text-sm">
                                Jon Hamm
                            </span>
                            <span className="px-3 py-1 border rounded-lg text-sm">
                                Piper Curda
                            </span>
                            <span className="px-3 py-1 border rounded-lg text-sm">
                                Bobby Moynihan
                            </span>
                        </div>
                    </div>
                </div>

                    {/* CONTENT */}
                    <div className="mt-10">

                        <h2 className="text-xl font-semibold mb-3 border-l-4 border-blue-500 pl-3">
                            Nội Dung Phim
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Hoppers xoay quanh Mabel, một cô gái yêu động vật và vô tình tiếp cận
                            công nghệ cho phép chuyển ý thức con người vào cơ thể động vật...
                        </p>
                    </div>
            </div>

        </div>        
    );
};


export default MovieDetailPage;