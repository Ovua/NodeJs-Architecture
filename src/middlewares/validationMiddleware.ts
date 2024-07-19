import { Request, Response, NextFunction } from "express";
import Joi from "joi";

// Middleware validation for creating a new user
export const validateCreateUser = [
  {
    name: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required,
  },
];

// Middleware validation for updating a user
export const validateUpdateUser = [{
    name: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required,
}];
