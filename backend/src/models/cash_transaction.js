import mongoose from "mongoose";

const cash_transaction_schema = new mongoose.Schema(
    {
        cash_tendered: {
            type: Number,
            required: true,
        },
        change_returned: {
            type: Number,
        },
        payment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Payment",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const CashTransaction = mongoose.model("CashTransaction",cash_transaction_schema);

export default CashTransaction;
