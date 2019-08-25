const express = require('express');
const app = express();
const logger = require('morgan');

const indexRouter = require('./routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.json({ data: 'hello world' });
});
app.use('/', indexRouter);

app.use(function(err, req, res, next) {
  if (err.code >= 500) {
    res.status(500).json(err);
  } else {
    res.status(404).json(err);
  }
});

module.exports = app;
