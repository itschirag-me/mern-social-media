import { Date, Document } from "mongoose";

type UserDocument = Document & {
    name: string,
    email: string,
    contactNumber: number,
    password: string,
    isAdmin: boolean,
    createdAt: Date,
}

export default UserDocument;