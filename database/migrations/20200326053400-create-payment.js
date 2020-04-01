'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      discount: {
        type: Sequelize.SMALLINT
      },
      deliveryCost: {
        type: Sequelize.DECIMAL
      },
      deliveryAddress: {
        type: Sequelize.STRING
      },
      courier: {
        type: Sequelize.STRING
      },
      finalPrice: {
        type: Sequelize.DECIMAL
      },
      statusPayment: {
        type: Sequelize.BOOLEAN
      },
      expiredTime: {
        type: Sequelize.DATE
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Payments');
  }
};
