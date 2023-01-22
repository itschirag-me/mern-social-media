import jwt from 'jsonwebtoken';
import moment from 'moment';
import configVar from '../config';
import UserDocument from '../interfaces/user';
import User from '../models/User';
import { GetUserById } from './user.service';

/**
 * Helper function to generate JWT token.
 * @param payload User object from database.
 * @returns { isVerified: boolean, message: string }
 */
export const getJwtToken = (payload: UserDocument) => {
  const data = {
    sub: payload?._id,
    name: payload?.name,
    iat: moment().add(1, 'h').unix(),
  };

  const token = jwt.sign(data, configVar.jwtSecret, {
    expiresIn: '1h',
  });

  return {
    authToken: token,
    timeout: data?.iat,
  };
};

/**
 * Helper function to verify JWT bearer token provided.
 * @param bearerToken JWT Bearer token
 * @returns { isVerified: boolean, message: string }
 */
export const getJwtVerify = async (bearerToken: string) => {
  if (!bearerToken) {
    return { isVerified: false, message: 'No Authorization provided' };
  } else {
    const [, token]: string[] = bearerToken.split(' ');
    const jwtPayload: any = await jwt.verify(token, configVar.jwtSecret);

    const user: UserDocument | null = await GetUserById(jwtPayload.sub);

    if (!user) {
      return { isVerified: false, message: 'Authorization not valid' };
    }

    return { isVerified: true, message: 'Successful Authorization' };
  }
};
