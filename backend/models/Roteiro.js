// Roteiro.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Roteiro = sequelize.define('Roteiro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  dt_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dt_fim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Roteiro;
