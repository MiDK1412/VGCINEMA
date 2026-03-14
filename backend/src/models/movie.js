import mongoose from "mongoose";

const movie_schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true, //co khoang trang dau hoac cuoi se dc tu dong xoa
        },
        rating:{
            type: String,
        },
        poster: {
            type: String,
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        duration_in_min: {
            type: Number,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        realease_date: {
            type: Date,
            required: true,
        },
        country: {
            type: String,
            required: true,
            trim: true
        },
        genre: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Genre",          
        }]
    },
    {
        timestamps: true,
    }
);

const Movie = mongoose.model("Movie",movie_schema);

export default Movie;