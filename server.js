const express = require("express")
const cors = require("cors");
const multer = require('multer')
const fs = require('fs')
const app = express();


app.use(express.json(), express.urlencoded({extended:true}));

app.use(
  cors({
    origin:"http://localhost:3000"
  })
)

//
require("./server/config/mongoose.config");

//importar rutas
const Routes = require('./server/routes/pet.routes');
Routes(app);




app.listen(8000,()=>console.log("server on!!"));


// const upload = multer({dest:'uploads/'});

// app.post('/images/single',upload.single('imagenPerfil'),(req,res)=>{
//   console.log(req.file);
//   saveImage(req.file);
//   res.send('termina');
// })

// function saveImage(file){
//   const newPath = `./uploads/${file.originalName}`;
//   fs.renameSync(file.path,newPath);
//   return newPath
// }

//////////////////////////////////////////////////////////////

const Pet = require('./server/model/pet.model')


// Storage
const Storage = multer.diskStorage({
  destination:'uploads',
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }
})

const upload = multer({
  storage:Storage
}).single()

app.post('/upload',(req,res)=>{
  upload(req,res,(err)=>{
    if(err){
      console.log(err)
    }
  else{
    const newImage = new Pet({
      name:req.body.name,
      image:{
        data:req.file.filename,
        contentType:'image/png'
      }
    })
    newImage.save()
    .then(()=>res.send('successfully upload'))
    .catch(err=> console.log(err))
  }
  })

})
