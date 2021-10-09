'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        }
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        }
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1, 20],
        }
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1, 50],
        }
      },
      zip_code: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1, 15],
        }
      },
      latitude: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      longtitude: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Locations');
  }
};