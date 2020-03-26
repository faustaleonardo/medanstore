const models = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');
const { filterFields } = require('../utils/filter');

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
  const filteredBody = filterFields(ctx.request.body, acceptedFields);

  item = await models.Item.create(filteredBody);

  sendSuccessResponse(ctx, item, 201);
};

exports.updateItem = async ctx => {
  const { id } = ctx.params;
  const item = await models.Item.findByPk(id);
  if (!item) ctx.throw(404, `Item not found`);

  const filteredBody = filterFields(ctx.request.body, acceptedFields);
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
