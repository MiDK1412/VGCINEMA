import mongoose from "mongoose";

const payment_schema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true
        },
        payment_status: {
            type: String,
            enum: ["pending", "success", "failed", "refund"],
            default: "pending",
            required: true
        },
        payment_method: {
            type: String,
            enum: ["credit_card","cash"],
            required: true
        },
        transaction_id: {
            type: String
        },
        booking: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking",
        }
    },
    {
        timestamps: true
    }
);

const Payment = mongoose.model("Payment",payment_schema);

export default Payment;