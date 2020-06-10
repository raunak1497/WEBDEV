const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

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
    const data ={
        members:[
            {
                email_address : email,
                status : "subscribed",
                merge_fields : {
                    FNAME : firstName,
                    LNAME : lastName
                }
            }
        ]
    };
   
    const jsonData = JSON.stringify(data);
    const url = 'https://us10.api.mailchimp.com/3.0/lists/011bb4ff5d';

    const options = {
        method: "POST",
        body: data,
        auth: "user:1c7c39d1474ceb08216730bf15149ea9-us10"
      };

    // const options ={
    //     method : 'POST',
    //     auth : ''
    // }

    // https.request(url , options , function(req1,response){

    // })

    const request = https.request(url, options, function(response){

        if(response.statusCode===200){
          res.send(__dirname + "/success.html");
        }
        else{
          res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
          console.log(JSON.parse(data));
        });
     
      });
     
      request.write(jsonData);
      request.end();
});

app.post("/failure",function(req,res){
  res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server is up on port 3000");
}) 

//API Key
//1c7c39d1474ceb08216730bf15149ea9-us10

//List id
// 011bb4ff5d