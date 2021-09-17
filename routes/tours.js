const express = require('express');
const tour = require('../controller/tours');
const auth = require('../controller/auth');

const router = express.Router();

router.route('/top-5-cheap').get(tour.aliasTopTours, tour.getAllTours);

router.route('/tour-stats').get(tour.getTourStats);
router.route('/monthly-plan/:year').get(tour.getMonthlyPlan);

router.route('/').get(auth.protect, tour.getAllTours).post(tour.createTour);

router.route('/tour-stats').get(tour.getTourStats);
router.route('/monthly-plan/:year').get(tour.getMonthlyPlan);

router
  .route('/:id')
  .get(tour.getTour)
  .patch(tour.updateTour)
  .delete(tour.deleteTour);

module.exports = router;
