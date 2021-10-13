// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listing.js');
const bookingsRouter = require('./booking.js');
const reviewssRouter = require('./review.js')
const mapsRouter = require('./maps');
router.use('/session', sessionRouter);
router.use('/listings', listingsRouter);
router.use('/users', usersRouter);
router.use('/bookings', bookingsRouter);
router.use('/reviews', reviewssRouter);
router.use('/maps', mapsRouter);


module.exports = router;