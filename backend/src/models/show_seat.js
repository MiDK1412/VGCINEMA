import mongoose from "mongoose";

const show_seats_schema = new mongoose.Schema(
    {
        show: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Show",
            required: true,
        },
        cinema_hall_seat: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"CinemaHallSeat",
            required: true,
        },
        price: {
            type: Number,
            required:true,
        },
        status: {
            type: String,
            enum: ["available", "locked", "booked"],
            default: "available",
        },
        booking: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Booking",
            default: null,
        },
        locked_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account"
        },
        locked_at: Date
    },
    {
        timestamps: true,
    }
);

const ShowSeat = mongoose.model("ShowSeat",show_seats_schema);

export default ShowSeat;