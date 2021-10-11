'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    user_id: DataTypes.INTEGER,
    listing_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    price: DataTypes.INTEGER
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
  };
  return booking;
};