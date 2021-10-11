'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    user_id: DataTypes.INTEGER,
    listing_id: DataTypes.INTEGER,
    comments: DataTypes.TEXT
  }, {});
  review.associate = function(models) {
    // associations can be defined here
  };
  return review;
};