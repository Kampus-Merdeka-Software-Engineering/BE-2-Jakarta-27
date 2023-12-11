// Import required modules
const express = require('express');
const mysql = require('mysql');

// Create an instance of Express.js
const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'berita_capres'
});

// Handle database connection errors
pool.on('error', (err) => {
  console.error('MySQL connection error:', err);
});

// Define a route to test the database connection
app.get('/test', (req, res) => {
  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Failed to get MySQL connection' });
    }

    // Execute a sample query to test the connection
    connection.query('SELECT CURRENT_USER() AS result', (err, results) => {
      // Release the connection back to the pool
      connection.release();

      if (err) {
        console.error('Error executing MySQL query:', err);
        return res.status(500).json({ error: 'Failed to execute MySQL query' });
      }

      // Send the query result as a response
      res.json({ result: results[0].result });
    });
  });
});

app.get('/news', (req, res) => {
  const query = 'SELECT title_isu, upload_date, gambar_isu, isu FROM berita';

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Failed to get MySQL connection' });
    }

    connection.query(query, (err, results) => {
      connection.release();

      if (err) {
        console.error('Error executing MySQL query:', err);
        return res.status(500).json({ error: 'Failed to execute MySQL query' });
      }

      res.json(results);
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});