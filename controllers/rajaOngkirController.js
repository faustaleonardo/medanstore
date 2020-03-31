const { sendSuccessResponse } = require('../utils/response');

const rajaOngkir = require('rajaongkir-nodejs').Starter(
  process.env.RAJA_ONGKIR_API_KEY
);

const params = {
  // Jakarta Pusat
  origin: 152,
  weight: 1700
};

exports.getCities = async ctx => {
  try {
    const cities = await rajaOngkir.getCities();
    sendSuccessResponse(ctx, cities);
  } catch (err) {
    ctx.throw(500, err);
  }
};

exports.getJNECost = async ctx => {
  try {
    const { id } = ctx.params;
    params.destination = id;

    const costs = await rajaOngkir.getJNECost(params);
    sendSuccessResponse(ctx, costs);
  } catch (err) {
    ctx.throw(500, err);
  }
};

exports.getPOSCost = async ctx => {
  try {
    const { id } = ctx.params;
    params.destination = id;

    const costs = await rajaOngkir.getPOSCost(params);
    sendSuccessResponse(ctx, costs);
  } catch (err) {
    ctx.throw(500, err);
  }
};

exports.getTIKICost = async ctx => {
  try {
    const { id } = ctx.params;
    params.destination = id;

    const costs = await rajaOngkir.getTIKICost(params);
    sendSuccessResponse(ctx, costs);
  } catch (err) {
    ctx.throw(500, err);
  }
};
