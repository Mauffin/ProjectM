const PetController = require('../controller/pet.Controller')

module.exports=(app)=>{
  app.post("/pets/new",PetController.Create_Pet);
  app.get("/pets/",PetController.Get_all_Pets);
  app.get("/pets/:id",PetController.Get_one_Pet);
  app.put("/pet/e/edit/:id",PetController.Update_Pet);
  app.delete("/pet/d/e/delete/:id",PetController.Delete_Pet)
}