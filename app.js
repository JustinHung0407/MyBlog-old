const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

let indexRouter = require('./app_server/routes/index');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// View engine setup.
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

//call static file from public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connect to DB!'),
);

app.use(function(err, req, res, next) {
  if (err.code >= 500) {
    res.status(500).json(err);
  } else {
    res.status(404).json(err);
  }
});

module.exports = app;
