const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tours');
const userRouter = require('./routes/users');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(`${__dirname}/public`));

app.use(express.json());

//2. Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
