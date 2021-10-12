'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    host_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    summary: DataTypes.TEXT,
    description: DataTypes.TEXT,
    transit: DataTypes.TEXT,
    house_rules: DataTypes.TEXT,
    property_type: DataTypes.STRING,
    room_type: DataTypes.STRING,
    accommodates: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    amenities: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    weekly_price: DataTypes.INTEGER,
    security_deposit: DataTypes.INTEGER,
    cleaning_fee: DataTypes.INTEGER,
    extra_people: DataTypes.INTEGER,
    minimum_nights: DataTypes.INTEGER
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.hasOne(models.Location, {foreignKey:"id"});
    Listing.hasOne(models.Host, {foreignKey:"id"});
    Listing.hasMany(models.Review, {foreignKey: "listing_id"});
    Listing.hasMany(models.Booking, {foreignKey: "listing_id"});
    Listing.hasMany(models.Image, {foreignKey: "listing_id"});
  };
  return Listing;
};