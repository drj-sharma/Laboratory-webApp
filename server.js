const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyparser = require("body-parser");

// for CORS
app.use(async function (req, res, next) {
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
    Date: Date,
    Reg: { type: Number, default: 100 }
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
var liver = mongoose.model("liverasync functionalTest", liverSchema, "liverasync functionalTest");

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
var renal = mongoose.model("renalasync functionalTest", renalSchema, "renalasync functionalTest");

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

// report haemo data
var stoolSchema = new mongoose.Schema(
  {
    id: String,
    stoolarr: Array
    //heamaArr: { },
    //urineArr: { },
  },
  {
    versionKey: false
  }
);
var stool = mongoose.model("stoolExamination", stoolSchema, "stoolExamination");

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

// report other data
var otherSchema = new mongoose.Schema(
  {
    id: String,
    otherarr: Array,
    widalarr: Array
  },
  {
    versionKey: false
  }
);
var other = mongoose.model("otherTest", otherSchema, "otherTest");

// bodyparser for json type data handling in the form of req and res body
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


var dbURL = 'mongodb://localhost/labdb';
mongoose.connect(dbURL, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log("Mongoose default connection is open to " + dbURL);
});

mongoose.connection.on('error', function (err) {
  console.log("Mongoose default connection has occurred " + err + " error");
});

mongoose.connection.on('disconnected', function () {
  console.log("Mongoose default connection is disconnected");
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log("Mongoose default connection is disconnected due to application termination");
    process.exit(0)
  });
});

// app.post("/api/login", async function(req, res) {
//   mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
//   console.log(req.body);

//   Signup.find({ Username:req.body._name,Password:req.body._pass}, async function(err, data)
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
//  

//   mongoose.connection.close(););
// }); // jkds

// save patient data


app.post("/api/patientinfo", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newpatient = new patientinfo(
    {
      Name: req.body.nm,
      Age: req.body.age,
      Sex: req.body.gen,
      Phone: req.body.ph,
      Specimen: req.body.speci,
      Refdoc: req.body.ref,
      Date: Date.now(),
      Reg: req.body.reg,
      // heamaArr: req.body.heamaR
    });

  newpatient.save(function (err) {
    if (err) {
      console.log(err);
      res.send(" Error while saving");
    } else {
      res.send(newpatient._id);
    }
  })
    ;
  // mongoose.connection.close();
});


// save report-haemotology of patients
app.post("/api/report-haemo", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
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
  })
    ;
  // mongoose.connection.close();
});

// save report-urine of patients
app.post("/api/report-blood", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
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
  });
  // mongoose.connection.close();
});

// save report-liquid of patients
app.post("/api/report-liquid", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
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
  })
    ;
  // mongoose.connection.close();
});

// save report-liver of patients
app.post("/api/report-liver", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
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
  })
    ;
  // mongoose.connection.close();
});

// save report-renal of patients
app.post("/api/report-renal", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
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
  })
    ;
  // mongoose.connection.close();
});

// save report-serum of patients
app.post("/api/report-serum", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
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
  })
    ;
  // mongoose.connection.close();
});

// save report-urine of patients
app.post("/api/report-urine", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
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
  })
    ;
  // mongoose.connection.close();
});

// save report-stool of patients
app.post("/api/report-stool", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newstool = new stool(
    {
      id: req.body.id,
      stoolarr: req.body.st
    });

  newstool.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send("Save stool report");
    }
  })
    ;
  // mongoose.connection.close();
});



// save report-serol of patients
app.post("/api/report-serol", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
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
  })
    ;
  // mongoose.connection.close();
});

// save report-semen of patients
app.post("/api/report-semen", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newsemen = new semen(
    {
      id: req.body.id,
      semenarr: req.body.sm
    });

  const data = await newsemen.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send("Save semen report");
    }
  })
    ;
  // mongoose.connection.close();
});


// save report-serum of patients
app.post("/api/report-other", async function (req, res) {
  console.log(req.body);
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  var newother = new other(
    {
      id: req.body.id,
      otherarr: req.body.ot,
      widalarr: req.body.wd
    });

  newother.save(function (err) {
    if (err) {
      console.log(err);
      res.send("Error while saving");
    } else {
      res.send("Save other report");
    }
  })
    ;
  // mongoose.connection.close();
});


// get patient-data
app.get("/api/fetchpatients", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});

  const data = await patientinfo.find(function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});

// get user data by id
app.get("/api/fetchpatientbyid", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true , poolSize: 10});
  console.log(req.query);

  const data = await patientinfo.find({ _id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});


// get user haemo by id
app.get("/api/haemo-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  const data = await haemo.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});

// get user urine report data by id
app.get("/api/blood-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolsize: 10 });
  console.log(req.query);
  const data = await blood.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});

// get user liquid report by id
app.get("/api/liquid-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolsize: 10 });
  console.log(req.query);
  const data = await liquid.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});

// get user urine report by id
app.get("/api/urine-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolsize: 10 });
  console.log(req.query);
  const data = await urine.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});


// get user stool report by id
app.get("/api/stool-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolsize: 10 });
  console.log(req.query);
  const data = await stool.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});

// get user urine report by id
app.get("/api/semen-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolsize: 10 });
  console.log(req.query);
  const data = await semen.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});

// get user urine report by id
app.get("/api/serol-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolsize: 10 });
  console.log(req.query);
  const data = await serol.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});


// get user liver report by id
app.get("/api/liver-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolsize: 10 });
  console.log(req.query);
  const data = await liver.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});

// get user renal report by id
app.get("/api/renal-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  const data = await renal.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});

// get user serum report data by id
app.get("/api/serum-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolSize: 10 });
  console.log(req.query);
  const data = await serum.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});


// get user other report by id
app.get("/api/other-rep", async function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb", { useNewUrlParser: true, poolsize: 10 });
  console.log(req.query);
  const data = await other.find({ id: req.query.id }, function (err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});
// search patient
app.get("/api/fetchPatientbyname", function (req, res) {
  // mongoose.connect("mongodb://localhost/labdb");
  console.log(req.query);

  // db.users.find(name: new RegExp(search));
  // ({name: { $regex: '.' + name + '.' } }).limit(5);

  var pname = req.query.querysearch;
  patientinfo.find({ Name: { $regex: '.*' + pname, $options: 'i' } }, function (err, data) {
    if (err) {
      console.log(err);
      res.send("No result found");
    }
    else {
      console.log(data);
      res.send(data);
    }
  })
    ;
  // mongoose.connection.close();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

