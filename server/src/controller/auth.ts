import { NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import UserDocument from '../interfaces/user';
import User from '../models/User';
import { getJwtToken } from '../services/auth.service';
import { CreateUser } from '../services/user.service';

export const getApiHealth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(StatusCodes.OK).json({
    status: 'success',
    statusCode: 200,
    message: ReasonPhrases.OK,
  });
};

export const postSignin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      const error: any = new Error('User not found');
      error.statusCode = StatusCodes.NOT_FOUND;
      throw error;
    }

    if (!user?.comparePassword(password)) {
      const error: any = new Error('Incorrect password');
      error.statusCode = StatusCodes.UNAUTHORIZED;
      throw error;
    }

    const data = getJwtToken(user);

    res.status(StatusCodes.ACCEPTED).json({
      status: 'success',
      statusCode: StatusCodes.ACCEPTED,
      message: ReasonPhrases.ACCEPTED,
      data: data,
    });
  } catch (error) {
    next(error);
  }
};
