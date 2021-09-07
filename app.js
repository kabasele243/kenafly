const express = require('express');
const fs = require('fs')

const app = express();

app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours', (req, res) => {
    
    res
    .status(200)
    .json({
        status: 'success',
        result : tours.length,
        data: {
            tours
        }
    })
})

app.get('/api/v1/tours/:id', (req, res) => {

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
})

app.patch('/api/v1/tours/:id', (req, res) => {

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
})

app.delete('/api/v1/tours/:id', (req, res) => {
    res.status(204).json({
        status: 'fail',
        data: null
    })
})

app.post('/api/v1/tours', (req, res) => {
    console.log(req.body)
})

const port = 8000;
app.listen(port, () => {
    console.log(`App Start on Port ${port}`)
})