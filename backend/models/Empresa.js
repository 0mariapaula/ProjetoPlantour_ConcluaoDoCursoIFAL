// Empresa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Empresa = sequelize.define('Empresa', {
  cnpj: {
    type: DataTypes.CHAR(14),
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
  endereco: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.CHAR(15),
    allowNull: false,
  },
});

module.exports = Empresa;
