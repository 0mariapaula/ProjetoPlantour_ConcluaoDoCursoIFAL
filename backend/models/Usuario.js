// Usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Importe a instância do Sequelize

const Usuario = sequelize.define('Usuario', {
  cpf: {
    type: DataTypes.CHAR(11),
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.CHAR(15),
    allowNull: false,
  },
});

module.exports = Usuario;
