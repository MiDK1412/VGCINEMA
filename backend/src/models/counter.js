import mongoose from "mongoose";

const counter_schema = new mongoose.Schema({
    _id: String,
    seq: {
        type: Number,
        default: 0
    }
});

const Counter = mongoose.model("Counter",counter_schema);

export default Counter;