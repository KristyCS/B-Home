// Create a router here
const express = require("express");
const router = express.Router();
// Since we're doing database stuff, you'll want some kind of asyncHandler
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

// Take a second to import the database stuff you'll need
const { Review,User } = require("../../db/models");
const validateToReview = [
  check("comments")
    .exists({ checkFalsy: true })
    .withMessage("Comments can not be empty."),
  handleValidationErrors,
];

// Here's where you'd also import other middleware

//create a review
router.post(
  "",
  validateToReview,
  asyncHandler(async function (req, res) {
    const review = await Review.create(req.body);
    const user = await User.findByPk(review.user_id);
    review.dataValues.User = user;
    return res.json(review);
  })
);

// delete a review
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const review = await Review.findByPk(parseInt(req.params.id, 10));
    review.destroy();
    return res.json();
  })
);

// update a review
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const { comments } = req.body;
    const review = await Review.findByPk(parseInt(req.params.id, 10),{
      include:[User]
    });
    await review.update({
      comments,
    });
    return res.json(review);
  })
);

// Remember to export the router, too
module.exports = router;
