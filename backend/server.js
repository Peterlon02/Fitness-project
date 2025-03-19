//Importazione dei moduli necessari
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//Creazione dell'app Express
const app = express();
const port = 5000;

// Configurazione .env
dotenv.config();

// Connessione al database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rotta di base per verificare che il server funzioni
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Importazione delle rotte
const userRoutes= require('./routes/userRoutes') 

// Uso delle rotte
app.use('/api/users', userRoutes)

// Avvia il server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});