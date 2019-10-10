var express = require("express");
var app = express();
var mongoose = require("mongoose");

// for CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
 });


//Signup schema & model
var SignupSchema = new mongoose.Schema(
  {
    Name: String,
    Username: String,
    Password: String
  },
  {
    versionKey: false
  }
);
var Signup = mongoose.model("signup", SignupSchema,"signup");


app.post("/api/signup", function(req, res) {
  mongoose.connect("mongodb://localhost/labdb");

  var newsignup = new Signup(
    {
     Name:req.body.name,
     Username: req.body.username,
     Password: req.body.password
     });

  newsignup.save(function(err) {
  if (err) {
     console.log(err);
     res.send("Error while signing up!");
     } else {
     res.send("Signup Successful");
 }
  mongoose.connection.close();
  });
 });


app.post("/api/login", function(req, res) {
  mongoose.connect("mongodb://localhost/labdb");
  console.log(req.body);

  Signup.find({ Username:req.body._name,Password:req.body._pass}, function(err, data)
  {
  if (err)
  {
  console.log(err);
  res.send(err);
  }
  else
  {
  console.log(data);
  res.send(data);
  }
  mongoose.connection.close();
 });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})




