const Router = require('koa-router');

const requireLogin = require('../middlewares/requireLogin');

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
router.post(`${BASE_URL}`, requireLogin, createCategory);
router.patch(`${BASE_URL}/:id`, requireLogin, updateCategory);
router.delete(`${BASE_URL}/:id`, requireLogin, deleteCategory);

module.exports = router;
