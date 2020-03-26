'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.INTEGER
    },
    {}
  );
  User.associate = function(models) {
    User.hasOne(models.Role, {
      foreignKey: 'id',
      targetKey: 'roleId',
      as: 'role'
    });
    User.hasMany(models.Order, {
      foreignKey: 'userId',
      targetKey: 'id',
      as: 'orders'
    });
    User.hasMany(models.Payment, {
      foreignKey: 'userId',
      targetKey: 'id',
      as: 'payments'
    });
  };
  return User;
};
