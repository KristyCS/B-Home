'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: DataTypes.INTEGER,
    listing_id: DataTypes.INTEGER,
    comments: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User,{foreignKey:"user_id"});
    Review.belongsTo(models.Listing,{foreignKey:"listing_id"});
  };
  return Review;
};