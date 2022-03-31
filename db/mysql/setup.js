const { getSequelize } = require('./connection');
const Office = require('../../models/office');

async function setup() {
  try {
    const sequelize = getSequelize();
    await sequelize.drop();
    await Office.sync();
    console.log('DB setup completed');
  } catch (error) {
    console.error(error);
    console.error('DB setup failed');
  }
  process.exit();
}

setup();
