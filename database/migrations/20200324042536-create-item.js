'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      description: {
        type: Sequelize.TEXT
      },
      stock: {
        type: Sequelize.INTEGER
      },
      condition: {
        type: Sequelize.STRING
      },
      cpu: {
        type: Sequelize.STRING
      },
      display: {
        type: Sequelize.TEXT
      },
      ram: {
        type: Sequelize.STRING
      },
      storage: {
        type: Sequelize.STRING
      },
      battery: {
        type: Sequelize.STRING
      },
      rearCamera: {
        type: Sequelize.TEXT
      },
      frontCamera: {
        type: Sequelize.STRING
      },
      os: {
        type: Sequelize.STRING
      },
      network: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
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
    return queryInterface.dropTable('Items');
  }
};
