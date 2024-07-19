import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    next();
};

const validateUpdateUser = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        name: Joi.string().optional(),
        email: Joi.string().email().optional(),
        password: Joi.string().min(6).optional()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    next();
};

export { validateCreateUser, validateUpdateUser };
