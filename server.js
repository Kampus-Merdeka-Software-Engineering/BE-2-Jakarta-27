const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const bookRoute = require('./routers/book.routers');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync();

app.get('/isu', (req, res) => {
    res.send('Hello World!');
});

app.get('/paslon', (req, res) => {
    res.send('Hello World!');
});

app.get('/berita', (req, res) => {
    res.send('Hello World!');
});

app.post('/voting', (req, res) => {
    res.send
})

app.use('/api/capstone_project_be_grup27', bookRoute)


app.listen(port, () => console.log(`Server runs well`));
