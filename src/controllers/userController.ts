import { Request, Response } from 'express';
import User, { IUser } from '../models/userModel';
import { validationResult } from 'express-validator';

// Controller per ottenere l'ID di un utente
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const user: IUser | null = await User.findById(req.params.userId);
        if (!user) {
            res.status(404).json({ message: 'Utente non trovato' });
            return;
        }
        
        res.json(user);
    } catch (err) {
        console.error('Errore durante il recupero dell\'utente:', err);
        res.status(500).json({ message: 'Errore durante il recupero dell\'utente' });
    }
};

// getAllUsers
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: IUser[] = await User.find();
        res.json(users);
    } catch (err) {
        console.error('Errore durante il recupero degli utenti:', err);
        res.status(500).json({ message: 'Errore durante il recupero degli utenti' });
    }
};


// Controller per creare un nuovo utente
export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser: IUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Errore durante la creazione dell\'utente:', err);
        res.status(400).json({ message: 'Errore durante la creazione dell\'utente' });
    }
};

// Controller per aggiornare un utente esistente
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const updatedUser: IUser | null = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: 'Utente non trovato' });
            return;
        }

        res.json(updatedUser);
    } catch (err) {
        console.error('Errore durante l\'aggiornamento dell\'utente:', err);
        res.status(400).json({ message: 'Errore durante l\'aggiornamento dell\'utente' });
    }
};

// Controller per eliminare un utente
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedUser: IUser | null = await User.findByIdAndDelete(req.params.userId);
        if (!deletedUser) {
            res.status(404).json({ message: 'Utente non trovato' });
            return;
        }

        res.json({ message: 'Utente eliminato con successo' });
    } catch (err) {
        console.error('Errore durante l\'eliminazione dell\'utente:', err);
        res.status(500).json({ message: 'Errore durante l\'eliminazione dell\'utente' });
    }
};
