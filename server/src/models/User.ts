import { model, Schema } from "mongoose";
import UserDocument from "../interfaces/user";

const userSchema = new Schema<UserDocument>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date
    }
})

const User = model("user", userSchema)
export default User;