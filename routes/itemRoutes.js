const Router = require('koa-router');
const router = new Router();

const BASE_URL = '/api/v1/items';
router.get(BASE_URL, async ctx => {
  ctx.body = {
    status: 'success',
    data: {
      items: [
        { name: 'Keyboard', price: 22 },
        { name: 'Piano', price: 32 },
        { name: 'Table', price: 10 }
      ]
    }
  };
});

module.exports = router;
