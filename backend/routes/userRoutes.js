const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { fullName, email, phone, cpf, password } = req.body;

  try {
    const user = await User.create({ fullName, email, phone, cpf, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
