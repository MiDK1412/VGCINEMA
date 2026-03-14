import mongoose from "mongoose";

const genre_schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

const Genre = mongoose.model("Genre",genre_schema);

export default Genre;