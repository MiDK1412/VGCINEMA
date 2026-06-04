
const HeroBanner = () => {
    return(
        <div className="h-[420px] flex items-center justify-center text-center text-white relative"
            style={{
                backgroundImage:
                "url(https://images.unsplash.com/photo-1505685296765-3a2736de412f)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10">
                <h1 className="text-5xl font-bold mb-4">
                    Experience Movies Like Never Before
                </h1>
                <button className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-500 transition">
                    Đặt vé ngay
                </button>
            </div>
        </div>
    );
}

export default HeroBanner;