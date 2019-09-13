const express = require('express');
const router = express.Router();
const controller = require('../controllers/conatct');

/* GET users listing. */
//router.get('/', controller.blog);

router.post('/post', controller.post);
router.get('/get', controller.get);
router.get('/:postId', controller.read);
router.delete('/:postId', controller.delete);
router.patch('/:postId', controller.patch);

/*practice
router.post('/post', controller.post);*/

module.exports = router;
