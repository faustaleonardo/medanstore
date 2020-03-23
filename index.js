const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const logger = require('koa-logger');
const passport = require('koa-passport');
const session = require('koa-session');

const app = new Koa();
const itemRouter = require('./routes/itemRoutes');
const authRouter = require('./routes/authRoutes');

require('dotenv').config();
require('./services/passport');

app.use(cors());

app.use(logger());
app.use(bodyParser());

app.keys = [process.env.COOKIE_KEY];
app.use(session({}, app));

app.use(passport.initialize());
app.use(passport.session());

app.use(itemRouter.routes());
app.use(authRouter.routes());

const port = 4000;

app.listen(port, () => {
  console.log(`Server is listenig on port ${port}`);
});
