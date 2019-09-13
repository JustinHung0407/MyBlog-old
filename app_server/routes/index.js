const express = require('express');
const router = express.Router();
const Post = require('../models/blog.js');

const userRouter = require('./users');
const workRouter = require('./work');
const contactRouter = require('./contact');

router.use('/users', userRouter);
router.use('/work', workRouter);
router.use('/contact', contactRouter);

router.get('/downloadcv', (req, res, next) => {
  res.download('././public/files/洪詠豐.pdf');
});

router.get('/jade', (req, res, next) => {
  res.render('index');
});

module.exports = router;
