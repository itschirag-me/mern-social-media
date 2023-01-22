import { Date, Document, ObjectId } from 'mongoose';

export type AddressPayload = {
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
};

export type UserPayload = {
  name: string;
  email: string;
  contactNumber: string;
  address: AddressPayload;
  password: string;
  isVerified: boolean;
  createdAt: Date;

  encryptPassword(): Promise<void>;
  comparePassword(password: string): boolean;
};

type UserDocument = Document & UserPayload;

export default UserDocument;
