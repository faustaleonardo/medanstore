'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const totalDays = 5 * 24 * 60 * 60 * 1000;
    const fiveDaysFromToday = new Date(new Date().getTime() + totalDays);

    return queryInterface.bulkInsert(
      'Vouchers',
      [
        {
          itemId: 1,
          discount: 10,
          expiredTime: fiveDaysFromToday,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 2,
          discount: 20,
          expiredTime: fiveDaysFromToday,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 3,
          discount: 30,
          expiredTime: fiveDaysFromToday,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
