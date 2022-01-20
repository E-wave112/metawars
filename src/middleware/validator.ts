import { Request, Response, NextFunction } from "express";
class ValidatorMiddleware {
    public useBodyValidator = (schema: any) => {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const data = await schema
                    .unknown(false)
                    .validateAsync(req.body, { stripUnknown: true });
                req.body = data;
                next();
            } catch (e) {
                const message = e.message;
                return res.status(404).send({ message: message })
            }
        };
    };
}

export default new ValidatorMiddleware()