'use strict';
module.exports = (sequelize, DataTypes) => {
  const Host = sequelize.define('Host', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    about: DataTypes.TEXT,
    host_since: DataTypes.DATE
  }, {});
  Host.associate = function(models) {
    Host.belongsTo(models.User, {
      foreignKey: "user_id"
    });
  };
  return Host;
};