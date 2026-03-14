import CinemaHallSeat from '../models/cinema_hall_seat.js'

export const get_cinema_hall_seat_list = async (req, res) => {
    try {
        const cinema_hall_seat = await CinemaHallSeat.find().sort({ createdAt: -1 });
        res.status(201).json(cinema_hall_seat);
    } catch (error) {
        console.error("Loi khi goi danh sach ghe ngoi: ", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const create_cinema_hall_seat = async (req, res) => {
    try {
        const { name, totals_seats, show} =req.body;

        const new_cinema_hall = await CinemaHall.create(
            name,
            totals_seats,
            show
        );

        res.status(201).json(new_cinema_hall);
    } catch (error) {
        console.error("Loi khi tao ghe ngoi", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const update_cinema_hall_seat = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Loi khi", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const delete_cinema_hall_seat = async (req, res) => {
    try {
        const delete_seat = await CinemaHallSeat.findByIdAndDelete(req.params.id);
        if (!delete_seat) {
            res.status(400).json({
                message: "Ghe nay khong ton tai"
            })
        }
    
        res.status(201).json({
            message: "Xoa Ghe thanh cong",
            data: delete_seat
        })
    } catch (error) {
        console.error("Loi khi xoa cinema hall", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}