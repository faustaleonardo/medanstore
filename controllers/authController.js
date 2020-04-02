const bcrypt = require('bcryptjs');
const models = require('../database/models');
const { promisify } = require('util');

const { sendSuccessResponse } = require('../utils/response');

exports.signup = async ctx => {
  const { username, email, password } = ctx.request.body;
  let user;

  user = await models.User.findOne({ where: { username } });
  if (user) {
    ctx.throw(401, 'The username has been taken!');
  }

  user = await models.User.findOne({ where: { email } });
  if (user) {
    ctx.throw(401, 'The email has been registered. Just log in instead.');
  }

  const hashedPassword = await promisify(bcrypt.hash)(password, 10);
  user = await models.User.create({
    username,
    email,
    password: hashedPassword
  });

  await ctx.login(user);
  sendSuccessResponse(ctx, ctx.state.user);
};

exports.login = async ctx => {
  sendSuccessResponse(ctx, ctx.state.user);
};

exports.logout = async ctx => {
  ctx.logout();
  sendSuccessResponse(ctx, null);
};

exports.user = async ctx => {
  sendSuccessResponse(ctx, ctx.state.user);
};

exports.error = async ctx => {
  ctx.throw(401, 'Username or password is incorrect!');
};
