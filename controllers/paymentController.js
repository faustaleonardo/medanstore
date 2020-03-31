const models = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');
const { getExpiredTime } = require('../utils/expire');
const { filterFields } = require('../utils/filter');

const acceptedFields = ['discount', 'deliveryCost', 'deliveryAddress'];

exports.getPayments = async ctx => {
  const { id } = ctx.state.user;
  const payments = await models.Payment.findAll({ where: { userId: id } });

  sendSuccessResponse(ctx, payments);
};

exports.getPayment = async ctx => {
  const { id } = ctx.params;

  const payment = await models.Payment.findByPk(id);
  if (!payment) ctx.throw(404, `Payment not found`);

  sendSuccessResponse(ctx, payment);
};

exports.createPayment = async ctx => {
  const { orderId } = ctx.params;

  const filteredBody = filterFields(ctx.request.body, acceptedFields);

  const userId = ctx.state.user.id;
  const expiredTime = getExpiredTime();

  const data = { ...filteredBody, orderId, userId, expiredTime };

  const payment = await models.Payment.create(data);

  sendSuccessResponse(ctx, payment);
};

exports.updatePayment = async ctx => {
  const { orderId } = ctx.params;

  const payment = await models.Payment.findOne({ where: { orderId } });
  if (!payment) ctx.throw(404, `Payment not found`);

  const { active, statusPayment } = ctx.request.body;

  if (active !== undefined) payment.active = active;
  if (statusPayment !== undefined) payment.statusPayment = statusPayment;

  await payment.save();

  sendSuccessResponse(ctx, payment);
};
