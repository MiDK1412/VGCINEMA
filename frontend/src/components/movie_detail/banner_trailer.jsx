

const BannerTrailer= ({ movie }) => {

    return(
        <div className="w-full h-[420px] bg-black flex justify-center items-center relative">

            <img
                src={movie.poster}
                className="w-full h-full object-cover opacity-80"
            />

            {/* Play button */}
            <button className="absolute bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                ▶
            </button>

        </div>
    );
};

export default BannerTrailer;