exports.login = async ctx => {
  ctx.body = {
    status: 'success',
    data: {
      user: ctx.state.user
    }
  };
};

exports.logout = async ctx => {
  ctx.logout();
  ctx.redirect('/');
};

exports.error = async ctx => {
  ctx.body = {
    status: 'fail',
    message: 'Username or password is incorrect!'
  };
};
