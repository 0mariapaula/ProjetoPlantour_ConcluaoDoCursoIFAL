// backend/models/companyModel.js
const connection = require('../config/database');

// Função para criar uma nova empresa
const createCompany = (company, callback) => {
  const query = `INSERT INTO companies (cnpj, email, telefone, endereco, nome, senha) VALUES (?, ?, ?, ?, ?, ?)`;
  connection.query(query, [company.cnpj, company.email, company.telefone, company.endereco, company.nome, company.senha], callback);
};

module.exports = {
  createCompany
};
