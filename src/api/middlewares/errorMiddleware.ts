import type { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
	statusCode?: number;
}

export const errorMiddleware = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		let error: CustomError = { ...err };
		error.message = err.message;

		console.error(err);

		res.status(error.statusCode || 500).json({
			success: false,
			error: error.message || "Server Error",
		});
	} catch (error) {
		next(error);
	}
};
