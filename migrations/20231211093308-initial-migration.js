'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the "berita" table
    await queryInterface.createTable('berita', {
      id_berita: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title_isu: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      upload_date: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      gambar_isu: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      isu: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      id_paslon: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Drop the "berita" table
    await queryInterface.dropTable('berita');
  },
};