import { Router } from 'express';
import * as userController from '../controllers/userController';
import { validateCreateUser, validateUpdateUser } from '../middlewares/validationMiddleware';

const router: Router = Router();

// Rotta per ottenere un utente per ID
router.get('/:userId', userController.getUserById);

// Rotta per ottenere tutti gli utenti
router.get('/', userController.getAllUsers);

// Rotta per creare un nuovo utente
router.post('/', validateCreateUser, userController.createUser);

// Rotta per aggiornare un utente esistente
router.put('/:userId', validateUpdateUser, userController.updateUser);

// Rotta per eliminare un utente
router.delete('/:userId', userController.deleteUser);

export default router;
