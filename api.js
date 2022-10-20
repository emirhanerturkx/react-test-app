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



//get or post
app.get("/Administrator", (req, res) => {
    //Reacte veri döndürür.
    // con.query("SELECT * FROM "+DB_PREFIX+"administrator", function (err, result, fields) {
    //     res.json({ result: result });
    // });


    //req.body.(parametre) gelen veriler.

});

app.get('/api/v1/all-blogs', (req, res) => {
    con.query("SELECT * FROM " + DB_PREFIX + "blogs", function (err, result, fields) {
        res.json({ 'results': result })
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});