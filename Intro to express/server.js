const express = require('express');
const app = express();
const port = 3000;

app.get("/",function(req,res){
    // console.log(request);
    // response.send("hello");
    res.send("<h1> Hello World!!</h1>");
})

app.get("/contact",function(req,res){
    res.send("mail me at raunak1497@gmail.com");
})

app.get("/about",function(req,res){
    res.send("Name: Raunak singh qualification: undergrad");
})

app.get("/hobbies",function(req,res){
    res.send("<ul> <li> Books</li> <li> Beer</li> <li> Beaches</li></ul>");
})


app.listen(3000, function(){
    console.log("server started on port 3000");
})

