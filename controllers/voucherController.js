const models = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');

exports.getVouchers = async ctx => {
  const vouchers = await models.Voucher.findAll();
  sendSuccessResponse(ctx, vouchers);
};

exports.getVoucher = async ctx => {
  const { id } = ctx.params;

  const voucher = await models.Voucher.findByPk(id);
  if (!voucher) ctx.throw(404, `Voucher not found`);

  sendSuccessResponse(ctx, voucher);
};

exports.createVoucher = async ctx => {
  const { code, discount } = ctx.request.body;
  const voucher = await models.Voucher.create({ code, discount });

  sendSuccessResponse(ctx, voucher, 201);
};

exports.updateVoucher = async ctx => {
  const { id } = ctx.params;
  const voucher = await models.Voucher.findByPk(id);
  if (!voucher) ctx.throw(404, `Voucher not found`);

  const { code, discount } = ctx.request.body;

  voucher.code = code;
  voucher.discount = discount;
  await voucher.save();

  sendSuccessResponse(ctx, voucher);
};

exports.deleteVoucher = async ctx => {
  const { id } = ctx.params;

  const voucher = await models.voucher.findByPk(id);
  if (!voucher) ctx.throw(404, `Voucher not found`);

  await models.Voucher.destroy({ where: { id } });

  sendSuccessResponse(ctx, null, 204);
};
