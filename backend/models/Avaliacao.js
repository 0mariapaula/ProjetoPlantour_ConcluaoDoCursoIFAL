// Avaliacao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Avaliacao = sequelize.define('Avaliacao', {
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

module.exports = Avaliacao;
