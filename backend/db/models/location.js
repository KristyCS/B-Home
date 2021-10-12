'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longtitude: DataTypes.DECIMAL
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    // Location.belongsTo(models.Listing,{foreignKey:"location_id"});
  };
  return Location;
};