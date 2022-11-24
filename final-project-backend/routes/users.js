const router = require('express').Router();

const { getCurrentUser, getUsers } = require('../controllerss/users');

// route definitions
router.get('/', getUsers); // delete this after checking
router.get('/me', getCurrentUser);

module.exports = router;
