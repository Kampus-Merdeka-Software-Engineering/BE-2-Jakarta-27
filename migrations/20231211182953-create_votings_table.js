'use strict';
const { sequelize } = require('../db')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Voting', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      voterIP: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      id_paslon: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
    });

await sequelize.sync();},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Voting');
  }
};
