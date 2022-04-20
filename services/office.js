const { Op } = require('sequelize');
const Office = require('../models/office');

async function findOffices(start = 0, size = 10, keyword = '') {
  const query = {};
  if (keyword) {
    query.where = {
      location: {
        [Op.substring]: keyword,
      },
    };
  }
  const result = await Office.findAndCountAll({
    ...query,
    offset: start,
    limit: size,
  });

  return {
    count: result.count,
    offices: result.rows.map((office) => office.toJSON()),
  };
}

module.exports = {
  findOffices,
};
