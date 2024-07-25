// Contrato_Passeio.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Contrato_Passeio = sequelize.define('Contrato_Passeio', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  nota: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Contrato_Passeio;
