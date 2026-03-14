import Movie from '../models/movie.js'

export const get_movie_list = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(400).json(movies);
    } catch (error) {
        console.error("Loi khi goi danh sach phim: ",error);
        res.status(500).json({
            message: "Loi he thong"
        });
    }
}

export const create_movie = async (req, res) => {
    try {

        const { title, description, 
                duration_in_min, language, 
                realease_date, country,genre} = req.body;
        
        if(!title || !description || !duration_in_min||
            !language|| !realease_date|| !country|| !genre) {
            res.status(400).json({
                message: "Vui long dien day du thong tin"
            })
        }

        const new_movie = await Movie.create({
            title,
            description,
            duration_in_min,
            language,
            realease_date,
            country,
            genre
        });
        
        res.status(200).json({
            message: "Tao phim thanh cong",
            data: new_movie
        });


    } catch (error) {
        console.error("Loi khi tao phim: ",error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const update_movie = async (req, res) => {
    try {
            const { id } = req.params;
            const { title, description, 
                    duration_in_min, language, 
                    realease_date, country, genre } = req.body;
            const updated_movie = await Movie.findByIdAndUpdate(
                id,
                { title, description, 
                    duration_in_min, language, 
                    realease_date, country, genre },
                { new: true }
            );
        
            res.status(200).json(updated_movie);
    } catch (error) {
        console.error("Loi khi update bo phim ",error);
        res.status(500).json({
            message: "Loi he thong"
        })
    } 
}

export const delete_movie = async (req, res) => {
    try {
            const delete_movie = await Movie.findByIdAndDelete(req.params.id)
        
            if(!delete_movie) {
                res.status(400).json({
                    message: "bo phim nay khong ton tai"
                });
            }
        
            res.status(400).json(delete_movie);
    } catch (error) {
        console.error("Loi khi xoa 1 bo phim: ",error);
        res.status(500).json({
            message: "Loi he thong"
        });
    }
}