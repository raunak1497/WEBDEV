const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');

app.get("/",function(req,res){
    
    var today = new Date();
    var currentDay = today.getDay();
    var day="";

    switch(currentDay){

        case 0:
            day="sunday";
            break;

        case 1:
            day="Monday";
            break;

        case 2:
            day="Tuesday";
            break;

        case 3:
            day="Wednesday";
            break;

        case 4:
            day="Thursday";
            break;

        case 5:
            day="Friday";
            break;

        case 6:
            day="Saturday";
            break;
    }
    if(today.getDay()===6 || today.getDay() ==0){
        // day="weekend";
        // res.write("<h1>Yay, it's the weekend</h1>");
    }
    else{
        // day="weekday";
        // res.write("<h1>Boo, it's a working day</h1>");
    }

    res.render("list",{kindOfDay : day } );
    
    res.send();
});

app.listen(3000,function(){
    console.log("Server is live");
});
