const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');

const indexRouter = require('./app_server/routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//call static file from public
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', indexRouter);

app.get('/blog', function(req, res) {
  res.render('blog');
});

//link index.html
/*app.get('/', function(req, res) {
  res.sendfile(path.resolve(__dirname + '/public/index.html'));
});

app.get('/blog', function(req, res) {
  res.sendfile(path.resolve(__dirname + '/public/blog.html'));
});*/

app.use(function(err, req, res, next) {
  if (err.code >= 500) {
    res.status(500).json(err);
  } else {
    res.status(404).json(err);
  }
});

module.exports = app;
