

const MovieInfo = ({ movie }) => {        
    return (
        <div className="max-w-7xl mx-auto px-1 py-10 grid grid-cols-2 gap-10 relative z-10">
            <div className="col-span-3">
                <div className="flex gap-8">
                    {/* Poster */}
                    <div className="-mt-20">
                        <img
                            src={movie.poster}
                            className="w-72 h-100 rounded shadow-xl border-2 border-white"
                        />
                    </div>
                    {/* Movie Info */}
                    <div>
                        <h1 className="text-xl font-bold mb-3">
                        {movie.title}
                        </h1>
                        <p className="text-orange-500 mb-2">
                        ⭐ {movie.rating} (88 votes)
                        </p>
                        <p className="text-gray-600">Quốc gia: Mỹ</p>
                        <p className="text-gray-600">Nhà sản xuất: PIXAR</p>
                        {/* Genres */}
                        <div className="flex gap-2 mt-2">
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
            </div>
        </div>
    );
};

export default MovieInfo;