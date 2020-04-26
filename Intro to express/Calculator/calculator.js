const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    res.send("suprise mf");
});

console.log(req.body);

app.listen(3000, function(){
    console.log("server started on port 3000");
});