import mongoose from "mongoose";

const roles_schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const Role = mongoose.model("Role",roles_schema);

export default Role;