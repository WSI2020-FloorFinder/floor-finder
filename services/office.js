const { Op } = require('sequelize');
const Office = require('../models/office');

async function findOffices(
  start = 0,
  size = 100,
  building = '',
  keyword = '',
  fields = []
) {
  const query = {};
  const allowedFields = [
    'name',
    'location',
    'building',
    'description',
    'email',
    'phone',
  ];

  if (keyword) {
    let searchFields = allowedFields.filter((field) => fields.includes(field));
    if (!searchFields.length) {
      searchFields = allowedFields;
    }

    console.log(searchFields);
    if (searchFields.length === 1) {
      query.where = {
        [searchFields[0]]: {
          [Op.substring]: keyword,
        },
      };
    } else {
      query.where = {
        [Op.or]: searchFields.map((field) => ({
          [field]: {
            [Op.substring]: keyword,
          },
        })),
      };
    }
  }

  if (building) {
    if (query.where) {
      query.where = {
        [Op.and]: [
          {
            building: {
              [Op.eq]: building,
            },
          },
          query.where,
        ],
      };
    } else {
      query.where = {
        building: {
          [Op.eq]: building,
        },
      };
    }
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
