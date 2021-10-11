'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    host_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    summary: DataTypes.TEXT,
    space: DataTypes.TEXT,
    description: DataTypes.TEXT,
    neighborhood_overview: DataTypes.TEXT,
    transit: DataTypes.TEXT,
    access: DataTypes.TEXT,
    house_rules: DataTypes.TEXT,
    property_type: DataTypes.STRING,
    room_type: DataTypes.STRING,
    accommodates: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    bed_type: DataTypes.STRING,
    amenities: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    weekly_price: DataTypes.INTEGER,
    monthly_price: DataTypes.INTEGER,
    security_deposit: DataTypes.INTEGER,
    cleaning_fee: DataTypes.INTEGER,
    guests_included: DataTypes.INTEGER,
    extra_people: DataTypes.INTEGER,
    minimum_nights: DataTypes.INTEGER,
    cancellation_policy: DataTypes.STRING
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.hasOne(models.Location, {foreignKey:"location_id"});
  };
  return Listing;
};