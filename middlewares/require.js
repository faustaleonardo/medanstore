exports.requireLogin = async (ctx, next) => {
  if (!ctx.isAuthenticated()) ctx.throw(401, 'You need to login');

  await next();
};

exports.requireAdmin = async (ctx, next) => {
  if (ctx.state.user.roleId !== 1)
    ctx.throw(401, 'Sorry. Only admin can access this!');

  await next();
};
