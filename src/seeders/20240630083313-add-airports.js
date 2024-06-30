'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kempegowda International Airport',
        address:'Bengluru',
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pune International Airport',
        address:'Pune',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        address:'New Delhi',
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },

     
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

  }
};