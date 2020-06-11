const express = require("express");

const bodyParser = require("body-parser");

const app = express();
var items = ["Buy food","cook food","eat food"];
var item="";
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended : true}))

app.get("/",function(req,res){
    
    var today = new Date();

    var options = {
        weekday: "long",
        year: "numeric",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US",options);

    res.render("list",{kindOfDay : day, newListItem : items });
    
    res.send("hi");
});

app.post("/", function(req,res) {
    item = req.body.newItem;

    items.push(item);
    
    res.redirect("/",)
    console.log(item);
})

app.listen(3000,function(){
    console.log("Server is live");
});
