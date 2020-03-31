const Router = require('@koa/router');

const router = new Router();

const {
  getCities,
  getJNECost,
  getPOSCost,
  getTIKICost
} = require('../controllers/rajaOngkirController');

const BASE_URL = '/api/v1/raja-ongkir';

router.get(`${BASE_URL}/cities`, getCities);
router.get(`${BASE_URL}/:id/costs/jne`, getJNECost);
router.get(`${BASE_URL}/:id/costs/pos`, getPOSCost);
router.get(`${BASE_URL}/:id/costs/tiki`, getTIKICost);

module.exports = router;
