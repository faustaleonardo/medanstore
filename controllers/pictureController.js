const models = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');

exports.getPictures = async ctx => {
  const itemId = ctx.params.itemId;

  const item = await models.Item.findByPk(itemId);
  if (!item) ctx.throw(404, `Item not found`);

  const pictures = await models.Picture.findAll({ where: { itemId } });

  sendSuccessResponse(ctx, pictures);
};

exports.createPicture = async ctx => {
  const itemId = ctx.params.itemId;
  const item = await models.Item.findByPk(itemId);
  if (!item) ctx.throw(404, `Item not found`);

  const { paths } = ctx.request.body;
  const data = [];
  for (let path of paths) {
    data.push({ itemId, path });
  }

  // UPLOADING TO DIRECTORY [PENDING]
  const pictures = await models.Picture.bulkCreate(data, { returning: true });
  sendSuccessResponse(ctx, pictures);
};

exports.deletePictures = async ctx => {
  const itemId = ctx.params.itemId;

  const item = await models.Item.findByPk(itemId);
  if (!item) ctx.throw(404, `Item not found`);
  // REMOVE FROM DIRECTORY [PENDING]

  await models.Picture.destroy({ where: { itemId } });
  sendSuccessResponse(ctx, null, 204);
};

exports.deletePicture = async ctx => {
  const { id } = ctx.request.body;

  const item = await models.Picture.findByPk(id);
  if (!item) ctx.throw(404, `Picture not found`);
  // REMOVE FROM DIRECTORY [PENDING]

  await models.Picture.destroy({ where: { id } });
  sendSuccessResponse(ctx, null, 204);
};
