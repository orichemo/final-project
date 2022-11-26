const router = require('express').Router();
const { login, createUser } = require('../controllerss/users');
const auth = require('../middleware/auth');
const userRouter = require('./users');
const articleRouter = require('./articles');
const NotFoundError = require('../errors/not-found-error');

const { validateLogin, validateCreateUser } = require('../middleware/validator');

router.post('/signin', validateLogin, login);// , validateLogin
router.post('/signup', validateCreateUser, createUser); // , validateCreateUser

// middleware
router.use(auth);

router.use('/users', userRouter);
router.use('/articles', articleRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError('No page found for the specified route'));
});

module.exports = router;
