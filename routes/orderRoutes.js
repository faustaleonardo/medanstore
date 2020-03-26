const Router = require('koa-router');

const { requireLogin } = require('../middlewares/require');

const {
  getOrders,
  getOrder,
  createOrder
} = require('../controllers/orderController');

const router = new Router();

const BASE_URL = '/api/v1/orders';

router.get(`${BASE_URL}`, requireLogin, getOrders);
router.get(`${BASE_URL}/:id`, requireLogin, getOrder);
router.post(`${BASE_URL}`, requireLogin, createOrder);

module.exports = router;
