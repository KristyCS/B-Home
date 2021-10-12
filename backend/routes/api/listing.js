// Create a router here
const express = require("express");
const router = express.Router();
// Since we're doing database stuff, you'll want some kind of asyncHandler
const asyncHandler = require("express-async-handler");

// Take a second to import the database stuff you'll need
const { Host, Listing, User, Review, Location } = require("../../db/models");
// Here's where you'd also import other middleware

// Create the API route here
router.get(
  "",
  asyncHandler(async (req, res) => {
    const listings = await Listing.findAll({
      include: [Host, Location],
    });
    res.json(listings);
  })
);

//get all reviews of a specified listing
router.get(
  "/:id((\\d+))/reviews",
  asyncHandler(async function (req, res) {
    const listing_id = parseInt(req.params.id, 10);
    const reviews = await Review.findAll({
      where: {
        listing_id,
      },
      include: [Listing, User],
    });
    return res.json(reviews);
  })
);

// Remember to export the router, too
module.exports = router;
