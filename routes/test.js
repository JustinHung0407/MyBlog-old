const express = require('express');
const router = express.Router();
const controller = require('../controllers/tests');

/* GET users listing. */
router.get('/', controller.test);

/*practice*/
router.get('/cool', controller.cool);

module.exports = router;
