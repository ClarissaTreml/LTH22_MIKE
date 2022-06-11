const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
let loginData; //to able to use it later

//create a data schema
const userSchema =  {
    id: String,
    name: String,
    username: String,
    password: String,
    email: String,
}

const User = mongoose.model('User', userSchema);

function login(){

    var password = document.getElementById("pw").value;
    var username = document.getElementById("usn").value;


    for (obj of userSchema) {

        if (obj.username === username && obj.password === password) {
            console.log(obj.username, username);
            sessionStorage.setItem("password", password);
            sessionStorage.setItem("username", username);
            return true;
        }

    }

    for (obj of userSchema) {

        if (obj.username !== username && obj.password !== password) {

            document.getElementById("pls").value = "please check username";
            return false;
        } else if (obj.username === username && obj.password !== password) {

            document.getElementById("pls").value = "wrong password";
            return false;
        }

    }
}










router.get("/index", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

//app.get("/", function (req, res) {
//    res.send("express is working")
//})
router.get("/login.js", function (req, res) {
    res.sendFile(__dirname + "/js/login.js");
});
router.get("/index.css", function (req, res) {
    res.sendFile(__dirname + "/css/index.css");


});
router.get("/homepage", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
})
router.get("/homepagejs", function (req, res) {
    res.sendFile(__dirname + "/js/homepage.js");
});
router.get("/homepagecss", function (req, res) {
    res.sendFile(__dirname + "/css/homepage.css");
});

router.post("/", function (req, res) {
    let newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    newUser.save();
    res.redirect('/homepage');
});



module.exports = router;