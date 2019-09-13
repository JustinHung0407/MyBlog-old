const express = require('express');
const router = express.Router();

const userRouter = require('./users');
const blogRouter = require('./blog');
const workRouter = require('./work');

router.use('/users', userRouter);
router.use('/blog', blogRouter);
router.use('/work', workRouter);

router.get('/downloadcv', (req, res, next) => {
  res.download('././public/files/洪詠豐.pdf');
});

router.get('/jade', (req, res, next) => {
  res.render('index');
});

module.exports = router;
