const express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("html and css"));
app.listen(3000, function(req, res) {
    console.log("server started");
});
let data = [];


//          SIGN IN
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html and css/signin.html");
});

app.post("/", function(req, res) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i].email == req.body.email) && (data[i].pass == req.body.password)) {
            res.send("Good day, " + data[i].name)
        } else {
            res.send("Not Signed up or wrong credentials");
        }
    }
});


//          SIGN UP 
app.get("/signup.html", function(req, res) {
    res.sendFile(__dirname + "/html and css/signup.html");
});

app.post("/signup.html", function(req, res) {
    data.push({"name": req.body.name, "email": req.body.email, "pass": req.body.password});
    console.log(data);
    res.sendFile(__dirname + "/html and css/signin.html");
});