import { Date, Document } from 'mongoose';

export type Address = {
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
};

export type User = {
  name: string;
  email: string;
  contactNumber: number;
  address: Address;
  password: string;
  isVerified: boolean;
  createdAt: Date;

  encryptPassword(): void;
  comparePassword(password: string): boolean;
};

type UserDocument = Document & User;

export default UserDocument;
