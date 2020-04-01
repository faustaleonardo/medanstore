const Router = require('@koa/router');

const { requireLogin } = require('../middlewares/require');

const {
  getPayments,
  getPayment,
  finishPayment,
  createPayment,
  updatePayment
} = require('../controllers/PaymentController');

const router = new Router();

const BASE_URL = '/api/v1/payments';

router.get(`${BASE_URL}`, requireLogin, getPayments);
router.get(`${BASE_URL}/:id`, requireLogin, getPayment);
router.post(`${BASE_URL}/:orderId`, requireLogin, createPayment);
router.patch(`${BASE_URL}/:orderId/stripe`, requireLogin, finishPayment);
router.patch(`${BASE_URL}/:orderId`, requireLogin, updatePayment);

module.exports = router;
