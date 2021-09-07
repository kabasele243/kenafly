const fs = require('fs')

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );

exports.checkID = (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);
  
    if (req.params.id * 1 > tours.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
      });
    }
    next();
};

exports.getAllTours = (req, res) => {
    
    res
    .status(200)
    .json({
        status: 'success',
        result : tours.length,
        data: {
            tours
        }
    })
}

exports.getTour = (req, res) => {

    const id = parseInt(req.params.id);
    const tour = tours.find(el => el.id === id);

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
}

exports.updateTour = (req, res) => {

    const id = parseInt(req.params.id);
    const tour = tours.find(el => el.id === id);

    res.status(200).json({
        status: 'success',
        data: {
            tour : '<Updated Tour Here...>'
        }
    })
}

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'fail',
        data: null
    })
}

exports.createTour = (req, res) => {

    res.send('New Tour Created')
}