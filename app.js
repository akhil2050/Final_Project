var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./APP_SERVER/models/db');

const userRouter = require('./APP_API/routes/user');
const recipeRouter = require('./APP_API/routes/recipe');
const chefRouter = require('./APP_API/routes/chef');
const foodRouter = require('./APP_API/routes/food');
const locatorRouter = require('./APP_API/routes/locator');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'APP_PUBLIC'))); 

app.all('/*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
})

app.use('/api', userRouter);
app.use('/api', recipeRouter);
app.use('/api', chefRouter);
app.use('/api', foodRouter);
app.use('/api', locatorRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
