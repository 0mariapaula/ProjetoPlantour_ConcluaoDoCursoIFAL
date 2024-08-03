const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.post('/register', companyController.registerCompany);

module.exports = router;
