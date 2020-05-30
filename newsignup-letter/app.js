const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

app = express();

app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req,res){
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    console.log(firstName, lastName ,email);
    
})
app.listen(3000,function(){
    console.log("Server is up on port 3000");
}) 