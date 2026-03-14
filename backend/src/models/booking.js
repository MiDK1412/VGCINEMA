import mongoose from "mongoose";

const booking_schema = new mongoose.Schema(
    {
        booking_number: {
            type: String,
        },

        status: {
            type: String,
        },
        account: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
            required: true
        },
        show: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Show",
            required: true,
        }
    }, 
    {
        timestamps: true,
    }
);

const Booking = mongoose.model("Booking",booking_schema);

export default Booking;