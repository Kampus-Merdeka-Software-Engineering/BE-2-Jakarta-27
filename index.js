const express = require('express');
const router = express.Router();
const { sequelize, news, Voting } = require('./db'); // Import the 'news' model from db.js
var cors = require('cors')

const app = express();
app.use(express.json());

// Endpoint for submitting votes
app.post('/submit-vote', async (req, res) => {
  try {
    // Capture the user's IP address from the request
    const voterIP = req.ip;

    // Extract other data from the request body
    const { id_paslon } = req.body;

    // Save the vote to the database
    const vote = await Voting.create({
      voterIP,
      id_paslon,
    });

    res.json({ success: true, vote });
  } catch (error) {
    console.error('Error submitting vote:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});



async function getNews() {
  try {
    // Use the 'news' model directly to perform queries
    const results = await news.findAll({
      attributes: ['id_berita', 'title_isu', 'upload_date', 'gambar_isu', 'isu', 'id_paslon'],
    });

    return results;
  } catch (error) {
    console.error('Error retrieving news:', error);
    return [];
  }
}
app.use(cors())
app.get('/news', async (req, res) => {
  const newsData = await getNews();
  res.json(newsData);
});

app.get('/news/:id_berita', async (req, res) => {
  const id_berita = req.params.id_berita;

  try {
    const result = await news.findOne({
      where: {
        id_berita: id_berita,
      },
      attributes: ['id_berita', 'title_isu', 'upload_date', 'gambar_isu', 'isu', 'id_paslon'],
    });

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'News not found' });
    }
  } catch (error) {
    console.error('Error retrieving news by id:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.use('/', router);
const port = 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});