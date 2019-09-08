const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');

const indexRouter = require('./app_server/routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*app.get('/', function(req, res) {
  res.json({ data: 'hello world' });
});*/
app.use('/', indexRouter);

//link index.html
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html', function(err) {
    if (err) res.send(404);
  });
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, '/public')));
app.use('/js', express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/public')));

app.use(function(err, req, res, next) {
  if (err.code >= 500) {
    res.status(500).json(err);
  } else {
    res.status(404).json(err);
  }
});

module.exports = app;
