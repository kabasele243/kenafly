const fs = require('fs')

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );

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

    if(!tour){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
          });
    }
  
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

    if(!tour){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid Id'
        })
    }

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