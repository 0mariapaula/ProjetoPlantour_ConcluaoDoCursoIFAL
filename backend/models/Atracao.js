// Atracao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Atracao = sequelize.define('Atracao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = Atracao;
