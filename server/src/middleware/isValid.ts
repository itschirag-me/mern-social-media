import { NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { isEmpty } from 'lodash';

/**
 * Middleware to validate requestBody
 * @param schema JoiSchema
 * @returns Void
 */
const isValid = (schema: any) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      if (isEmpty(req.body)) {
        const error = new Error(ReasonPhrases.BAD_REQUEST);
        throw error;
      }
      await schema.validateAsync(req.body);
      next();
    } catch (error: any) {
      const statusCode: number = StatusCodes.BAD_REQUEST;
      res.status(statusCode).json({
        status: 'failed',
        statusCode: statusCode,
        message: error.message,
      });
    }
  };
};

export default isValid;
