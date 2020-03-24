exports.sendSuccessResponse = (ctx, data, statusCode = 200) => {
  ctx.status = statusCode;

  ctx.body = {
    status: 'success',
    data: {
      data
    }
  };
};

exports.sendResponseIfNotFound = async (ctx, id, model) => {
  const record = await model.findByPk(id);
  if (!record) ctx.throw(404, `${model.name} not found`);
};
