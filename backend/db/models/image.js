'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    listing_id: DataTypes.INTEGER,
    img_url: DataTypes.TEXT
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Listing, {foreignKey:"listing_id"})
  };
  return Image;
};