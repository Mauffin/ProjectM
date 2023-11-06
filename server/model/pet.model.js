const mongoose = require('mongoose');

const Schema_Pet = new mongoose.Schema({
  petName:{
    type:String,
    required:[true,'el campo debe ser obligatorio'],
    minlength:[3,'debe contar con 3 caracteres minimo']
  },
  petType:{
    type:String,
    required:[true,'el campo es obligatorio'],
    minlength:[3,'debe contar con 3 caracteres minimo'],

  },
  petGender:{
    type:String,
    required:[true,""]
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
module.exports= Pet;