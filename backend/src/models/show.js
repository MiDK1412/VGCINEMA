import mongoose from "mongoose";

const show_schema = new mongoose.Schema(
    {
        start_time: {
            type: Date,
            required: true,
        },
        end_time: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ["chua_chieu","dang_chieu","chieu_xong","bi_huy"],
            default: "chua_chieu",
        },
        //FK screen, movie, account(admin)
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie",
            required: true,
        },
        cinema_hall: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CinemaHall",
            required: true,
        },
        create_by: { // admin tao suat chieu
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
        }
    },
    {
        timestamps: true,
    }
);

//Time To Live Index(mongoDB)
show_schema.index(
    { expireAt: 1 },
    { expireAfterSeconds: 0} //khi tg hien tai >= gia tri trong expireAt => du lieu se bi xoa
);
//Truong hop 1: khi SAVE
show_schema.pre("save", function () {
    if( this.status === "chieu_xong" || this.status === "bi_huy") {
        const sau_1_tuan = new Date ();
        sau_1_tuan.setDate(sau_1_tuan.getDate() + 7);
        this.expireAt = sau_1_tuan;
    }
});
//Truong hop 2: khi update bang findOneAndUpdate() => middleware save khong chay
show_schema.pre("findOneAndUpdate", function() {
    const update = this.getUpdate();
    if (update.status === "chieu_xong"|| update.status === "bi_huy") {
        
        const sau_1_tuan = new Date();
        sau_1_tuan.setDate(sau_1_tuan.getDate() + 7);

        update.expireAt = sau_1_tuan;
        this.setUpdate(update);
    }
});

const Show = mongoose.model("Show",show_schema);

export default Show;