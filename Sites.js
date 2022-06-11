const express = require("express");
const router = express.Router();

//Route Index
router.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

router.get("/index", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

router.get("/indexjs", function (req, res) {
    res.sendFile(__dirname + "/js/index.js");
});

router.get("/indexcss", function (req, res) {
    res.sendFile(__dirname + "/css/index.css");
});


//Homepage
router.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/homepage.html");
});
router.get("/homepage", function (req, res) {
    res.sendFile(__dirname + "/html/homepage.html");
});

router.get("/homepagejs", function (req, res) {
    res.sendFile(__dirname + "/js/homepage.js");
});

router.get("/homepagecss", function (req, res) {
    res.sendFile(__dirname + "/css/homepage.css");
});

module.exports = router;