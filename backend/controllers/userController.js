const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
  try {
    const { nome_completo, email, telefone, cpf, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);

    const user = await User.create({
      nome_completo,
      email,
      telefone,
      cpf,
      senha: hashedPassword,
    });

    res.status(201).json({ message: 'Usuário criado com sucesso!', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
