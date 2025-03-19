const express =require('express');
const router=express.Router();

// Importa la funzione dal controller
const { registerUser } = require('../controllers/userController');

// Rotta POST per registrare un nuovo utente
router.post('/register', registerUser);

module.exports = router;