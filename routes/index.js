const express = require('express');
const router = express.Router();

const testRouter = require('./test');
const userRouter = require('./users');

router.use('/users', userRouter);
router.use('/tests', testRouter);

module.exports = router;
