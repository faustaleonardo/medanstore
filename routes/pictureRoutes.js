const Router = require('@koa/router');
const upload = require('../services/upload');

const { requireLogin, requireAdmin } = require('../middlewares/require');

const {
  getPictures,
  createPicture,
  deletePicture,
  deletePictures
} = require('../controllers/PictureController');

const router = new Router();

const BASE_URL = '/api/v1/pictures';

router.get(`${BASE_URL}/items/:id`, getPictures);
router.post(
  `${BASE_URL}/items/:id`,
  requireLogin,
  requireAdmin,
  upload.array('images'),
  createPicture
);
router.delete(
  `${BASE_URL}/items/:id`,
  requireLogin,
  requireAdmin,
  deletePictures
);
router.delete(`${BASE_URL}/:id`, requireLogin, requireAdmin, deletePicture);

module.exports = router;
