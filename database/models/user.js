'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: Sequelize.INTEGER
    },
    {}
  );
  User.associate = function(models) {
    User.hasOne(models.Role, {
      as: 'roles',
      targetKey: 'id',
      foreignKey: 'roleId'
    });
  };
  return User;
};
