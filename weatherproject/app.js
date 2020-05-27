const express = require("express");

const https = require("https");


const app = express();


app.get("/",function(req,res){

    const url ="https://api.openweathermap.org/data/2.5/weather?q=London&appid=dab3b16def2fbf038730f4434994681e&units=metric";
    https.get(url,function(response){
        console.log(response);
    });
        res.send("hello,world!!");
    });

app.listen(3000,function(){
    console.log("Server is listening on port 3000");
})