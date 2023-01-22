import { NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

/**
 * Controller to get Health
 */
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

/**
 * Controller to handle errors
 */
export const handleErrors = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode: number =
    error?.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message: string = error?.message || ReasonPhrases.INTERNAL_SERVER_ERROR;
  res.status(statusCode).json({
    status: 'failed',
    statusCode: statusCode,
    message: message,
  });
};

/**
 * Controller to handle method not found
 */
export const handleNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(StatusCodes.NOT_FOUND).json({
    status: 'failed',
    statusCode: StatusCodes.NOT_FOUND,
    message: "method not found",
  });
};
