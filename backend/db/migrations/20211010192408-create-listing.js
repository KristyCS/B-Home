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
        allowNull: false,
        type: Sequelize.TEXT
      },
      space: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      neighborhood_overview: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      transit: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      access: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      house_rules: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      property_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      room_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      accommodates: {
        allowNull: false,
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
      bed_type: {
        allowNull: false,
        type: Sequelize.STRING
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
        allowNull: false,
        type: Sequelize.INTEGER
      },
      monthly_price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      security_deposit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cleaning_fee: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      guests_included: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      extra_people: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      minimum_nights: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cancellation_policy: {
        allowNull: false,
        type: Sequelize.STRING
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