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
    officeName: {
      type: DataTypes.STRING(100),
    },
    description: {
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING(10),
    },
    openHours: {
      type: DataTypes.STRING(100),
    },
    imagePath: {
      type: DataTypes.STRING(100),
    },
  },
  {
    sequelize: getSequelize(),
    modelName: 'Office',
    freezeTableName: true,
  }
);

module.exports = Office;
