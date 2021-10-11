const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Listing, Booking, Review } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();
const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];
// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

//get all bookings of a specified user
router.get(
  "/:id((\\d+))/bookings",
  asyncHandler(async function (req, res) {
    const user_id = parseInt(req.params.id, 10);
    const bookings = await Booking.findAll({
      where: {
        user_id,
      },
      include: [Listing, User],
    });
    return res.json(bookings);
  })
);

//get all reviews of a specified user
router.get(
  "/:id((\\d+))/reviews",
  asyncHandler(async function (req, res) {
    const user_id = parseInt(req.params.id, 10);
    const reviews = await Review.findAll({
      where: {
        user_id,
      },
      include: [Listing, User],
    });
    return res.json(reviews);
  })
);








module.exports = router;
