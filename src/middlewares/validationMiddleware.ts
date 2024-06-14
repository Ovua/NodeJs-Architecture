import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Middleware di validazione per la creazione di un nuovo utente
export const validateCreateUser = [
    body('name').notEmpty().withMessage('Il nome è obbligatorio'),
    body('email').isEmail().withMessage('Email non valida'),
    body('password').isLength({ min: 8 }).withMessage('La password deve avere almeno 8 caratteri'),
    handleValidationErrors
];

// Middleware di validazione per l'aggiornamento di un utente esistente
export const validateUpdateUser = [
    body('name').optional().notEmpty().withMessage('Il nome è obbligatorio'),
    body('email').optional().isEmail().withMessage('Email non valida'),
    body('password').optional().isLength({ min: 8 }).withMessage('La password deve avere almeno 8 caratteri'),
    handleValidationErrors
];

// Middleware per gestire gli errori di validazione
function handleValidationErrors(req: Request, res: Response, next: NextFunction): void {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    next();
}
