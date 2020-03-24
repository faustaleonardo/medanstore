'use strict';
module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define(
    'Delivery',
    {
      orderId: DataTypes.INTEGER,
      cost: DataTypes.DECIMAL
    },
    {}
  );
  Delivery.associate = function(models) {
    Delivery.belongsTo(models.Order, {
      foreignKey: 'orderId',
      targetKey: 'orderId',
      as: 'order'
    });
  };
  return Delivery;
};
