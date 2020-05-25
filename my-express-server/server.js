const express = require("express");

const app = express();

const port = 3000;

app.get("/",function(request,response){
    response.send("<h1> Hello World!! </h1>");
});

app.get("/about",function(req,res){
    res.send("<h1> Raunak Singh </h1> <h2> I am A web Developer and a undergrad student of computer Science</h2>");
});

app.listen(port,function(){
    console.log("server started on port 3000");
});

