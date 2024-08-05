const Company = require('../models/companyModel');
const bcrypt = require('bcryptjs');

exports.createCompany = async (req, res) => {
  try {
    const { cnpj, email, telefone, endereco, nome, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);

    const company = await Company.create({
      cnpj,
      email,
      telefone,
      endereco,
      nome,
      senha: hashedPassword,
    });

    res.status(201).json({ message: 'Empresa criada com sucesso!', company });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
