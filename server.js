const express = require("express");
const app = express();
const mongoose = require("mongoose");

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

// patient

var patientSchema = new mongoose.Schema(
  {
    Id: { type: Number, unique: true },
    Name: String,
    Sex: String,
    Phone: Number,
    Specimen: String,
    heamaArr: { },
    urineArr: { },
  },
  {
    versionKey: false
  }
);
var patientInfo = mongoose.model("patientinfo", patientSchema,"patientinfo");

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
}); // jkds

// save data
app.post("/api/print", function(req, res) {
  mongoose.connect("mongodb://localhost/labdb");

var newpatient = new patientSchema
  {
   Name:req.body.name,
   Sex:req.body.gen,
   Phone:req.body.phNum,
   Specimen: req.body.speci,
   heamaArr: req.body.heamaR
   });

newpatient.save(function(err) {
if (err) {
   console.log(err);
   res.send("Error while saving");
   } else {
   res.send("Save Successfully");
}
mongoose.connection.close();
});
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
})




