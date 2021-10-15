"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Hosts",
      [
        {
          user_id: 1,
          name: faker.name.firstName()+", "+faker.name.lastName(),
          about: "111111111111111",
          host_since: faker.date.between('2009-01-01', '2021-01-05'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          name: faker.name.firstName()+", "+faker.name.lastName(),
          about: "222222222222222",
          host_since: faker.date.between('2009-01-01', '2021-01-05'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          name: faker.name.firstName()+", "+faker.name.lastName(),
          about: "333333333333333",
          host_since: faker.date.between('2009-01-01', '2021-01-05'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          name: faker.name.firstName()+", "+faker.name.lastName(),
          about: "4444444444444444",
          host_since: faker.date.between('2009-01-01', '2021-01-05'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          name: faker.name.firstName()+", "+faker.name.lastName(),
          about: "555555555555555555",
          host_since: faker.date.between('2009-01-01', '2021-01-05'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          name: faker.name.firstName()+", "+faker.name.lastName(),
          about: "666666666666666666",
          host_since: faker.date.between('2009-01-01', '2021-01-05'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          name: faker.name.firstName()+", "+faker.name.lastName(),
          about: "7777777777777777777",
          host_since: faker.date.between('2009-01-01', '2021-01-05'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          name: faker.name.firstName()+", "+faker.name.lastName(),
          about: "8888888888888888888",
          host_since: faker.date.between('2009-01-01', '2021-01-05'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 9,
          name: faker.name.firstName()+", "+faker.name.lastName(),
          about: "99999999999999999999",
          host_since: faker.date.between('2009-01-01', '2021-01-05'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 10,
          name: faker.name.firstName()+", "+faker.name.lastName(),
          about: "10000000000000000000",
          host_since: faker.date.between('2009-01-01', '2021-01-05'),
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
