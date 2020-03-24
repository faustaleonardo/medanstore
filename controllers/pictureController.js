const models = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');

exports.getPictures = async ctx => {
  const itemId = ctx.params.id;
  const pictures = await models.Picture.findAll({ where: { itemId } });

  sendSuccessResponse(ctx, pictures);
};

exports.createPicture = async ctx => {
  const itemId = ctx.params.id;
  const { paths } = ctx.request.body;

  const data = [];
  for (let path of paths) {
    data.push({ itemId, path });
  }

  // UPLOADING TO DIRECTORY [PENDING]

  await models.Picture.bulkCreate(data);
};

exports.deleteOnePicture = async ctx => {
  const { id } = ctx.request.body;

  // REMOVE FROM DIRECTORY [PENDING]

  await models.Picture.destroy({ where: { id } });
};

exports.deleteAllPictures = async ctx => {
  const itemId = ctx.params.id;

  // REMOVE FROM DIRECTORY [PENDING]

  await models.Picture.destroy({ where: { itemId } });
};
