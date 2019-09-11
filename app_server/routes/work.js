const express = require('express');
const router = express.Router();
const controller = require('../controllers/work');

/* GET users listing. */
router.get('/', controller.work);

/*practice*/
router.get('/cool', controller.cool);

module.exports = router;
