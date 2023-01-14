import { NextFunction, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const getApiHealth = (req: Request, res: Response, next: NextFunction): void => {
    res.status(StatusCodes.OK).json({
        status: "success",
        statusCode: 200,
        message: ReasonPhrases.OK
    })
}

export const postSignup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const error: any = new Error("Empty controller")
        error.statusCode = 400;
        throw error;
    } catch (error) {
        next(error)
    }
}
