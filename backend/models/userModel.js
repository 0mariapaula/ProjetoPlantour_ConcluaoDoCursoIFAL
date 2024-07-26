// backend/models/userModel.js
const connection = require('../config/database');

// Função para criar um novo usuário
const createUser = (user, callback) => {
  const query = `INSERT INTO users (nome, email, telefone, cpf, senha) VALUES (?, ?, ?, ?, ?)`;
  connection.query(query, [user.nome, user.email, user.telefone, user.cpf, user.senha], callback);
};

module.exports = {
  createUser
};
