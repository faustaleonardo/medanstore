const Router = require('@koa/router');

const { requireLogin, requireAdmin } = require('../middlewares/require');

const {
  getVouchers,
  getVoucher,
  createVoucher,
  updateVoucher,
  deleteVoucher
} = require('../controllers/VoucherController');

const router = new Router();

const BASE_URL = '/api/v1/vouchers';

router.get(`${BASE_URL}`, getVouchers);
router.get(`${BASE_URL}/:code`, getVoucher);
router.post(`${BASE_URL}`, requireLogin, requireAdmin, createVoucher);
router.patch(`${BASE_URL}/:id`, requireLogin, requireAdmin, updateVoucher);
router.delete(`${BASE_URL}/:id`, requireLogin, requireAdmin, deleteVoucher);

module.exports = router;
