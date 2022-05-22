const express = require("express");
const router = express.Router();

//Route Index
router.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

router.get("/index", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

router.get("/indexjs", function (req, res) {
    res.sendFile(__dirname + "/index.js");
});

router.get("/indexcss", function (req, res) {
    res.sendFile(__dirname + "/index.css");
});


//Homepage
router.get("/homepage", function (req, res) {
    res.sendFile(__dirname + "/homepage.html");
});

router.get("/homepagejs", function (req, res) {
    res.sendFile(__dirname + "/homepage.js");
});

router.get("/homepagecss", function (req, res) {
    res.sendFile(__dirname + "/homepage.css");
});

module.exports = router;