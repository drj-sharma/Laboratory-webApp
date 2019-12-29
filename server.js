const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyparser = require("body-parser");

// for CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
 });


//Signup schema & model
// var SignupSchema = new mongoose.Schema(
//   {
//     Name: String,
//     Username: String,
//     Password: String
//   },
//   {
//     versionKey: false
//   }
// );
// var Signup = mongoose.model("signup", SignupSchema,"signup");

// patient

var patientSchema = new mongoose.Schema(
  {
    Name: String,
    Sex: String,
    Phone: Number,
    Specimen: String,
    Date: Date
    //heamaArr: { },
    //urineArr: { },
  },
  {
    versionKey: false
  }
);
var patientinfo = mongoose.model("patientinfo", patientSchema,"patientinfo");

// report data
var HeamotologySchema = new mongoose.Schema(
  {
    id: String,
    Heamoarr: Array
    //heamaArr: { },
    //urineArr: { },
  },
  {
    versionKey: false
  }
);

var heamo = mongoose.model("Heamotology", HeamotologySchema,"Heamotology");



app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// app.post("/api/login", function(req, res) {
//   mongoose.connect("mongodb://localhost/labdb");
//   console.log(req.body);

//   Signup.find({ Username:req.body._name,Password:req.body._pass}, function(err, data)
//   {
//   if (err)
//   {
//   console.log(err);
//   res.send(err);
//   }
//   else
//   {
//   console.log(data);
//   res.send(data);
//   }
//   mongoose.connection.close();
//  });
// }); // jkds

// save patient data
app.post("/api/patientinfo", function(req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb");
var newpatient = new patientinfo(
  {
   Name:req.body.nm,
   Sex: req.body.gen,
   Phone:req.body.ph,
   Specimen: req.body.speci,
   Date: Date.now()
  // heamaArr: req.body.heamaR
   });

newpatient.save(function(err) {
if (err) {
   console.log(err);
   res.send("Error while saving");
   } else {
   res.send(newpatient._id);
}
mongoose.connection.close();
});
});


// save report-data of patients
app.post("/api/report-heamo", function(req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb");
var newheamo = new heamo(
  {
   id: req.body.id,
   Heamoarr: req.body.hm
   });

newheamo.save(function(err) {
if (err) {
   console.log(err);
   res.send("Error while saving");
   } else {
   res.send("Save report");
}
mongoose.connection.close();
});
});


// fetch patient-data
app.get("/api/fetchpatients", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb");

  patientinfo.find(function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

