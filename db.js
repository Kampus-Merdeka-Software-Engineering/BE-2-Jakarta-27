const Sequelize = require('sequelize');

// Create a Sequelize instance with connection details
const sequelize = new Sequelize('mysql://root:e56dCc24acEHCh562bH3dbD34H63fhCB@viaduct.proxy.rlwy.net:55202/railway')

// Define a model for the "berita" table
const news = sequelize.define('berita', {
  id_berita: { type: Sequelize.DataTypes.INTEGER, primaryKey: true },
  title_isu: { type: Sequelize.DataTypes.TEXT, allowNull: false },
  upload_date: { type: Sequelize.DataTypes.TEXT, allowNull: false },
  gambar_isu: { type: Sequelize.DataTypes.STRING(255), allowNull: false },
  isu: { type: Sequelize.DataTypes.TEXT, allowNull: false },
  id_paslon: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
});

const voting = sequelize.define('voting', {
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


module.exports = {
  sequelize,
  news,
  voting,
};