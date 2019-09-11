const express = require('express');
const router = express.Router();

const userRouter = require('./users');
const blogRouter = require('./blog');
const workRouter = require('./work');

router.use('/users', userRouter);
router.use('/blog', blogRouter);
router.use('/work', workRouter);

module.exports = router;
