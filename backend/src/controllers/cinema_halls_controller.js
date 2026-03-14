import CinemaHall from '../models/cinema_hall.js'

export const get_cinema_hall_list = async (req, res) => {
    try {
        const cinema_hall = await CinemaHall.find().sort({ createdAt: -1 });
        res.status(201).json(cinema_hall);
    } catch (error) {
        console.error("Loi khi", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const create_cinema_hall = async (req, res) => {
    try {
        const { name, totals_seats, show} =req.body;

        if(!name || !totals_seats|| !show){
            return res.status(400).json({
                message: "Vui long dien day du thong tin"
            })
        }
        const new_cinema_hall = await CinemaHall.create(
            name,
            totals_seats,
            show
        );

        res.status(201).json(new_cinema_hall);
    } catch (error) {
        console.error("Loi khi tao cinema hall", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const update_cinema_hall = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Loi khi", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const delete_cinema_hall = async (req, res) => {
    try {
        const delete_cinema_hall = await CinemaHall.findByIdAndDelete(req.params.id);
        if (!delete_cinema_hall) {
            res.status(400).json({
                message: "Cinema hall nay khong ton tai"
            })
        }
    
        res.status(201).json({
            message: "Xoa cinema hall thanh cong",
            data: delete_cinema_hall
        })
    } catch (error) {
        console.error("Loi khi xoa cinema hall", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}