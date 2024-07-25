const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('plantour_db', 'root', '33241858', {
  host: 'localhost',
  dialect: 'mariadb'
});

module.exports = sequelize;
