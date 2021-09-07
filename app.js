const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

//1. Middleware
app.use(morgan('dev'))
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

// 2. Route Handlers
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

app.use((req, res, next) => {
    console.log('Hello From The Middleware')
    next()

})

const getAllUsers = (req, res) => {
    res.send('All User')
}

const getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            user : 'This is A User'
        }
    })
}

const createUser = (req, res) => {
    res.status(201).json({
        status: 'success',
        data: {
            user : 'This is A User'
        }
    })
}

const updateUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            user : 'This is An Update User'
        }
    })
}
const deleteUser = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
}

//3. Routes

const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter
  .route('/')
  .get(getAllTours)
  .post(createTour);

tourRouter
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

userRouter
  .route('/')
  .get(getAllUsers)
  .post(createUser);

userRouter
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser)

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//4. Start Server
const port = 8000;
app.listen(port, () => {
    console.log(`App Start on Port ${port}`)
})