import ShowSeat from '../models/show_seat.js';

export const create_show_seat = async (req, res) => {
    try {
        const { show, cinema_hall_seat, price, booking } = req.body;

        if(!show ||!cinema_hall_seat ||!price ||!booking ) {
            res.status(400).json({
                message: "Vui long dien day du thong tin can thiet !!"
            });
        }
        const new_show_seat = await ShowSeat.create ({
            show,
            cinema_hall_seat,
            price,
            booking,
        });

        res.status(201).json({
            message: "Tao suat chieu thanh cong",
            data: new_show_seat,
        });


    } catch (error) {
        console.error("Loi khi tao ghe trong suat chieu: ",error);
        res.status(500).json({
            message:"Loi he thong"
        });
    }
}

export const get_show_seat_list = async (req, res) => {
    try {
        const show_seats = await ShowSeat.find();

        res.status(200).json(show_seats);
    } catch (error) {
        console.error("Loi khi goi list ghe trong suat chieu:", error);
        res.status(500).json({
            message: "Loi he thong"
        });
    }
}

export const update_show_seat_status = async (req, res) => {
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

export const lock_seat = async (req, res) => {
    try {
        const { seat_id, user_id } = req.body;
        const seat = await ShowSeat.findOneAndUpdate(
            {
                _id: seat_id,
                status: "available"
            },
            {
                status: "locked",
                locked_by: user_id,
                locked_at: new Date()
            },
            { new :true }
        )

        if(!seat) {
            return res.status(400).json({
                message: "ghe nay khong con trong"
            })
        }

        res.status(201).json(seat);
    } catch (error) {
        
    }
}

export const detele_show_seat = async (req, res) => {
    try {
        const detele_show_seat = await ShowSeat.findByIdAndDelete(req.params.id)

        if(!detele_show_seat) {
            res.status(400).json({
                message: "suat chieu khong ton tai"
            });
        }

        res.status(400).json(detele_show_seat);
    } catch (error) {
        console.error("Loi khi xoa ghe trong suat chieu", error)
    }
}