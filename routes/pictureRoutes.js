const Router = require('koa-router');

const { requireLogin, requireAdmin } = require('../middlewares/require');

const {
  getPictures,
  createPicture,
  deletePicture,
  deletePictures
} = require('../controllers/PictureController');

const router = new Router();

const BASE_URL = '/api/v1/pictures';

router.get(`${BASE_URL}/:itemId`, getPictures);
router.post(`${BASE_URL}/:itemId`, requireLogin, requireAdmin, createPicture);
router.delete(
  `${BASE_URL}/:itemId`,
  requireLogin,
  requireAdmin,
  deletePictures
);
router.delete(`${BASE_URL}`, requireLogin, requireAdmin, deletePicture);

module.exports = router;
