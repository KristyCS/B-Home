'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    user_id: DataTypes.INTEGER,
    listing_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    price: DataTypes.INTEGER
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User,{foreignKey:"user_id"});
    Booking.belongsTo(models.Listing,{foreignKey:"listing_id"});
  };
  return Booking;
};