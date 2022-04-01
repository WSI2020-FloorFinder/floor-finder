const { Sequelize } = require('sequelize');

let sequelize = null;

function getSequelize() {
  if (!sequelize) {
    sequelize = new Sequelize('floor_finder', 'dev', process.env.DB_PASSWORD, {
      host: '127.0.0.1',
      dialect: 'mysql',
    });
  }
  return sequelize;
}

module.exports = {
  getSequelize,
};
