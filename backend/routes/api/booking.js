// Create a router here
const express = require("express");
const router = express.Router();
// Since we're doing database stuff, you'll want some kind of asyncHandler
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const {requireAuth} = require("../../utils/auth");
// Take a second to import the database stuff you'll need
const { Booking,Listing, User } = require("../../db/models");
// Here's where you'd also import other middleware
const validateToBook = [
  check("user_id")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid user."),
  check("listing_id")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an existing listing."),
  check("end_date").custom((value, { req }) => {
    if (new Date(value) <= new Date(req.body.start_date)) {
      throw new Error("End date must be after start date.");
    }
  }),
  handleValidationErrors,
];
// validateToBook,
//create a booking
router.post(
  "",
  requireAuth,
  asyncHandler(async function (req, res) {
    const booking = await Booking.create(req.body);
    return res.json(booking);
  })
);


router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const booking = await Booking.findByPk(parseInt(req.params.id),{
      include:[Listing,User]
    });
    return res.json(booking);
  })
)
// delete a booking
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const booking = await Booking.findByPk(parseInt(req.params.id, 10));
    booking.destroy();
    return res.json();
  })
);

// Remember to export the router, too
module.exports = router;
