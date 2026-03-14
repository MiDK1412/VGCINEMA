import Counter from "../models/counter.js";

export const get_next_sequece = async (name) => {
    const counter = await Counter.findByIdAndUpdate(
        name,
        { $inc: { seq: 1} },
        { new: true, upsert: true }
    );

    return counter.seq;
}