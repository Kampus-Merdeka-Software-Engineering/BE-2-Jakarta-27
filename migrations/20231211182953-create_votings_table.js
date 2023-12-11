'use strict';
const { sequelize } = require('../db')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('voting', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      choice: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      ipAddress: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
  });


await sequelize.sync();},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('voting');
  }
};
