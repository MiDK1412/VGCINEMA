import mongoose from "mongoose";

const cinema_hall_seats_schema = new mongoose.Schema(
    {
        seat_row: {
            type: String,
            required: true,
        },
        seat_column: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        cinema_hall: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"CinemaHall",
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const CinemaHallSeat = mongoose.model("ScreenSeat",cinema_hall_seats_schema);

export default CinemaHallSeat;