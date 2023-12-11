const express = require('express');
const router = express.Router();
const { sequelize, news } = require('./db'); // Import the 'news' model from db.js

const app = express();

async function getNews() {
  try {
    // Use the 'news' model directly to perform queries
    const results = await news.findAll({
      attributes: ['title_isu', 'upload_date', 'gambar_isu', 'isu'],
    });

    return results;
  } catch (error) {
    console.error('Error retrieving news:', error);
    return [];
  }
}

app.get('/news', async (req, res) => {
  const newsData = await getNews();
  res.json(newsData);
});

// Start the server
app.use('/', router);
const port = 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});