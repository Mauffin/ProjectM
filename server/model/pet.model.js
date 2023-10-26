const mongoose = require('mongoose');

const Schema_Pet = new mongoose.Schema({
  pet_Name:{
    type:String,
    required:[true,'el campo debe ser obligatorio'],
    minlength:[3,'debe contar con 3 caracteres minimo']
  },
  petType:{
    type:String,
    required:[true,'el campo es obligatorio'],
    minlength:[3,'debe contar con 3 caracteres minimo'],

  },
  petDescription:{
    type:String,
    required:[true,"el campo es obligatorio"],
    minlength:[3 ,"debe contar con 3 caracteres minimo"]
  },
  petLike:{
    type:Number,
  },
  petImage:{
    data:Buffer,
    contentType:String
  }
},{timestamps:true,versionKey:false})

const Pet = mongoose.model("Schema_Pet",Schema_Pet);
module.export= Pet