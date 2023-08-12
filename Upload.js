const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import modul cors
const mysql = require("mysql");

const app = express();
app.use(bodyParser.json());

// Menggunakan cors middleware
app.use(cors());

// Routes dan logika lainnya

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "veni"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

app.post("/saveData", (req, res) => {
    const data = req.body.data;

    const sql = "INSERT INTO kekecewaan (text) VALUES (?)";
    con.query(sql, [data], function (err, result) {
        if (err) {
            console.error("Error:", err);
            res.json({ message: "Error saving data" });
        } else {
            console.log("1 record inserted");
            res.json({ message: "Data saved successfully" });
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
