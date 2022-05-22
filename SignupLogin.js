const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//create a data schema
const userSchema =  {
    id: String,
    name: String,
    username: String,
    password: String,
    email: String,
    adresse: String,
}

const User = mongoose.model('User', userSchema);


router.get("/", function (req, res) {
    res.sendFile(__dirname + "/");
})
//app.get("/", function (req, res) {
//    res.send("express is working")
//})


router.post("/", function (req, res) {
    let newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    newUser.save();
    res.redirect('/');
});


module.exports = router;