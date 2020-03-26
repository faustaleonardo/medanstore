'use strict';
module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define(
    'Voucher',
    {
      itemId: DataTypes.INTEGER,
      discount: DataTypes.SMALLINT,
      expiredTime: DataTypes.DATE
    },
    {}
  );
  Voucher.associate = function(models) {
    Voucher.belongsTo(models.Item, {
      foreignKey: 'itemId',
      targetKey: 'id',
      as: 'item'
    });
  };
  return Voucher;
};
