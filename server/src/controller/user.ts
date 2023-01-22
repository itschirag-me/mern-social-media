import { NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import UserDocument from '../interfaces/user.d';
import User from '../models/User';
import {
  CreateUser,
  GetUserByEmail,
  GetUserByPhone,
} from '../services/user.service';

/**
 * Controller to get user list
 */
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users: UserDocument[] = await User.find().select('-__v');
    if (!users) {
      const error: any = new Error('users list not found');
      error['statusCode'] = StatusCodes.NO_CONTENT;
      throw error;
    }

    res.status(StatusCodes.OK).json({
      status: 'success',
      statusCode: StatusCodes.OK,
      message: ReasonPhrases.OK,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller for create new user
 */
export const postUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userByEmail = await GetUserByEmail(req.body.email);
    const userByPhone = await GetUserByPhone(req.body.contactNumber);

    if (userByEmail || userByPhone) {
      const error: any = new Error(
        `User already exist with ${
          userByEmail?.email || userByPhone?.contactNumber
        }`
      );
      error['statusCode'] = StatusCodes.CONFLICT;
      throw error;
    }

    const user = await CreateUser(req.body);
    await user.encryptPassword();
    await user.save();
    res.status(StatusCodes.CREATED).json({
      status: 'success',
      statusCode: StatusCodes.CREATED,
      message: ReasonPhrases.CREATED,
    });
  } catch (error) {
    next(error);
  }
};
