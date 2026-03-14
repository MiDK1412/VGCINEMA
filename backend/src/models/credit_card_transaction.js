import mongoose from "mongoose";

const credit_card_transaction_schema = new mongoose.Schema(
    {
        name_on_card: {
            type: String,
            required: true,
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

const CreditCardTransaction = mongoose.model("CreditCardTransaction", credit_card_transaction_schema);

export default CreditCardTransaction;