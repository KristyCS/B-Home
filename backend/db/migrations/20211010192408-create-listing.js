'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      host_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Hosts",
          },
        },
      },
      location_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Locations",
          },
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      transit: {
        type: Sequelize.TEXT
      },
      house_rules: {
        type: Sequelize.TEXT
      },
      property_type: {
        type: Sequelize.STRING,
      },
      room_type: {
        type: Sequelize.STRING,
      },
      accommodates: {
        type: Sequelize.INTEGER
      },
      bathrooms: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      beds: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      amenities: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      weekly_price: {
        type: Sequelize.INTEGER
      },
      security_deposit: {
        type: Sequelize.INTEGER
      },
      cleaning_fee: {
        type: Sequelize.INTEGER
      },
      extra_people: {
        type: Sequelize.INTEGER
      },
      minimum_nights: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Listings');
  }
};