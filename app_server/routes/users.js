const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router
  .get('/', controller.getUsers)
  .post('/', controller.postUsers)
  .put('/', controller.putUsers)
  .delete('/', controller.delUsers)
  .get('/err', controller.err);

module.exports = router;
