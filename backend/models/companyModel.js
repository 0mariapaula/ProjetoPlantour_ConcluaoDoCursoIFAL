const connection = require('../config/database');

const createCompany = (company, callback) => {
  const query = `INSERT INTO usuarios_empresas (cnpj, email, telefone, endereco, nome, senha) VALUES (?, ?, ?, ?, ?, ?)`; // Use 'nome_empresa'
  connection.query(query, [company.cnpj, company.email, company.telefone, company.endereco, company.nome_empresa, company.senha], callback);
};

module.exports = {
  createCompany
};
