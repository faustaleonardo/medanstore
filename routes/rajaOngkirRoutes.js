const Router = require('@koa/router');

const router = new Router();

const { getCities, getCosts } = require('../controllers/rajaOngkirController');

const BASE_URL = '/api/v1/raja-ongkir';

router.get(`${BASE_URL}/cities`, getCities);
router.get(`${BASE_URL}/:id/costs`, getCosts);

module.exports = router;
