const express = require('express');
const user = require('../controller/users');
const auth = require('../controller/auth');

const router = express.Router();

router.post('/signup', auth.signup);
router.post('/login', auth.login);

router.route('/').get(user.getAllUsers).post(user.createUser);

router
  .route('/:id')
  .get(user.getUser)
  .patch(user.updateUser)
  .delete(user.deleteUser);

module.exports = router;
