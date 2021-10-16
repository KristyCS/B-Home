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
          img_url:
            "https://www.houseplans.net/uploads/plans/2825/elevations/25836-768.jpg?v=0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 1,
          img_url:
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 1,
          img_url:
            "https://media.istockphoto.com/photos/green-living-room-picture-id1283757644?b=1&k=20&m=1283757644&s=170667a&w=0&h=s108p8O1L6XHfPW8yU90p4sLs5GSnFnY49o-Mg7YkPU=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 1,
          img_url:
            "https://media.istockphoto.com/photos/big-elephant-inside-a-living-room-picture-id1307373974?b=1&k=20&m=1307373974&s=170667a&w=0&h=9PIWXU595ZqW9Nx0J_rPSGNowuoXW4PcsR6kCUWon0U=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 1,
          img_url:
            "https://media.istockphoto.com/photos/rendering-simple-modern-living-room-sofa-with-coffee-table-with-green-picture-id1214096103?k=20&m=1214096103&s=612x612&w=0&h=wTV45BrymI0YfhiEEgb7kCyjqeDjXFLFKx9PtzkaiJE=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 1,
          img_url:
            "https://media.istockphoto.com/photos/white-living-room-with-beige-sofa-and-poster-picture-id1175996027?k=20&m=1175996027&s=612x612&w=0&h=T151kTy_CCRBl8OtFGxhUlQ8rgjz7VllVM0gEZGCT3g=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 2,
          img_url:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 2,
          img_url:
            "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 3,
          img_url:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 3,
          img_url:
            "https://images.unsplash.com/photo-1552242718-c5360894aecd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 4,
          img_url:
            "https://images.unsplash.com/photo-1610123172763-1f587473048f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2801&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 4,
          img_url:
            "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 5,
          img_url:
            "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1709&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 5,
          img_url:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 6,
          img_url:
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 6,
          img_url:
            "https://images.unsplash.com/photo-1486946255434-2466348c2166?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 7,
          img_url:
            "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 7,
          img_url:
            "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 8,
          img_url:
            "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 8,
          img_url:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 9,
          img_url:
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 9,
          img_url:
            "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 10,
          img_url:
            "https://media.istockphoto.com/photos/wood-empty-surface-and-living-room-as-background-picture-id1266150764?b=1&k=20&m=1266150764&s=170667a&w=0&h=9T5ckuhpuCpDpN9hBBebgvMMkFmFFABiuDN4hxqr_6Q=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 10,
          img_url:
            "https://media.istockphoto.com/photos/wood-empty-surface-and-living-room-as-background-picture-id1266150764?b=1&k=20&m=1266150764&s=170667a&w=0&h=9T5ckuhpuCpDpN9hBBebgvMMkFmFFABiuDN4hxqr_6Q=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 11,
          img_url:
            "https://images.unsplash.com/photo-1552242718-c5360894aecd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 11,
          img_url:
            "https://images.unsplash.com/photo-1610123172763-1f587473048f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2801&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 12,
          img_url:
            "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listing_id: 12,
          img_url:
            "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1709&q=80",
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
