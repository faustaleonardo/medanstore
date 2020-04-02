const Koa = require('koa');
const send = require('koa-send');
const bodyParser = require('koa-body');
const cors = require('@koa/cors');
const passport = require('koa-passport');
const session = require('koa-session');
const { sequelize } = require('./database/models');

const app = new Koa();

const itemRouter = require('./routes/itemRoutes');
const authRouter = require('./routes/authRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const pictureRouter = require('./routes/pictureRoutes');
const voucherRouter = require('./routes/voucherRoutes');
const orderRouter = require('./routes/orderRoutes');
const paymentRouter = require('./routes/paymentRoutes');
const rajaOngkirRouter = require('./routes/rajaOngkirRoutes');

require('dotenv').config();
require('./services/passport');

app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(require('koa-logger')());
}

app.use(bodyParser());

app.keys = [process.env.COOKIE_KEY];
app.use(session({}, app));

app.use(passport.initialize());
app.use(passport.session());

app.use(itemRouter.routes());
app.use(authRouter.routes());
app.use(categoryRouter.routes());
app.use(pictureRouter.routes());
app.use(voucherRouter.routes());
app.use(orderRouter.routes());
app.use(paymentRouter.routes());
app.use(rajaOngkirRouter.routes());

// error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.result;
    ctx.app.emit('error', err, ctx);
  }
});
app.on('error', (err, ctx) => {
  console.log(err);
});

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(async ctx => {
    await send(ctx, path.resolve(__dirname, 'client', 'build', 'index.html'), {
      root: 'client/build'
    });
  });
}

const port = 4000;
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
