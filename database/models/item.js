'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'Item',
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.TEXT,
      stock: DataTypes.INTEGER,
      condition: DataTypes.STRING,
      cpu: DataTypes.STRING,
      storage: DataTypes.STRING,
      display: DataTypes.TEXT,
      ram: DataTypes.STRING,
      battery: DataTypes.STRING,
      rearCamera: DataTypes.TEXT,
      frontCamera: DataTypes.STRING,
      os: DataTypes.STRING,
      categoryId: DataTypes.INTEGER
    },
    {}
  );
  Item.associate = function(models) {
    Item.hasOne(models.Category, {
      foreignKey: 'id',
      targetKey: 'categoryId',
      as: 'category'
    });
  };
  return Item;
};
