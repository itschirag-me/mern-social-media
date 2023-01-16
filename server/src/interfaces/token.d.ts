import { Date, Document, ObjectId } from "mongoose"

export type Token = {
    token: string,
    userId: ObjectId,
    expiry: Date,
    createdAt: Date,
}

type TokenDocument = Token & Document;

export default TokenDocument;