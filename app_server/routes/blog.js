const express = require('express');
const router = express.Router();
const controller = require('../controllers/blog');

/* GET users listing. */
router.get('/', controller.blog);

/*practice*/
router.get('/cool', controller.cool);

module.exports = router;
