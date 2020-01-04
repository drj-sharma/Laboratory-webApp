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
    Age: Number,
    Sex: String,
    Phone: Number,
    Specimen: String,
    Refdoc: String,
    Date: Date
  },
  {
    versionKey: false
  }
);
var patientinfo = mongoose.model("patientinfo", patientSchema, "patientinfo");

// report haemo data
var haemotologySchema = new mongoose.Schema(
  {
    id: String,
    haemoarr: Array
    //heamaArr: { },
    //urineArr: { },
  },
  {
    versionKey: false
  }
);
var haemo = mongoose.model("haemotology", haemotologySchema, "haemotology");


// report blood data
var bloodSchema = new mongoose.Schema(
  {
    id: String,
    bloodarr: Array
  },
  {
    versionKey: false
  }
);
var blood = mongoose.model("bloodBiochemical", bloodSchema, "bloodBiochemical");


// report liquid data
var liquidSchema = new mongoose.Schema(
  {
    id: String,
    liquidarr: Array
  },
  {
    versionKey: false
  }
);
var liquid = mongoose.model("lipidProfile", liquidSchema, "lipidProfile");

// report liver data
var liverSchema = new mongoose.Schema(
  {
    id: String,
    liverarr: Array
  },
  {
    versionKey: false
  }
);
var liver = mongoose.model("liverFunctionalTest", liverSchema, "liverFunctionalTest");

// report renal data
var renalSchema = new mongoose.Schema(
  {
    id: String,
    renalarr: Array
  },
  {
    versionKey: false
  }
);
var renal = mongoose.model("renalFunctionalTest", renalSchema, "renalFunctionalTest");

// report serum data
var serumSchema = new mongoose.Schema(
  {
    id: String,
    serumarr: Array
  },
  {
    versionKey: false
  }
);
var serum = mongoose.model("serumElectrolytes", serumSchema, "serumElectrolytes");

// report serol data
var serolSchema = new mongoose.Schema(
  {
    id: String,
    serolarr: Array,
    serolWidalarr: Array
  },
  {
    versionKey: false
  }
);
var serol = mongoose.model("serologicalTest", serolSchema, "serologicalTest");


// report urine data
var urineSchema = new mongoose.Schema(
  {
    id: String,
    urinearr: Array
  },
  {
    versionKey: false
  }
);
var urine = mongoose.model("urineExamination", urineSchema, "urineExamination");


// report semen data
var semenSchema = new mongoose.Schema(
  {
    id: String,
    semenarr: Array
  },
  {
    versionKey: false
  }
);
var semen = mongoose.model("semenExamination", semenSchema, "semenExamination");

// bodyparser for json type data handling in the form of req and res body
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// app.post("/api/login", function(req, res) {
//   mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
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
app.post("/api/patientinfo", function (req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newpatient = new patientinfo(
    {
      Name: req.body.nm,
      Age: req.body.age,
      Sex: req.body.gen,
      Phone: req.body.ph,
      Specimen: req.body.speci,
      Refdoc: req.body.ref,
      Date: Date.now()
      // heamaArr: req.body.heamaR
    });

  newpatient.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send(newpatient._id);
    }
    mongoose.connection.close();
  });
});


// save report-haemotology of patients
app.post("/api/report-haemo", function (req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newhaemo = new haemo(
    {
      id: req.body.id,
      haemoarr: req.body.hm
    });

  newhaemo.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send("Save haemotology report");
    }
    mongoose.connection.close();
  });
});

// save report-urine of patients
app.post("/api/report-blood", function (req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  var newblood = new blood({
    id: req.body.id,
    bloodarr: req.body.bl
  });
  newblood.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    }
    else {
      res.send("Save blood report");
    }
    mongoose.connection.close();
  });
});

// save report-liquid of patients
app.post("/api/report-liquid", function (req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newliquid = new liquid(
    {
      id: req.body.id,
      liquidarr: req.body.lq
    });

  newliquid.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send("Save liquid report");
    }
    mongoose.connection.close();
  });
});

// save report-liver of patients
app.post("/api/report-liver", function (req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newliver = new liver(
    {
      id: req.body.id,
      liverarr: req.body.lv
    });

  newliver.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send("Save liver report");
    }
    mongoose.connection.close();
  });
});

// save report-renal of patients
app.post("/api/report-renal", function (req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newrenal = new renal({
    id: req.body.id,
    renalarr: req.body.rn
  });
  newrenal.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    }
    else {
      res.send("Save renal report");
    }
    mongoose.connection.close();
  });
});

// save report-serum of patients
app.post("/api/report-serum", function (req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newserum = new serum(
    {
      id: req.body.id,
      serumarr: req.body.sr
    });

  newserum.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send("Save serum report");
    }
    mongoose.connection.close();
  });
});

// save report-urine of patients
app.post("/api/report-urine", function (req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newurine = new urine(
    {
      id: req.body.id,
      urinearr: req.body.ur
    });

  newurine.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send("Save urine report");
    }
    mongoose.connection.close();
  });
});


// save report-serol of patients
app.post("/api/report-serol", function (req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newserol = new serol(
    {
      id: req.body.id,
      serolarr: req.body.sl,
      serolWidalarr: req.body.slwd
    });

  newserol.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send("Save serol report");
    }
    mongoose.connection.close();
  });
});

// save report-semen of patients
app.post("/api/report-semen", function (req, res) {
  console.log(req.body);
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newsemen = new semen(
    {
      id: req.body.id,
      semenarr: req.body.sm
    });

  newsemen.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send("Save semen report");
    }
    mongoose.connection.close();
  });
});

// fetch patient-data
app.get("/api/fetchpatients", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});

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

// get user data by id
app.get("/api/fetchpatientbyid", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  console.log(req.query);

  patientinfo.find({ _id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});

// get haemotology data by id


// get user haemo by id
app.get("/api/haemo-rep", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  haemo.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});

// get user urine report data by id
app.get("/api/blood-rep", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  blood.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});

// get user liquid report by id
app.get("/api/liquid-rep", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  liquid.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});

// get user urine report by id
app.get("/api/urine-rep", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  urine.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});

// get user urine report by id
app.get("/api/semen-rep", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  semen.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});

// get user urine report by id
app.get("/api/serol-rep", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  serol.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});


// get user liver report by id
app.get("/api/liver-rep", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  liver.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});

// get user renal report by id
app.get("/api/renal-rep", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  renal.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});

// get user serum report data by id
app.get("/api/serum-rep", function (req, res) {
  mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  serum.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

