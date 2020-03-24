const Router = require('koa-router');

const { requireLogin, requireAdmin } = require('../middlewares/require');

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');

const router = new Router();

const BASE_URL = '/api/v1/categories';

router.get(`${BASE_URL}`, getCategories);
router.get(`${BASE_URL}/:id`, getCategory);
router.post(`${BASE_URL}`, requireLogin, requireAdmin, createCategory);
router.patch(`${BASE_URL}/:id`, requireLogin, requireAdmin, updateCategory);
router.delete(`${BASE_URL}/:id`, requireLogin, requireAdmin, deleteCategory);

module.exports = router;
