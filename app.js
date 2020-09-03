const express=require('express');
const bodyParser=require("body-parser");
const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));



app.get("/",function(req,res){
  res.render("index");
});
app.get("/circles",function(req,res){
  res.render("circles");
});

app.get("/drums",function(req,res){
  res.render("drums");
});


app.listen(8000,function(){
  console.log("server runnning");
});
