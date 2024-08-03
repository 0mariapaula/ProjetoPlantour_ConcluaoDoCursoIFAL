// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Caminho atualizado

router.post('/register', userController.registerUser);

module.exports = router;
