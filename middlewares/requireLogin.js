module.exports = async (ctx, next) => {
  if (!ctx.isAuthenticated()) ctx.throw(401, 'You need to login');

  await next();
};
