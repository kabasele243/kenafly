const express = require('express');
const fs = require('fs')

const app = express();

app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

const getAllTours = (req, res) => {
    
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

const getTour = (req, res) => {

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

const updateTour = (req, res) => {

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

const deleteTour = (req, res) => {
    res.status(204).json({
        status: 'fail',
        data: null
    })
}

const createTour = (req, res) => {
    
    res.send('New Tour Created')
}

app
  .route('/api/v1/tours')
  .get(getAllTours)
  .post(createTour);

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour)

const port = 8000;
app.listen(port, () => {
    console.log(`App Start on Port ${port}`)
})