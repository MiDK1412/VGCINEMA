import mongoose from "mongoose";
import { PAYMENT_METHODS } from "../constants/payment_methods.js";

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
            enum: PAYMENT_METHODS.map((method) => method.id),
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