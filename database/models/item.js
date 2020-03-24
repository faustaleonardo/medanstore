'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'Item',
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      unit: DataTypes.STRING,
      condition: DataTypes.STRING,
      categoryId: DataTypes.INTEGER
    },
    {}
  );
  Item.associate = function(models) {
    Item.hasOne(models.Category, {
      foreignKey: 'categoryId',
      targetKey: 'id',
      as: 'category'
    });
  };
  return Item;
};
