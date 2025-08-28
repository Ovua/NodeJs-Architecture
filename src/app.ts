import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
require('dotenv').config();

const dbUri = process.env.DB_URI;

const app: Application = express();

if (!dbUri) {
    console.error('Errore: la variabile d\'ambiente DB_URI non è stata impostata.');
    process.exit(1); // Esce dal processo Node.js con un codice di errore
}

// Middleware per il parsing del corpo delle richieste in JSON
app.use(bodyParser.json());

// Connessione al database MongoDB

mongoose.connect(dbUri)
.then(() => console.log('DB Connection successful '))
.catch((err: any) => console.error('Errore durante la connessione al database:', err));

// Middleware per gestire le rotte degli utenti
app.use('/api/users', userRoutes);

// Gestione degli errori globali
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Qualcosa è andato storto sul server!');
});

// Avvio del server
const port: number = parseInt(process.env.PORT as string, 10) || 8080;
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
