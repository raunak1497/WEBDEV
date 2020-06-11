const express = require("express");

const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
var items = ["Buy food","cook food","eat food"];
var item="";
let workItems = [];


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/",function(req,res){

    let day =date.getDate();
    res.render("list",{listTitle : day, newListItem : items });
    
    res.send("hi");
});

app.post("/", function(req,res) {

    item = req.body.newItem;
    if(req.body.list  === "Work"){
        workItems.push(item);
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }
    console.log(item);
})

app.get("/work",function(req,res){
    res.render("list",{listTitle : "Work list", newListItem : workItems});
})

app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");

});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("Server is live");
});
