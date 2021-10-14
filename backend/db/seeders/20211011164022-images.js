"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Images",
      [  
        {
          listing_id: 1,
          img_url: "https://www.houseplans.net/uploads/plans/2825/elevations/25836-768.jpg?v=0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 1,
          img_url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 2,
          img_url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 2,
          img_url: "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 3,
          img_url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 3,
          img_url: "https://images.unsplash.com/photo-1552242718-c5360894aecd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 4,
          img_url: "https://images.unsplash.com/photo-1610123172763-1f587473048f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2801&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 5,
          img_url: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1709&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 5,
          img_url: "https://images.unsplash.com/photo-1551105378-78e609e1d468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

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
