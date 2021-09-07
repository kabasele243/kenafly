const express = require('express');
const tour = require('../controller/tours');

const router = express.Router();

router
  .route('/')
  .get(tour.getAllTours)
  .post(tour.createTour);

router
  .route('/:id')
  .get(tour.getTour)
  .patch(tour.updateTour)
  .delete(tour.deleteTour);


module.exports = router;