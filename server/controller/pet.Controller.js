const Pet = require('../model/pet.model');

module.exports.Create_Pet = (req,res)=>{
  Pet.create(req.body)
    .then(pet=>res.json(pet))
    .catch(err=>res.status(400).json(err));
}

module.exports.Get_all_Pets = (req,res)=>{
  Pet.find().collation({locale:'en'}).sort({petType:1})
    .then(pet => res.json(pet))
    .catch(err => res.json({message:"hubo un error: " + err }));
}
module.exports.Get_one_Pet = (req,res)=>{
  Pet.findOne({_id:req.params.id})
    .then(pet => res.json(pet) )
    .catch(err=> res.json({message:"hubo un error: "+ err}));
}

module.exports.Update_Pet = (req,res)=>{
  Pet.FinByIdAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
    .then(pet =>res.json(pet))
    .catch(err => res.status(400).json(err));
} 

module.exports.Delete_Pet = (req,res)=>{
  pet.deleteOne({_id:req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json({message:"hubo un error: " + err}))
}