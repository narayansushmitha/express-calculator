const express = require("express");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");

app.listen(port);
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
var result = Number(req.body.num1)+Number(req.body.num2);
res.send("Result is "+result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
var height = Number(req.body.height);
var weight = Number(req.body.weight);
var bmi=weight/Math.pow(height,2);
res.send("Your BMI is "+bmi);
});
