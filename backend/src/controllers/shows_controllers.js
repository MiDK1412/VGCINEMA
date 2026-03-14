import Show from '../models/show.js';

export const create_show = async (req, res) => {
    try {
        const { start_time, end_time, movie_id, screen_id } = req.body;

        if(!start_time ||!end_time ||!movie_id ||!screen_id ) {
            res.status(400).json({
                message: "Vui long dien day du thong tin can thiet !!"
            });
        }

        if(new Date(end_time) <= new Date(start_time)) {
            res.status(400).json({
                message: "Thoi diem ket thuc phai sau thoi diem bat dau"
            });
        }

        const new_show = await Show.create ({
            start_time,
            end_time,
            movie_id,
            screen_id,
            create_by: req.user?._id,
        });

        res.status(201).json({
            message: "Tao suat chieu thanh cong",
            data: new_show,
        });


    } catch (error) {
        console.error("Loi khi tao suat chieu: ",error);
        res.status(500).json({
            message:"Loi he thong"
        });
    }
}

export const get_show_list = async (req, res) => {
    try {
        const shows = await Show.find();

        res.status(200).json(shows);
    } catch (error) {
        console.error("Loi khi goi list suat chieu:", error);
        res.status(500).json({
            message: "Loi he thong"
        });
    }
}

export const update_show_status = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const show = await Show.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );         
        
        res.status(200).json(show);
    } catch (error) {
        console.error("Loi khi update status suat chieu: ",error);
        res.status(500).json({
            message: "Loi he thong"
        });
    }
}

export const detele_show = async (req, res) => {
    try {
        const detele_show = await Show.findByIdAndDelete(req.params.id)

        if(!detele_show) {
            res.status(400).json({
                message: "suat chieu khong ton tai"
            });
        }

        res.status(400).json(detele_show);
    } catch (error) {
        console.error("Loi khi xoa suat chieu", error)
    }
}