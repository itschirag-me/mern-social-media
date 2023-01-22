import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getJwtVerify } from '../services/auth.service';

/**
 * Middleware to Authenticate JWT bearer token
 */
const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const bearerToken = req.get('Authorization')!;
    const { isVerified, message } = await getJwtVerify(bearerToken);

    if (!isVerified) {
      const error: any = new Error(message);
      throw error;
    }

    next();
  } catch (error: any) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      status: 'failed',
      statusCode: StatusCodes.UNAUTHORIZED,
      message: error.message,
    });
  }
};

export default isAuth;
