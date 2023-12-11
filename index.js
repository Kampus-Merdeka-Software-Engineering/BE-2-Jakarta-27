const express = require('express');
const router = express.Router();
const { sequelize, news, voting } = require('./db'); // Import the 'news' model from db.js
var cors = require('cors')

const app = express();
app.use(express.json());

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

// Define a route to handle voting
app.post('/voting/vote', async (req, res) => {
  try {
    const { choice } = req.body;
    const ipAddress = req.ip; // Get the IP address of the voter

    // Check if the voter with the same IP address has already voted
    const existingVote = await voting.findOne({ where: { ipAddress } });

    if (existingVote) {
      return res.status(400).json({ error: 'You have already voted.' });
    }

    // Record the vote in the database
    const newVote = await voting.create({ choice, ipAddress });

    return res.json({ message: 'Vote submitted successfully.', vote: newVote });
  } catch (error) {
    console.error('Error submitting vote:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.use('/', router);
const port = 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});