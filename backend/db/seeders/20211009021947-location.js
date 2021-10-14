"use strict";
const faker = require("faker");


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          street: faker.address.streetAddress(),
          city: "Beacon Hill",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: faker.address.streetAddress(),
          city: "Beacon Hill",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: faker.address.streetAddress(),
          city: "Boston",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: faker.address.streetAddress(),
          city: "Boston",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: faker.address.streetAddress(),
          city: "Cambridge",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: faker.address.streetAddress(),
          city: "Cambridge",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(), 
        },
        {
          street: faker.address.streetAddress(),
          city: "Back Bay",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(), 
        },
        {
          street: faker.address.streetAddress(),
          city: "Back Bay",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(), 
        },
        {
          street: faker.address.streetAddress(),
          city: "North End",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(), 
        },
        {
          street: faker.address.streetAddress(),
          city: "North End",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(), 
        },
        {
          street: faker.address.streetAddress(),
          city: "South End",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(), 
        },
        {
          street: faker.address.streetAddress(),
          city: "South End",
          state: faker.address.state(),
          country: faker.address.country(),
          zip_code:faker.address.zipCodeByState("ma"),
          latitude: faker.address.latitude(30.361145,42.361145),
          longtitude: faker.address.longitude(-73, -70),
          createdAt: new Date(),
          updatedAt: new Date(), 
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
