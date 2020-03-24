'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Pictures',
      [
        {
          itemId: 1,
          path: 'samsung-s10-plus-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 1,
          path: 'samsung-s10-plus-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 2,
          path: 'samsung-note-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 2,
          path: 'samsung-note-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 3,
          path: 'samsung-s20-plus-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 3,
          path: 'samsung-s20-plus-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 4,
          path: 'huawei-p30-pro-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 4,
          path: 'huawei-p30-pro-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 5,
          path: 'huawei-p20-pro-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 5,
          path: 'huawei-p20-pro-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 6,
          path: 'huawei-mate-20-x-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 6,
          path: 'huawei-mate-20-x-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 7,
          path: 'iphone-7.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 8,
          path: 'iphone-8-plus-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 8,
          path: 'iphone-8-plus-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 8,
          path: 'iphone-8-plus-3.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 9,
          path: 'iphone-x-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 9,
          path: 'iphone-x-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 10,
          path: 'xiaomi-mi-9t-pro-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 10,
          path: 'xiaomi-mi-9t-pro-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 11,
          path: 'xiaomi-poco-x2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 12,
          path: 'oppo-reno-3-pro-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 12,
          path: 'oppo-reno-3-pro-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 13,
          path: 'oppo-find-x2.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pictures', null, {});
  }
};
