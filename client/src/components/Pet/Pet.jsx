import { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';




const Pet = () => {

  const [petName,setPetName]= useState("");
  const [petType,setPetType]= useState("");
  const [petGender,setPetGender] = useState("");
  const [petDescription,setPetDescription] = useState("")
  // const [petLike,setPetLike] = useState("");
  const [petImage,setPetImage] = useState("");
  const [errors, setErrors] = useState({});
  const navigateTo = useNavigate();

  const handleClick = () =>{
    navigateTo('/show/pets')
  }
  
  const savePet = e =>{
    e.preventDefault();
    console.log({petName:petName,
      petType:petType,
      petDescription:petDescription,
      petGender:petGender,
    petImage:petImage})
    axios.post("http://localhost:8000/pets/new",{
      petName:petName,
      petType:petType,
      petDescription:petDescription,
      petGender:petGender,
      petImage:petImage
      
    })
    .then(res => navigateTo('/show/pets'))
    .catch(err =>{ setErrors(err.response.data.errors)
      console.log(err)})
  }


  return (
    < >
    <div className="bg-dogostep h-[950px] bg-no-repeat">
      <div className="mx-auto h-[14rem] max-w-[1080px] w-screen border">
        
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <div>
             <img src="../src/assets/logo.png" alt="" className='h-32 w-32' />
             
            </div>
           
        </div>
        <div className='flex justify-end' ><button type='button' className='btn btn-primary' onClick={handleClick} >show pets</button></div>
      </div>

      <form onSubmit={savePet} action='/upload' encType='multipart/form-data'>
      <div className='mx-auto h-[23rem]  max-w-[1090px] w-screen border'>
        
        <div className=" grid grid-cols-1 grid-rows-1 gap-4 ">

            <div className=" flex justify-center place-items-center mx-auto h-96 w-[24rem] border gap-3  join join-vertical  " >
          
            
            <input type="text" placeholder="Nombre" value={petName}
            onChange={(e)=>setPetName(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs" />
            {errors.petName ? <span className="text-danger">{errors.petName.message}</span>: null}
            
            <input type="text" value={petType} id='petType' onChange={(e)=>setPetType(e.target.value)} placeholder="perro o gato" className="input  input-bordered  input-primary w-full max-w-xs " />
            {errors.petType ? <span className="text-danger">{errors.petType.message}</span>: null} 
            
            
            <select value={petGender} id='petGender' onChange={(e)=>{setPetGender(e.target.value),console.log(e.target.value)}}  className="select select-primary w-full max-w-xs">
            <option disabled selected value={''}>Sexo</option>
            <option value={'Masculino'} id='Masculino'>Masculino</option>
            <option value={'Femenino'} id='Femenino'>Femenino</option>
            </select>

            

              
            {/* <input type="file"  value={petImage} id='PetImage' onChange={(e)=>setPetImage(e.target.value)} className="file-input file-input-bordered file-input-success w-full max-w-xs" /> */}
            <div></div>
            <textarea value={petDescription} id='petDescription' onChange={(e)=>setPetDescription(e.target.value)}  className="textarea textarea-primary w-80" placeholder="Bio"></textarea>
           <div className='flex justify-end'><button type='submit' className="btn btn-success">Success</button></div>
            
            </div>
            
            
            
        </div>
    
      </div>
      
      </form>
      
    </div>
    </>
  )
}

export default Pet