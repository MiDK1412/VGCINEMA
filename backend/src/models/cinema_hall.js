import mongoose from "mongoose";

const cinema_hall_schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        total_seats: {
            type: Number,
            required: true,
        },
        show: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Show",
        }
    }
);

const CinemaHall = mongoose.model("CinemaHall",screen_schema);

export default CinemaHall;