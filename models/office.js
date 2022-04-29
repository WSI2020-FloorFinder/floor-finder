const { DataTypes, Model } = require('sequelize');
const { getSequelize } = require('../db/mysql/connection');

class Office extends Model {}

Office.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    description: {
      type: DataTypes.TEXT,
    },
    building: {
      type: DataTypes.STRING(100),
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(200),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    phone: {
      type: DataTypes.STRING(50),
    },
  },
  {
    sequelize: getSequelize(),
    modelName: 'Office',
    freezeTableName: true,
  }
);

module.exports = Office;
