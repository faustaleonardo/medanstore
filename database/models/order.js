'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      orderId: DataTypes.UUID,
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      discount: DataTypes.SMALLINT,
      quantity: DataTypes.INTEGER,
      statusPayment: DataTypes.BOOLEAN,
      expiredTime: DataTypes.DATE,
      active: DataTypes.BOOLEAN
    },
    {}
  );
  Order.associate = function(models) {
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'id',
      as: 'user'
    });

    Order.belongsTo(models.Item, {
      foreignKey: 'itemId',
      targetKey: 'id',
      as: 'item'
    });
  };
  return Order;
};
