import movies from "../data/movie";

const SidebarMovie = () => {
    return(
        <div>
            <h2 className="font-semibold mb-4 border-l-4 border-blue-500 pl-3">
                PHIM ĐANG CHIẾU
            </h2>
            <div className="space-y-6">
                {
                    movies.map((m)=>{
                        <div key={m.id} className="flex gap-3">
                            <img src={m.poster} className="w-28 rounded-lg"/>
                            <div>
                                <p className="font-semibold">{m.title}</p>
                                <p className="text-yellow-500 text-sm">⭐ {m.rating}</p>
                            </div>
                        </div>
                    })
                }          
            </div>
        </div>
    )
}
export default SidebarMovie;