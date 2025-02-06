"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@gmail.com",
          password_hash: await bcrypt.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          password_hash: await bcrypt.hash("password123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          password_hash: await bcrypt.hash("alice123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bob Brown",
          email: "bob.brown@example.com",
          password_hash: await bcrypt.hash("bob123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Charlie Davis",
          email: "charlie.davis@example.com",
          password_hash: await bcrypt.hash("charlie789", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
