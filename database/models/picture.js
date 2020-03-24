'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define(
    'Picture',
    {
      itemId: DataTypes.INTEGER,
      path: DataTypes.STRING
    },
    {}
  );
  Picture.associate = function(models) {
    // associations can be defined here
    Picture.belongsTo(models.Item, {
      foreignKey: 'itemId',
      targetKey: 'id',
      as: 'item'
    });
  };
  return Picture;
};
