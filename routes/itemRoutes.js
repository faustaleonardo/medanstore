const Router = require('@koa/router');

const { requireLogin, requireAdmin } = require('../middlewares/require');

const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

const router = new Router();

const BASE_URL = '/api/v1/items';

router.get(`${BASE_URL}`, getItems);
router.get(`${BASE_URL}/:id`, getItem);
router.post(`${BASE_URL}`, requireLogin, requireAdmin, createItem);
router.patch(`${BASE_URL}/:id`, requireLogin, requireAdmin, updateItem);
router.delete(`${BASE_URL}/:id`, requireLogin, requireAdmin, deleteItem);

module.exports = router;
