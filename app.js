const express = require('express');
const morgan = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// Middlewares
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.static(`${__dirname}/public`))
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})
app.use(morgan('dev'))

// Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;