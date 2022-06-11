const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


//create a data schema
const contactSchema =  {
    id: String,
    title: String,
    name: String,
    lastname: String,
    fullName: String,
    email: String,
    address: String,
    phoneNumber: String,

}

const Contact = mongoose.model('Constact', contactSchema);

function addContact(){
    var title = document.getElementById("title").value;
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var fullname = document.getElementById("name"+ "lastname").value;
    var email = document.getElementById("email").value;
    var adress = document.getElementById("adress").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

}

router.post("/homepage", function (req, res) {
    let newContact = new Contact({
        title: req.body.title,
        name: req.body.name,
        lastname: req.body.lastname,
        fullName: req.body.fullname,
        email: req.body.email,
        address: req.body.adress,
        phoneNumber: req.body.phoneNumber,
    });
    newContact.save();
    res.redirect('/homepage');
});

module.exports = router;