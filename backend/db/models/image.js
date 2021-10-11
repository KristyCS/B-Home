'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    listing_id: DataTypes.INTEGER,
    img_url: DataTypes.TEXT
  }, {});
  image.associate = function(models) {
    // associations can be defined here
  };
  return image;
};