// backend/controllers/companyController.js
const companyModel = require('../models/companyModel');

const registerCompany = (req, res) => {
  const company = req.body;
  companyModel.createCompany(company, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao cadastrar empresa', error: err });
    } else {
      res.status(201).json({ message: 'Empresa cadastrada com sucesso!' });
    }
  });
};

module.exports = {
  registerCompany
};
