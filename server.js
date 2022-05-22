const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
    "mongodb+srv://admin:admin123@mike.ynkhc.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }, { unseUnifiedTopology: true }
);

mongoose.connection.once("open", () => console.log("Connection approved"));


//Sites
const sites = require("./Sites");
app.use("/", sites);

const login = require("./SignupLogin");
app.use("/", login);


app.listen(3000, function () {
    console.log("Server is running on 3000");
});
