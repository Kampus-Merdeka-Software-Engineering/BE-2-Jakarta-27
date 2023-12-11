const Sequelize = require('sequelize');

// Create a Sequelize instance with connection details
const sequelize = new Sequelize('berita_capres', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


// Define a model for the "berita" table
const news = sequelize.define('berita', {
  id_berita: { type: Sequelize.DataTypes.INTEGER, primaryKey: true },
  title_isu: { type: Sequelize.DataTypes.TEXT, allowNull: false },
  upload_date: { type: Sequelize.DataTypes.TEXT, allowNull: false },
  gambar_isu: { type: Sequelize.DataTypes.STRING(255), allowNull: false },
  isu: { type: Sequelize.DataTypes.TEXT, allowNull: false },
  id_paslon: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
});

module.exports = {
  sequelize,
  news,
};