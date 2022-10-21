const express = require("express");
var mysql = require('mysql');
const app = express();
var cors = require('cors');
const port = 8080;
const DB_PREFIX = 'ee_';
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "asdqwe123",
    database: "ee_blog"
});
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })

);
app.use(cors());


//SQL INJECTION PROTECTION
app.get('/api/v1/blog/:id', (req, res) => {
    let blogId=req.params.id;
    let SQL="SELECT * FROM " + DB_PREFIX + "blogs WHERE id=?"
    con.query(SQL,blogId, function (err, result, fields) {
        res.json({ 'results': result })
    });
});
app.get('/api/v1/all-blogs', (req, res) => {
    let SQL="SELECT * FROM " + DB_PREFIX + "blogs"
    con.query(SQL,null, function (err, result, fields) {
        res.json({ 'results': result })
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});