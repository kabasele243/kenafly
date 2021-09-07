const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tours');
const userRouter = require('./routes/users');


const app = express();

//1. Middleware
app.use(morgan('dev'))
app.use(express.json());
app.use((req, res, next) => { console.log('Hello From The Middleware') 
    next()
})

//2. Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//4. Start Server
const port = 8000;
app.listen(port, () => {
    console.log(`App Start on Port ${port}`)
})