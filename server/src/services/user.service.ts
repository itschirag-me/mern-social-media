import { Schema } from 'mongoose';
import UserDocument, { UserPayload } from '../interfaces/user';
import User from '../models/User';

/**
 * Creates User
 * @param user User Payload
 * @returns UserDocument
 */
export const CreateUser = (user: UserPayload) => {
  return new User(user);
};

/**
 * Get user document by email
 * @param email Example: xyz@xyz.com
 * @returns
 */
export const GetUserByEmail = (email: string) => {
  return User.findOne({ email });
};

/**
 * Get user document by contact number.
 * @param contactNumber Example: +919876543210
 * @returns
 */
export const GetUserByPhone = (contactNumber: string) => {
  return User.findOne({ contactNumber });
};

/**
 * Get user document by Object Id
 * @param _id Object Id 
 * @returns 
 */
export const GetUserById = (_id: string) => {
  return User.findById(_id);
};

/**
 * Delete user by Object Id
 * @param _id Object Id
 * @returns 
 */
export const DeleteUserById = (_id: string) => {
  return User.findByIdAndDelete(_id);
};

/**
 * 
 * @param _id Object Id
 * @param payload body to change user details
 * @returns 
 */
export const UpdateUserById = (_id: string, payload: object) => {
  return User.findByIdAndUpdate(_id, payload);
};
