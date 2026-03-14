import { error } from 'console';
import Account from '../models/account.js';
import crypto from "crypto";
import bcrypt from "bcrypt";
import e from 'express';

export const get_account_list = async (req, res) => {
    try {
        const accounts = await Account.find().sort({ createAt: -1});
        res.status(200).json(accounts);
    } catch (error) {
        console.error("Loi khi goi get_account_list:",error);
        res.status(500).json({message: "Loi he thong"});
    }
    
}

export const create_account = async (req, res) => {
    try {

        const { user_name, password, full_name, email } = req.body;

        //kiem tra nhap day du thong tin
        if(!user_name|| !password || !full_name|| !email) {
            return res.status(400).json({
                message: "vui long nhap day du thong tin"
            });
        }

        //kiem tra user_name co ton tai khong ?
        const exist_account = await Account.findOne({user_name});
        if(exist_account) {
            return res.status(400).json({
                message: "ten tai khoan nay da ton tai"
            });
        }

        //Tao tai khoan
        const new_account = await Account.create({user_name, password, full_name, email});
        res.status(201).json({
            message:"Tao tai khoan thanh cong",
            data: {
                id: new_account._id,
                user_name: new_account.user_name,
                full_name: new_account.full_name,
                email: new_account.email
            }
        });

    } catch (error) {
        console.error("Loi khi tao tai khoan:",error);
        res.status(500).json({message: "Loi he thong"});
    }
}

//PHAN GUI EMAIL
export const forgot_password = async (req, res) => {
    try {

        const { email } = req.params;

        const user = await Account.findOne({email});
        
        if(!user) {
            return res.status(400).json({
                message:"email nay khong ton tai"
            });
        }

        //tao reset token
        const reset_token = crypto.randomBytes(32).toString("hex");

        //tao hash token truoc khi luu DB (bao mat)
        const hashed_token = crypto.createHash("sha256").update(reset_token).digest("hex");

        //luu vao DB
        user.reset_pass_token = hashed_token;
        user.reset_pass_expire = Date.now() + 20 * 60 * 1000;

        await user.save();

        //tao link gui email
        const resetUrl = `http://localhost:5001/reset-password/${resetToken}`;

        // TODO: Gửi email bằng nodemailer

        res.status(200).json({
            message: "da gui email rest password",
            resetUrl // dev test thôi, production không trả về
        });

    } catch (error) {
        res.status(500).json({ message: "Loi he thong" });
    }
    
}
export const reset_password = async (req, res) => {
    try {
        
        const { token } = req.params;
        const { new_password } = req.body;

        //Hash token tu URL
        const hashed_token = crypto.createHash("sha256").update(token).digest("hex");

        //Tim user co token hop le
        const user = await Account.findOne({
            reset_pass_token: hashed_token,
            reset_pass_expire: { $gt: Date.now() }
        });

        if(!user){
            return res.status(400).json({
                message: " token khong hop le hoac het han"
            });
        }

        user.password = new_password;

        //xoa token
        user.reset_pass_token = undefined;
        user.reset_pass_expire = undefined;

        await user.save(); // trigger pre("save") hash password

        res.status(200).json({
            message:"Dat lai mat khau thanh cong"
        })
    } catch (error) {
        res.status(500).json({
            message:"Loi he thong"
        })
    }
}

export const detele_account = async (req, res) => {
    try {
       const detele_account = await Account.findByIdAndDelete(req.params.id);

       if(!detele_account) {
        return res.status(400).json({
            message:"tai khoan nay khong ton tai"
        });
       }

       res.status(400).json(detele_account);
    } catch (error) {
        console.error("Loi khi xoa tai khoan: ",error);
        res.status(500).json({
            message:"Loi he thong"
        });
    }
}