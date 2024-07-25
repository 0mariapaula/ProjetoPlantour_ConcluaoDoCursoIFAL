const express = require('express');
const Company = require('../models/Company');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { cnpj, email, phone, address, name, password } = req.body;

  try {
    const company = await Company.create({ cnpj, email, phone, address, name, password });
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
