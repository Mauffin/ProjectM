const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/Pets",{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
  .then(()=>console.log("connectado a db"))
  .catch(err => console.log("Error en conexion con DB" + err )+ err);