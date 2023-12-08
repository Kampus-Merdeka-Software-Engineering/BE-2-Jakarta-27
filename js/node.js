const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "berita_capres"
});

const ip = process.env.REMOTE_ADDR; // Assuming you pass the remote address as an environment variable
const date = new Date().toISOString().slice(0, 10);
const time = new Date().toLocaleTimeString('en-US', { hour12: false });
const vote = process.env.VOTE; // Assuming you pass the vote as an environment variable

connection.connect((err) => {
    if (err) {
        console.error("Connection failed: ", err);
        return;
    }

    const sql = `INSERT INTO voting (ip_address, date, time, result) VALUES ('${ip}', '${date}', '${time}', ${vote})`;

    connection.query(sql, (error, results) => {
        if (error) {
            console.error("Error: ", error);
        } else {
            console.log("Vote berhasil dimasukkan");
            // Handle redirection or other actions here
        }

        connection.end();
    });
});
