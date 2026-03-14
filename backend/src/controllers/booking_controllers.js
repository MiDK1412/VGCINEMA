import Booking from '../models/booking.js'
import { get_next_sequece } from '../utils/get_next_sequece.js';

export const get_booking_list = async (req, res) => {
    try {
        const booking = await Booking.find().sort({createdAt: -1});
        res.status(201).json(booking);
    } catch (error) {
        console.error("Loi khi", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const create_booking = async (req, res) => {
    try {
        const {  account, show } = req.body;

        const bookingNumber = await get_next_sequece("booking_number");

        const formattedBN = "BK" + bookingNumber.toString().padStart(5,"0");

        if(!account || !show){
            return res.status(400).json({
                message: "Vui long dien day du thong tin"
            })
        }

        const new_booking = await Booking.create({
            booking_number: formattedBN,
            status: "pending",
            account,
            show
        });

        res.status(201).json({
            message: "Tao booking thanh cong",
            booking: new_booking
        })
    } catch (error) {
        console.error("Loi khi tao booking", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const update_booking_status = async (req, res) => {
    try {
        const { id } = req.params;
        const { status }= req.body;

        const update_booking = await Booking.findByIdAndUpdate(
            id,
            { status },
            { new:true }
        )

        if (!update_booking) {
            return res.status(400).json({
                message: "booking nay khong ton tai"
            });
        }

        res.status(201).json({
            message: "Cap nhat booking thanh cong",
            booking: update_booking
        })
    } catch (error) {
        console.error("Loi khi cap nhat booking", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const delete_booking = async (req, res) => {
    try {
        const delete_booking = await Booking.findByIdAndDelete(req.params.id);
        if (!delete_booking) {
            res.status(400).json({
                message: "Booking nay khong ton tai"
            })
        }
    
        res.status(201).json({
            message: "Xoa booking thanh cong",
            data: delete_booking
        })
    } catch (error) {
        console.error("Loi khi xoa booking", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const get_booking_detail = async (req, res) => {
    try {
        const { id } = req.params;

        const booking = await Booking.findById(id)
            .populate({
                path: "show",
                populate: {
                    path:"movie"
                }
            }).populate("account");

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        res.status(201).json(booking)
    } catch (error) {
                console.error("Loi khi goi chi tiet booking", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}