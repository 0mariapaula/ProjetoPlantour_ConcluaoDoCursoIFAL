const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('plantour_db', 'root', 'plantour', {
  host: 'localhost',
  dialect: 'mariadb'
});

module.exports = sequelize;
