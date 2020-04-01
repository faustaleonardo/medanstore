const Router = require('@koa/router');

const { requireLogin } = require('../middlewares/require');

const {
  getOrders,
  getOrdersAndItems,
  getOrder,
  createOrder
} = require('../controllers/orderController');

const router = new Router();

const BASE_URL = '/api/v1/orders';

router.get(`${BASE_URL}`, requireLogin, getOrders);
router.get(`${BASE_URL}/:orderId/items`, requireLogin, getOrdersAndItems);
router.get(`${BASE_URL}/:orderId`, requireLogin, getOrder);
router.post(`${BASE_URL}`, requireLogin, createOrder);

module.exports = router;
