import mongoose from "mongoose";

export const connect_db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);

        console.log("Lien ket CSDL thanh cong");
    } catch (error) {
        console.error("Loi khi ket noi CSDL:", error);
        process.exit(1); //exit with error
    }
};