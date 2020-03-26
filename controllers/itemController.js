const models = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');

const filter = body => {
  let fields = {};
  const acceptedFields = [
    'name',
    'price',
    'description',
    'stock',
    'condition',
    'cpu',
    'display',
    'ram',
    'storage',
    'battery',
    'rearCamera',
    'frontCamera',
    'os',
    'network',
    'categoryId'
  ];

  for (let fieldName of acceptedFields) {
    if (body[fieldName]) fields[fieldName] = body[fieldName];
  }

  return fields;
};

exports.getItems = async ctx => {
  const items = await models.Item.findAll();
  sendSuccessResponse(ctx, items);
};

exports.getItem = async ctx => {
  const { id } = ctx.params;

  const item = await models.Item.findByPk(id);
  if (!item) ctx.throw(404, `Item not found`);

  sendSuccessResponse(ctx, item);
};

exports.createItem = async ctx => {
  const filteredBody = filter(ctx.request.body);

  item = await models.Item.create(filteredBody);

  sendSuccessResponse(ctx, item, 201);
};

exports.updateItem = async ctx => {
  const { id } = ctx.params;
  const item = await models.Item.findByPk(id);
  if (!item) ctx.throw(404, `Item not found`);

  const filteredBody = filter(ctx.request.body);
  for (let key in filteredBody) item[key] = filteredBody[key];
  await item.save();

  sendSuccessResponse(ctx, item);
};

exports.deleteItem = async ctx => {
  const { id } = ctx.params;

  const item = await models.Item.findByPk(id);
  if (!item) ctx.throw(404, `Item not found`);

  await models.Item.destroy({ where: { id } });

  sendSuccessResponse(ctx, null, 204);
};
