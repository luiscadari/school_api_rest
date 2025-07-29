'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        name: 'João',
        last_name: "Silva",
        email: 'joao@email.com',
        age: 20,
        weight: 70.5,
        height: 1.75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Maria',
        last_name: "Silva",
        email: 'maria@email.com',
        age: 20,
        weight: 70.5,
        height: 1.75,
        created_at: new Date(),
        updated_at: new Date()
      },      {
        name: 'Carlos',
        last_name: "Silva",
        email: 'carlos@email.com',
        age: 20,
        weight: 70.5,
        height: 1.75,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {})
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
