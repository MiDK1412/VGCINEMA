import mongoose from "mongoose";
import { type } from "os";
import bcrypt from "bcrypt";

const account_schema = new mongoose.Schema(
    {
        user_name: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        full_name: {
            type: String,
            required: true        
        },
        reset_pass_token:{
            type: String,
            select: false
        },
        reset_pass_expire:{
            type: Date,
            select: false
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
            required: true
        }
    }, 
    {
        timestamps: true,
    }
);

//Mongoose middleware (pre hook)
account_schema.pre("save", async function () {
    if(!this.isModified("password")) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

const Account = mongoose.model("Account", account_schema);

export default Account;