const Router = require('koa-router');
const passport = require('koa-passport');

const {
  signup,
  login,
  logout,
  error
} = require('../controllers/authController');

const router = new Router();
const BASE_URL = '/api/v1/auth';

router.post(`${BASE_URL}/signup`, signup);

router.post(
  `${BASE_URL}/login`,
  passport.authenticate('local', { failureRedirect: `${BASE_URL}/error` }),
  login
);

router.get(`${BASE_URL}/logout`, logout);

router.get(`${BASE_URL}/error`, error);

module.exports = router;
