const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
    });

app.post("/",function(req,res){

    // console.log(req.body.cityName)
    // console.log("Post request recieved")

    const query = req.body.cityName;
    const apiKey = "dab3b16def2fbf038730f4434994681e"
    const unit = "metric"
    const url ="https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey +"&units="+unit;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            // converting hexadecimal to JSON format 
            const weatherdata = JSON.parse(data);
            console.log(weatherdata);

            // converting JSON to string 
            const object = {
                name : "raunak",
                food : "maggi"
            }
            console.log(JSON.stringify(object));

            const temp = weatherdata.main.temp;
            const weatherdescription = weatherdata.weather[0].description;
            // console.log(temp);

            const icon = weatherdata.weather[0].icon;  
            const imageURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";

            res.write("<h1> The weather is "  + weatherdescription + "</h1>");
            res.write("<h1> The temperature in "+ query +" is " + temp + " degrees celsius </h1>");
            res.write("<img src= " + imageURL + ">");
            res.send();
        });
    });
        // res.send("hello,world!!"); we can have only one res send
});

    

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})